const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManufacturerCertificateSchema = new Schema({
    file: File
});

module.exports = mongoose.model('ManufacturerCertificate', ManufacturerCertificateSchema);