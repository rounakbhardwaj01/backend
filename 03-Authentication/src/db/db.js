const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers(['8.8.8.8', '8.8.4.4'])

async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')    

    } catch (err) {

        console.error("DB connection error: ", err)
        
    }
}

module.exports = connectDB