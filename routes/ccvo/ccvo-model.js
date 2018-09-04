const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CcvoSchema = new Schema({
    eFormMNumber: String,
    portOfDestination: String,
    dateOfShipment: String,
    shipmentId: String,
    countryOfSupply: String,
    docFile: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('Ccvo', CcvoSchema);