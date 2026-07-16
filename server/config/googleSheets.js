const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const renderSecret = "/etc/secrets/google-service-account.json";
const localSecret = path.join(__dirname, "ats-portal-502515-8b5ebc28eb1c.json");

const auth = new google.auth.GoogleAuth({
  keyFile: fs.existsSync(renderSecret) ? renderSecret : localSecret,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

module.exports = sheets;