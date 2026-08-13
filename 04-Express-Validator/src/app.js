const express = require('express')
const validationRules = require('./middlewares/validator.middlewares')

const app = express()
app.use(express.json())

app.post("/register", validationRules.registerUserValidationRules,(req, res) => {
    
    const {username, email, password} = req.body


    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            username, email
        }
    })

})

module.exports = app