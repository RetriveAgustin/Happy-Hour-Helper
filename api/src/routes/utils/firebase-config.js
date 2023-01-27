var admin = require("firebase-admin");
require("dotenv").config();
const {
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  PROJECT_ID,
  CLIENT_EMAIL,
  TOKEN_URI,
  CLIENT_ID,
  AUTH_PROVIDER,
  CLIENT_CERT_URL,
  AUTH_URI
} = process.env;

const serviceAccount = {
  "type": "service_account",
  "project_id": PROJECT_ID,
  "private_key_id": PRIVATE_KEY_ID,
  "private_key": PRIVATE_KEY,
  "client_email": CLIENT_EMAIL,
  "client_id": CLIENT_ID,
  "auth_uri": AUTH_URI,
  "token_uri": TOKEN_URI,
  "auth_provider_x509_cert_url": AUTH_PROVIDER,
  "client_x509_cert_url": CLIENT_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;