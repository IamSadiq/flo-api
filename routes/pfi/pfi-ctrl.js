const express = require('express');
const ProFormalInvoice = require('./pfi-model');

const router = express.Router();

router

// retrieve all collections
.get('/', (req, res) => {
    ProFormalInvoice.find({}, (err, pfis)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(pfis);
    });
})

// retreive a collection
.get('/:id', (req, res) => {
    ProFormalInvoice.findById({_id: req.params.id}, (err, pfi) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(pfi);
    });
})

// insert a collection
.post('/', (req, res) => {

    ProFormalInvoice.create(req.body, (err)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// update a collection
.patch('/:id', (req, res) => {

    ProFormalInvoice.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// delete a collection
.delete('/:id', (req, res) => {
    ProFormalInvoice.remove({project: req.params.id}, (err) => {
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