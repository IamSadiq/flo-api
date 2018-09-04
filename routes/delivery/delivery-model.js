const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeliverySchema = new Schema({
    docFile: String,
    remarks: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('Delivery', DeliverySchema);