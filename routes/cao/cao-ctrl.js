// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const CAO = require('./cao-model');

const router = express.Router();

router

.get('/', (req, res) => {
    CAO.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    CAO.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newCao = CAO({
        quantity: req.body.quantity,
        price: req.body.price,
        itemDetails: req.body.itemDetails,
        pfiNumber: req.body.pfiNumber,
        hsCode: req.body.hsCode
    });

    newCao.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;