// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const PackingList = require('./packinglist-model');

const router = express.Router();

router

.get('/', (req, res) => {
    PackingList.find({}, (err, pfis)=>{
        if(err) throw err;
        res.json(pfis);
    });
})

.get('/:id', (req, res) => {
    PackingList.findById({_id: req.params.id}, (err, pfi) => {
        if(err) throw err;
        res.json(pfi);
    });
})

.post('/', (req, res) => {
    const newPackingList = PackingList({
        bolNumber: req.body.bagageNumber,
        exportDate: req.body.exportDate,
        methodOfDispatch: req.body.methodOfDispatch,
        descOfGoods: req.body.descOfGoods,
        grossWeight: req.body.grossWeight,
        proofOfLoading: req.body.proofOfLoading,
        proofOfDischarge: req.body.proofOfDischarge,
        exportee: req.body.exportee,
        typeOfShipment: req.body.typeOfShipment,
        packingInformation: req.body.packingInformation,
        numberOfPackages: req.body.numberOfPackages,
        netWeight: req.body.netWeight,
        containerNumber: req.body.containerNumber,
        dateOfDeparture: req.body.dateOfDeparture,
        finalDestination: req.body.finalDestination,
        consignee: req.body.consignee,
        bagageNumber: req.body.bagageNumber
    });

    newPackingList.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;