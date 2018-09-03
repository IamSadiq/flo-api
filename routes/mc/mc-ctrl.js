// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const ManufacturerCertificate = require('./mc-model');

const router = express.Router();

router

.get('/', (req, res) => {
    ManufacturerCertificate.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    ManufacturerCertificate.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newManufacturerCertificate = ManufacturerCertificate({
        // file: req.body.file
    });

    newManufacturerCertificate.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;