var mongoose = require('../config/mongoose');

var codeschema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    language: {
        type: String
    },
    content: {
        type: String
    },
    user: {
        type: String
    }
});

var Code = mongoose.model('Code', codeschema);

module.exports = Code;