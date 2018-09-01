const mongoose = require('mongoose');
const express = require('express');
const bodyPaser = require('body-parser');
const Pfi = require('./pfi-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Pfi.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    Pfi.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newPfi = Pfi({

    });

    newPfi.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});