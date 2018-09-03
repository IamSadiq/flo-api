// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Receipt = require('./receipt-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Receipt.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    Receipt.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newReceipt = Receipt({
        // file: req.body.file
        receiptNumber: req.body.receiptNumber,
        quantity: req.body.quantity,
        totalPrice: req.body.totalPrice
    });

    newReceipt.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;