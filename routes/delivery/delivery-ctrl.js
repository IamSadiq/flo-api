// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Delivery = require('./delivery-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    Delivery.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    Delivery.findById({project: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// insert a collection
.post('/', (req, res) => {
    const newDelivery = Delivery({
        project: req.body.projectId,
        docFile: req.body.file,
        remarks: req.body.remarks
    });

    newDelivery.save((err)=>{
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
        remarks: req.body.remarks
    };

    Delivery.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    Delivery.remove({project: req.params.id}, (err) => {
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