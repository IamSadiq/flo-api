// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const ProFormalInvoice = require('./pfi-model');

const router = express.Router();

router

// retrieve all collections
.get('/', (req, res) => {
    ProFormalInvoice.find({}, (err, pfis)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(pfis);
    });
})

// retreive a collection
.get('/:id', (req, res) => {
    ProFormalInvoice.findById({project: req.params.id}, (err, pfi) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(pfi);
    });
})

// insert a collection
.post('/', (req, res) => {
    const newPfi = ProFormalInvoice({
        project: req.body.projectId,
        quantity: req.body.quantity,
        price: req.body.price,
        itemDetails: req.body.itemDetails,
        pfiNumber: req.body.pfi,
        hsCode: req.body.hsCode,
        docFile: req.body.file
    });

    newPfi.save((err)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// update a collection
.patch('/:id', (req, res) => {
    myData = {
        quantity: req.body.quantity,
        price: req.body.price,
        itemDetails: req.body.itemDetails,
        pfiNumber: req.body.pfi,
        hsCode: req.body.hsCode,
        docFile: req.body.file
    };

    ProFormalInvoice.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// delete a collection
.delete('/:id', (req, res) => {
    ProFormalInvoice.remove({project: req.params.id}, (err) => {
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