// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const BillOfLading = require('./bol-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    BillOfLading.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    BillOfLading.findById({project: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {
    const newBillOfLading = BillOfLading({
        project: req.body.projectId,
        docFile: req.body.file,
        shippers: req.body.shippers,
        countryOfOrigin: req.body.countryOfOrigin,
        numberOfContainers: req.body.numberOfContainers,
        expectedDateOfArrival: req.body.expectedDateOfArrival,
        dateOfDeparture: req.body.dateOfDeparture
    });

    newBillOfLading.save((err)=>{
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
        shippers: req.body.shippers,
        countryOfOrigin: req.body.countryOfOrigin,
        numberOfContainers: req.body.numberOfContainers,
        expectedDateOfArrival: req.body.expectedDateOfArrival,
        dateOfDeparture: req.body.dateOfDeparture
    };

    BillOfLading.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    BillOfLading.remove({project: req.params.id}, (err) => {
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