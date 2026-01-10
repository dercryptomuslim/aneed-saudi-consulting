import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"); // Fix für Vercel Env Vars
    const sheetTabName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM || "Oasis Gate <onboarding@resend.dev>";
    const resendTo = process.env.RESEND_TO || "info@oasisgate.de";

    if (!sheetId || !serviceAccountEmail || !privateKey) {
      console.error("Missing Google Sheets env vars:", {
        GOOGLE_SHEET_ID: Boolean(sheetId),
        GOOGLE_SERVICE_ACCOUNT_EMAIL: Boolean(serviceAccountEmail),
        GOOGLE_PRIVATE_KEY: Boolean(privateKey),
      });
      return NextResponse.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Authentifizierung mit Google Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Datum formatieren (Saudi Arabien)
    const date = new Date().toLocaleString("de-DE", { timeZone: "Asia/Riyadh" });

    // Daten normalisieren (Kontaktformular + Funnel unterstützen)
    const fullName =
      body.name ||
      [body.firstName, body.lastName].filter(Boolean).join(" ") ||
      "";

    const email = body.email || "";
    const phone = body.phone || "";
    const type =
      body.entityType || // Funnel
      body.topic || // Kontaktformular
      body.type || // legacy
      "Kontaktanfrage";
    const message = body.message || "";
    const extra = body.unn || body.iqama || body.extra || "";

    // Spalten: Datum | Name | Email | Telefon | Typ/Topic | Nachricht | Extra
    const row = [date, fullName, email, phone, type, message, extra];

    const appendToTab = async (tabName: string) => {
      return await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${tabName}!A:G`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [row],
        },
      });
    };

    const getGoogleErrorMessage = (err: any) => {
      return (
        err?.response?.data?.error?.message ||
        err?.errors?.[0]?.message ||
        err?.message ||
        "Unknown Google Sheets error"
      );
    };

    let response;
    let usedTabName = sheetTabName;
    try {
      response = await appendToTab(sheetTabName);
    } catch (err: any) {
      const msg = getGoogleErrorMessage(err);
      const shouldFallback =
        msg.includes("Unable to parse range") ||
        msg.includes("Requested entity was not found") ||
        msg.includes("No grid with id") ||
        msg.includes("not found");

      if (!shouldFallback) throw err;

      // Fallback: Tab automatisch ermitteln (häufig heißt er "Tabelle1" statt "Sheet1")
      const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
      const firstTab =
        meta.data.sheets?.[0]?.properties?.title ||
        meta.data.properties?.title ||
        "";

      if (!firstTab || firstTab === sheetTabName) throw err;

      usedTabName = firstTab;
      response = await appendToTab(firstTab);
    }

    // E-Mail Benachrichtigung (Resend) – darf Lead-Erfassung nicht blockieren
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const subject = `Neue Anfrage: ${type} – ${fullName || "Unbekannt"}`;
        const html = `
          <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
            <h2 style="margin: 0 0 12px;">Neue Lead-Anfrage</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
              <tr><td style="padding: 6px 0; width: 180px;"><strong>Datum (KSA)</strong></td><td style="padding: 6px 0;">${date}</td></tr>
              <tr><td style="padding: 6px 0;"><strong>Name</strong></td><td style="padding: 6px 0;">${fullName || "-"}</td></tr>
              <tr><td style="padding: 6px 0;"><strong>E-Mail</strong></td><td style="padding: 6px 0;">${email || "-"}</td></tr>
              <tr><td style="padding: 6px 0;"><strong>Telefon</strong></td><td style="padding: 6px 0;">${phone || "-"}</td></tr>
              <tr><td style="padding: 6px 0;"><strong>Typ</strong></td><td style="padding: 6px 0;">${type || "-"}</td></tr>
              <tr><td style="padding: 6px 0;"><strong>Extra</strong></td><td style="padding: 6px 0;">${extra || "-"}</td></tr>
            </table>
            <h3 style="margin: 18px 0 8px;">Nachricht</h3>
            <pre style="white-space: pre-wrap; background: #f6f7f8; padding: 12px; border-radius: 10px;">${(message || "-").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
            <p style="margin-top: 14px; color: #6b7280;">
              Hinweis: Der Lead wurde bereits in Google Sheets gespeichert.
            </p>
          </div>
        `;

        // Resend-Typen unterscheiden sich je Version (replyTo vs reply_to).
        // Wir setzen Reply-To bewusst über ein "any"-Objekt, damit der Build in Vercel stabil bleibt.
        const emailPayload: any = {
          from: resendFrom,
          to: [resendTo],
          subject,
          html,
        };
        if (email) emailPayload.replyTo = email;

        await resend.emails.send(emailPayload);
      } catch (mailError) {
        console.error("Resend Error:", mailError);
      }
    }

    return NextResponse.json({ success: true, data: response.data, usedTabName });
  } catch (error: any) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
