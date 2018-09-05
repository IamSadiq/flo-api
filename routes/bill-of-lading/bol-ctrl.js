const express = require('express');
const BillOfLading = require('./bol-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    BillOfLading.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    BillOfLading.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {

    BillOfLading.create(req.body, (err, response) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", bolID: response._id});
    });
})

// update a collection
.patch('/:id', (req, res) => {

    BillOfLading.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    BillOfLading.remove({_id: req.params.id}, (err) => {
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