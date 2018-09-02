const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceiptSchema = new Schema({
    receiptNumber: String,
    quantity: Number,
    totalPrice: Number
});

module.exports = mongoose.model('Receipt', ReceiptSchema);