const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router()

// POST /api/auth/register:   /api/auth/ is like prefix
router.post('/register', authController.registerUser)




module.exports = router