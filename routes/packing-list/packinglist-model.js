const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackingListSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    docFile: String,
    bolNumber: String,
    exportDate: String,
    methodOfDispatch: String,
    descOfGoods: String,
    grossWeight: String,
    proofOfLoading: String,
    proofOfDischarge: String,
    exportee: String,
    typeOfShipment: String,
    packingInformation: String,
    numberOfPackages: Number,
    netWeight: String,
    containerNumber: String,
    dateOfDeparture: String,
    finalDestination: String,
    consignee: String,
    bagageNumber: String
});

module.exports = mongoose.model('PackingList', PackingListSchema);