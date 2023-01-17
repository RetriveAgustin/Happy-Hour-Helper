const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios")
const router = Router();
const coRouter = require("./coRouter")
const acRouter = require("./acRouter")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 
router.use("/countries", coRouter)

router.use("/activities", acRouter)


module.exports = router;
