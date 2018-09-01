const mongoose = require('mongoose');
const express = require('express');
const bodyPaser = require('body-parser');
const BillOfLading = require('./bol-model');

const router = express.Router();

router

.get('/', (req, res) => {
    BillOfLading.find({}, (err, bols)=>{
        if(err) throw err;
        res.json(bols);
    });
})

.get('/:id', (req, res) => {
    BillOfLading.findById({_id: req.params.id}, (err, bol) => {
        if(err) throw err;
        res.json(bol);
    });
})

.post('/', (req, res) => {
    const newBol = BillOfLading({

    });

    newBol.save((err)=>{
        // if(err) throw err;
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;