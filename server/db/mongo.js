const mongoose = require('mongoose')
const config = require('../config/default')

mongoose.connect(config.mongodb)

const userSchema = new mongoose.Schema({
  name: String,
  password: String
})

const Models = {
  User: mongoose.model('User', userSchema)
}

module.exports = Models
