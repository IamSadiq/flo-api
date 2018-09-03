// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Invoice = require('./invoice-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Invoice.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    Invoice.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newInvoice = Invoice({
        // file: req.body.file
        invoiceNumber: req.body.invoiceNumber,
        quantity: req.body.quantity,
        price: req.body.price
    });

    newInvoice.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;