const { google } = require('googleapis');
const fs = require('fs');

// Read .env.local manually
const env = fs.readFileSync('.env.local', 'utf8');
const envVars = {};
env.split('\n').forEach(line => {
    const idx = line.indexOf('=');
    if (idx === -1 || line.trim().startsWith('#')) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    envVars[key] = val;
});

const clientEmail = envVars['GOOGLE_SHEETS_CLIENT_EMAIL'];
const privateKey = envVars['GOOGLE_SHEETS_PRIVATE_KEY'];
const spreadsheetId = envVars['GOOGLE_SPREADSHEET_ID'];

console.log('clientEmail:', clientEmail || 'MISSING');
console.log('privateKey set:', !!privateKey, 'length:', privateKey ? privateKey.length : 0);
console.log('spreadsheetId:', spreadsheetId || 'MISSING');

async function test() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });
        const res = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:E',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [['TEST_TS', 'Test User', 'test@juetguna.in', 'TEST001', '1st']] },
        });
        console.log('SUCCESS - HTTP Status:', res.status);
    } catch (e) {
        console.error('ERROR:', e.message);
        if (e.errors) console.error('DETAILS:', JSON.stringify(e.errors, null, 2));
        if (e.code) console.error('CODE:', e.code);
    }
}

test();
