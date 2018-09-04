const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const CCVO = require('./ccvo-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    CCVO.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    CCVO.findById({project: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// insert a collection
.post('/', (req, res) => {
    const newCCVO = CCVO({
        project: req.body.projectId,
        docFile: req.body.file,
        eFormMNumber: req.body.eFormMNumber,
        portOfDestination: req.body.portOfDestination,
        dateOfShipment: req.body.dateOfShipment,
        shipmentId: req.body.shipmentId,
        countryOfSupply: req.body.countryOfSupply
    });

    newCCVO.save((err)=>{
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
        eFormMNumber: req.body.eFormMNumber,
        portOfDestination: req.body.portOfDestination,
        dateOfShipment: req.body.dateOfShipment,
        shipmentId: req.body.shipmentId,
        countryOfSupply: req.body.countryOfSupply
    };

    CCVO.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    CCVO.remove({project: req.params.id}, (err) => {
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