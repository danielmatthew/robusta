var mongoose = require('mongoose');

var CoffeeSchema = new mongoose.Schema({
    prepMethod: String,
    review: String
});

module.exports = mongoose.model('Coffee', CoffeeSchema);