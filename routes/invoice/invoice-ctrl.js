const express = require('express');
const Invoice = require('./invoice-model');
const router = express.Router();

router

// retrieve collections
.get('/', (req, res) => {
    Invoice.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    Invoice.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// insert a collection
.post('/', (req, res) => {

    Invoice.create(req.body, (err, response)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", invoiceId: response._id});
    });
})

// update a collection
.patch('/:id', (req, res) => {

    Invoice.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    Invoice.remove({_id: req.params.id}, (err) => {
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