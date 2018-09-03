// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const Delivery = require('./delivery-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Delivery.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    Delivery.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newDelivery = Delivery({
        // file: req.body.file
        remarks: req.body.remarks
    });

    newDelivery.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;