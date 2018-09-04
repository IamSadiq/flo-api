const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CriaSchema = new Schema({
    docFile: String,
    bolNumber: String,
    billDate: String,
    eFormMNumber: String,
    locNumber: String,
    dateOfInsurance: String,
    inspectionDate: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('CRIA', CriaSchema);