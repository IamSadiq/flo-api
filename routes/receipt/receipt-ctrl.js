const express = require('express');
const Receipt = require('./receipt-model');
const router = express.Router();

router

.get('/', (req, res) => {
    Receipt.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.get('/:id', (req, res) => {
    Receipt.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {

    Receipt.create(req.body, (err, response) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", receiptId: response._id});
    });
})

.patch('/:id', (req, res) => {
    Receipt.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.delete('/:id', (req, res) => {
    Receipt.remove({project: req.params.id}, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
});

// I don't think deleting all db entries is a feature we'll need --- but change my mind, convince me otherwise
// .delete('/', (req, res) => {

// });

module.exports = router;