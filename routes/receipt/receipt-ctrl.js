// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
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
    Receipt.findById({project: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {
    const newReceipt = Receipt({
        project: req.body.projectId,
        docFile: req.body.file,
        receiptNumber: req.body.receiptNumber,
        quantity: req.body.quantity,
        totalPrice: req.body.totalPrice
    });

    newReceipt.save((err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.patch('/:id', (req, res) => {
    myData = {
        docFile: req.body.file,
        receiptNumber: req.body.receiptNumber,
        quantity: req.body.quantity,
        totalPrice: req.body.totalPrice
    };

    Receipt.update({project: req.params.id}, myData, (err) => {
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