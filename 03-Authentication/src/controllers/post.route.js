const express = require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const router = express.Router()


router.post("/create", async(req, res) => {
    
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "UNauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id: decoded.id    //  basically asks MongoDB: "Find me the user whose _id is 6a7b237cXXXXXXXXXXX.   "MongoDB then gives you the whole document.
        })

        console.log(user)

    } catch (error) {
        return res.status(401).json({
            message: "Token is Invalid"
        })
    }


    
    res.send("Post created Successfully")
})

module.exports = router

