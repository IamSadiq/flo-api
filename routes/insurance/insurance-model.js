const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InsuranceSchema = new Schema({
    file: File
});

module.exports = mongoose.model('Insurance', InsuranceSchema);


