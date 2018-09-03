const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceiptSchema = new Schema({
    receiptNumber: String,
    quantity: Number,
    totalPrice: Number,
    docFile: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('Receipt', ReceiptSchema);