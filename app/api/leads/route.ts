import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"); // Fix für Vercel Env Vars
    const sheetTabName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

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

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetTabName}!A:G`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
