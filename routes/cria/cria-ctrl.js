// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const CRIA = require('./cria-model');

const router = express.Router();

router

.get('/', (req, res) => {
    CRIA.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    CRIA.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newCria = CRIA({
        // file: req.body.file,
        bolNumber: req.body.bolNumber,
        billDate: req.body.billDate,
        eFormMNumber: req.body.eFormMNumber,
        locNumber: req.body.locNumber,
        dateOfInsurance: req.body.dateOfInsurance,
        inspectionDate: req.body.inspectionDate
    });

    newCria.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;