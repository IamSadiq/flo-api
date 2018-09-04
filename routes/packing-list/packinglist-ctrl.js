// const mongoose = require('mongoose');
const express = require('express');
// const bodyPaser = require('body-parser');
const PackingList = require('./packinglist-model');

const router = express.Router();

router

.get('/', (req, res) => {
    PackingList.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.get('/:id', (req, res) => {
    PackingList.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {
    const newPackingList = PackingList({
        project: req.body.projectId,
        docFile: req.body.file,
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
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.patch('/:id', (req, res) => {
    myData = {
        docFile: req.body.file,
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
    };

    PackingList.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.delete('/:id', (req, res) => {
    PackingList.remove({project: req.params.id}, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
});

// I don't think deleting all db entries is a feature we'll need --- but change my mind, convince me otherwise
// .delete('/', (req, res) => {

// });

module.exports = router;