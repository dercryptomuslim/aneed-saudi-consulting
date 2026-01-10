import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, entityType, unn, iqama } = body;

    // Authentifizierung mit Google Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    // ID aus der URL: https://docs.google.com/spreadsheets/d/1I2Z_0Dz_MvNCVgb-UbG0uOvc_vALby12TLNLZnLRapA/edit
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || '1I2Z_0Dz_MvNCVgb-UbG0uOvc_vALby12TLNLZnLRapA';

    // Daten vorbereiten
    const timestamp = new Date().toLocaleString('de-DE', { timeZone: 'Asia/Riyadh' });
    const idValue = entityType === 'COMPANY' ? `UNN: ${unn}` : entityType === 'RESIDENCY' ? `Iqama: ${iqama}` : '-';
    const typeLabel = entityType === 'COMPANY' ? 'Unternehmen' : entityType === 'RESIDENCY' ? 'Residency' : 'Interessent';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:G', // Schreibt einfach in die nächsten freien Zeilen der Spalten A bis G
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            timestamp,
            name,
            email,
            phone,
            typeLabel,
            idValue,
            message
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Google Sheets Error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Speichern der Daten', details: (error as Error).message }, 
      { status: 500 }
    );
  }
}

