const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaoSchema = new Schema({
    quantity: Number,
    price: Number,
    itemDetails: String,
    pfiNumber: String,
    hsCode: String
});

module.exports = mongoose.model('Cao', CaoSchema);