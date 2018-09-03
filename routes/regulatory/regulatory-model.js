const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegulatorySchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    file: Buffer
});

module.exports = mongoose.model('Regulatory', RegulatorySchema);