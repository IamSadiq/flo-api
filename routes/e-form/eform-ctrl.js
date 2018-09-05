const express = require('express');
const Eform = require('./eform-model');

const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    Eform.find({}, (err, eforms)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(eforms);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    Eform.findById({_id: req.params.id}, (err, eform) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(eform);
    });
})

// insert a collection
.post('/', (req, res) => {

    Eform.create(req.body, (err, response)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", eformId: response._id});
    });
})

// update a collection
.patch('/:id', (req, res) => {

    Eform.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    Eform.remove({_id: req.params.id}, (err) => {
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