// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Regulatory = require('./regulatory-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Regulatory.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.get('/:id', (req, res) => {
    Regulatory.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {

    Regulatory.create(req.body, (err, response)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", regulatoryId: response._id});
    });
})

.patch('/:id', (req, res) => {

    Regulatory.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.delete('/:id', (req, res) => {
    Regulatory.remove({project: req.params.id}, (err) => {
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