const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManufacturerCertificateSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    docFile: String
});

module.exports = mongoose.model('ManufacturerCertificate', ManufacturerCertificateSchema);