const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EformSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    docFile: String,
    productType: String,
    brandName: String,
    mName: String,
    quantity: Number,
    description: String,
    referenceNumber: String,
    packaging: String
});

module.exports = mongoose.model('Eform', EformSchema);