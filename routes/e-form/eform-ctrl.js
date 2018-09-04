const mongoose = require('mongoose');
const express = require('express');
const bodyPaser = require('body-parser');
const Eform = require('./eform-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    Eform.find({}, (err, eforms)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(eforms);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    Eform.findById({project: req.params.id}, (err, eform) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(eform);
    });
})

// insert a collection
.post('/', (req, res) => {
    const newEform = Eform({
        project: req.body.projectId,
        docFile: req.body.file,
        productType: req.body.productType,
        brandName: req.body.brandName,
        mName: req.body.mName,
        quantity: req.body.quantity,
        description: req.body.description,
        referenceNumber: req.body.referenceNumber,
        packaging: req.body.packaging
    });

    newEform.save((err)=>{
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
        productType: req.body.productType,
        brandName: req.body.brandName,
        mName: req.body.mName,
        quantity: req.body.quantity,
        description: req.body.description,
        referenceNumber: req.body.referenceNumber,
        packaging: req.body.packaging
    };

    Eform.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    Eform.remove({project: req.params.id}, (err) => {
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