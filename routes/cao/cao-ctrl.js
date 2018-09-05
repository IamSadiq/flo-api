const express = require('express');
const CAO = require('./cao-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    CAO.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    CAO.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

.post('/', (req, res) => {

    CAO.create(req.body, (err, response) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", caoId: response._id});
    });
})

// update a collection
.patch('/:id', (req, res) => {

    CAO.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    CAO.remove({_id: req.params.id}, (err) => {
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