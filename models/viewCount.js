const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/userData");

const viewSchema = mongoose.Schema({
    ViewCount: Number
});

module.exports = mongoose.model('view', viewSchema);