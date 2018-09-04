const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PfiSchema = new Schema({
    quantity: Number,
    price: Number,
    itemDetails: String,
    pfiNumber: String,
    hsCode: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('ProFormalInvoice', PfiSchema);