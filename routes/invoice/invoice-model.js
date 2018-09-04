const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    invoiceNumber: String,
    quantity: Number,
    price: Number,
    docFile: String
});

module.exports = mongoose.model('Invoice', InvoiceSchema);