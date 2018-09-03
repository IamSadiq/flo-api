const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceiptSchema = new Schema({
    receiptNumber: String,
    quantity: Number,
    totalPrice: Number
    // file: File
});

module.exports = mongoose.model('Receipt', ReceiptSchema);