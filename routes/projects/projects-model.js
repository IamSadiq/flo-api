const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    projectNumber: Number,
    projectStartDate: String,
    projectName: String,
    supplyCategory: String,
    supplierName: String
});

module.exports = mongoose.model('Project', projectSchema);