const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CcvoSchema = new Schema({
    eFormMNumber: String,
    portOfDestination: String,
    dateOfShipment: String,
    shipmentId: String,
    countryOfSupply: String
});

module.exports = mongoose.model('Ccvo', CcvoSchema);