var admin = require("firebase-admin");
require("dotenv").config();
const {
  FR_PASSWORD
} = process.env;

const serviceAccount = FR_PASSWORD;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;