// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const CRIA = require('./cria-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    CRIA.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    CRIA.findById({project: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// insert a collection
.post('/', (req, res) => {
    const newCria = CRIA({
        project: req.body.projectId,
        docFile: req.body.file,
        bolNumber: req.body.bolNumber,
        billDate: req.body.billDate,
        eFormMNumber: req.body.eFormMNumber,
        locNumber: req.body.locNumber,
        dateOfInsurance: req.body.dateOfInsurance,
        inspectionDate: req.body.inspectionDate
    });

    newCria.save((err)=>{
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
        bolNumber: req.body.bolNumber,
        billDate: req.body.billDate,
        eFormMNumber: req.body.eFormMNumber,
        locNumber: req.body.locNumber,
        dateOfInsurance: req.body.dateOfInsurance,
        inspectionDate: req.body.inspectionDate
    };

    CRIA.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    CRIA.remove({project: req.params.id}, (err) => {
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