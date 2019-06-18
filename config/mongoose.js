var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/code-output-discord', {useNewUrlParser: true});

module.exports = mongoose;