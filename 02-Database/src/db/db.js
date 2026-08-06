const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers(['8.8.8.8', '8.8.4.4'])


async function connectDB() {

    await mongoose.connect('mongodb+srv://yt:nCqQNCgi7nb4QmOw@yt-complete-backend.58vuhhi.mongodb.net/halley')

    console.log('Connected to DB')
}


module.exports = connectDB