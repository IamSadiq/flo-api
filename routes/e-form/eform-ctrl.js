const mongoose = require('mongoose');
const express = require('express');
const bodyPaser = require('body-parser');
const Eform = require('./eform-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Eform.find({}, (err, eforms)=>{
        if(err) throw err;
        res.json(eforms);
    });
})

.get('/:id', (req, res) => {
    Eform.findById({_id: req.params.id}, (err, eform) => {
        if(err) throw err;
        res.json(eform);
    });
})

.post('/', (req, res) => {

});

module.exports = router;