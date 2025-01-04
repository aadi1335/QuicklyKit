const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/userData')

const userSchema = mongoose.Schema({
    UserName: String,
    Email: String,
    Password: String,
    AuthToken: String
})

module.exports = mongoose.model('user', userSchema)