const { Router } = require("express");
const emailRouter = Router();

const { postEmail } = require('../controllers/emailController');

emailRouter.post("/postEmail", postEmail);

module.exports = emailRouter;