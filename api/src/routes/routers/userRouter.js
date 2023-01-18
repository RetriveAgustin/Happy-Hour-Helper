const { Router } = require('express');
const { User } = require('../db.js');
const { Op } = require('sequelize');
const bcryptjs = require('bcryptjs');
const admin = require('../config/firebase.js');
const router = Router();

router.post('/', async (req, res) => {
    const { token } = req.body;
    try {
        if (token) {
            const userInfo = await admin.auth().verifyIdToken(token)
            console.log(userInfo)
        }
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;