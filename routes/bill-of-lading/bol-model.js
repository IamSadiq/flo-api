const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BolSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    docFile: String,
    shippers: String,
    countryOfOrigin: String,
    numberOfContainers: Number,
    expectedDateOfArrival: String,
    dateOfDeparture: String
});

module.exports = mongoose.model('BillOfLading', BolSchema);