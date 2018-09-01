const mongoose = require('mongoose');
const express = require('express');
const bodyPaser = require('body-parser');
const Ccvo = require('./ccvo-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Ccvo.find({}, (err, ccvos)=>{
        if(err) throw err;
        res.json(ccvos);
    });
})

.get('/:id', (req, res) => {
    Ccvo.findById({_id: req.params.id}, (err, ccvo) => {
        if(err) throw err;
        res.json(ccvo);
    });
})

.post('/', (req, res) => {

    newCcvo = Ccvo({

    });

    newCcvo.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });

});

module.exports = router;