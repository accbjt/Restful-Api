
//load mongoose
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text : String,
    date : String
});