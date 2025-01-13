const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/userData')

const feedbackSchema = mongoose.Schema({
    UserName: String,
    Email: String,
    Review: String,
    Rating: String
});

module.exports = mongoose.model('feedback', feedbackSchema);