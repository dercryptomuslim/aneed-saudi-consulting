import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Authentifizierung mit Google Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Fix für Vercel Env Vars
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Datum formatieren
    const date = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

    // Daten für die Zeile vorbereiten
    // Wir erwarten: Name, Email, Phone, Message, Type (Gründung/Residency/Kontakt), Extra (UNN/Iqama)
    const row = [
      date,
      body.name || "",
      body.email || "",
      body.phone || "",
      body.type || "Kontaktanfrage", // z.B. "Funnel - Gründung", "Kontaktformular"
      body.message || "",
      body.extra || "", // UNN, Iqama oder Thema
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1", // Fängt einfach unten an
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
