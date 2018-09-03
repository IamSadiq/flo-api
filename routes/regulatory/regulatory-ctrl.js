// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Regulatory = require('./regulatory-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Regulatory.find({}, (err, data)=>{
        if(err) throw err;
        res.json(data);
    });
})

.get('/:id', (req, res) => {
    Regulatory.findById(req.params.id, (err, data) => {
        if(err) throw err;
        res.json(data);
    });
})

.post('/', (req, res) => {
    const newRegulatory = Regulatory({
        project: req.body.projectId,
        docFile: req.body.file
    });

    newRegulatory.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
})

.patch('/:id', (req, res) => {
    Regulatory.update({project: req.params.id}, (err, response)=>{
        if(err) throw err;
    });
})

.delete('/:id', (req, res) => {
    Regulatory.remove({project: req.params.id}, (err)=>{
        if (err) throw err;
    });
})

// I don't think deleting all db entries is a feature we'll need --- but change my mind, convince me otherwise
// .delete('/', (req, res) => {

// });

module.exports = router;