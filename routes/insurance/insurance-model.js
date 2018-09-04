const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InsuranceSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    docFile: String
});

module.exports = mongoose.model('Insurance', InsuranceSchema);


