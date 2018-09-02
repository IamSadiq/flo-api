const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EformSchema = new Schema({
    productType: String,
    brandName: String,
    modelName: String,
    quantity: Number,
    description: String,
    referenceNumber: String,
    packaging: String,
    file: file
});

module.exports = mongoose.model('Eform', EformSchema);