const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
    invoiceNumber: String,
    quantity: Number,
    price: Number,
    file: file
});

module.exports = mongoose.model('Invoice', InvoiceSchema);