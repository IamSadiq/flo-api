const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CriaSchema = new Schema({
    file: File,
    bolNumber: String,
    billDate: String,
    eFormMNumber: String,
    locNumber: String,
    dateOfInsurance: String,
    inspectionDate: String
});

module.exports = mongoose.model('Cria', CriaSchema);