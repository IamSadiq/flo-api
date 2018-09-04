// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Invoice = require('./invoice-model');

const router = express.Router();

router

// retrieve collections
.get('/', (req, res) => {
    Invoice.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    Invoice.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// insert a collection
.post('/', (req, res) => {
    const newInvoice = Invoice({
        project: req.body.projectId,
        docFile: req.body.file,
        invoiceNumber: req.body.invoiceNumber,
        quantity: req.body.quantity,
        price: req.body.price
    });

    newInvoice.save((err)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// update a collection
.patch('/:id', (req, res) => {
    myData = {
        docFile: req.body.file,
        invoiceNumber: req.body.invoiceNumber,
        quantity: req.body.quantity,
        price: req.body.price
    };

    Invoice.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    Invoice.remove({project: req.params.id}, (err) => {
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