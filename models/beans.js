var mongoose = require('mongoose');

var BeanSchema = new mongoose.Schema({
    farm: String,
    process: String,
    varietal: String,
    notes: String
});

module.exports = mongoose.model('Bean', BeanSchema);