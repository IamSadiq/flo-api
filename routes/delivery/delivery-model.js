const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeliverySchema = new Schema({
    // file: File,
    remarks: String
});

module.exports = mongoose.model('Delivery', DeliverySchema);