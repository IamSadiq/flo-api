const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegulatorySchema = new Schema({
    // file: File
});

module.exports = mongoose.model('Regulatory', RegulatorySchema);