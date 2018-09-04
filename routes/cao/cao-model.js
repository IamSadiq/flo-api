const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaoSchema = new Schema({
    quantity: Number,
    price: Number,
    itemDetails: String,
    pfiNumber: String,
    hsCode: String,
    docFile: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('CAO', CaoSchema);