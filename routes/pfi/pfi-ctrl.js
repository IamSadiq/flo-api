// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const ProFormalInvoice = require('./pfi-model');

const router = express.Router();

router

.get('/', (req, res) => {
    ProFormalInvoice.find({}, (err, pfis)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    ProFormalInvoice.findById({project: req.params.id}, (err, pfi) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newPfi = ProFormalInvoice({
        project: req.body.projectId,
        quantity: req.body.quantity,
        price: req.body.price,
        itemDetails: req.body.itemDetails,
        pfiNumber: req.body.pfi,
        hsCode: req.body.hsCode
    });

    newPfi.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
})

.patch('/:id', (req, res) => {
    myData = {
        quantity: req.body.quantity,
        price: req.body.price,
        itemDetails: req.body.itemDetails,
        pfiNumber: req.body.pfi,
        hsCode: req.body.hsCode
    };

    ProFormalInvoice.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

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