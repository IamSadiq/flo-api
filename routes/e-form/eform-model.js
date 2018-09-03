const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EformSchema = new Schema({
    productType: String,
    brandName: String,
    mName: String,
    quantity: Number,
    description: String,
    referenceNumber: String,
    packaging: String
    // file: File
});

module.exports = mongoose.model('Eform', EformSchema);