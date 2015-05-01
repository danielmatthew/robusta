var mongoose = require('mongoose');

var BeanSchema = new mongoose.Schema({
    country: String,
    farm: String,
    process: String,
    varietal: String,
    notes: String
});

module.exports = mongoose.model('Bean', BeanSchema);