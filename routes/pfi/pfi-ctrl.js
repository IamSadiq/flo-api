const express = require('express');
const ProFormalInvoice = require('./pfi-model');

const VerifyToken = require('../../auth/VerifyToken');
const User = require('../users/user-model');
const router = express.Router();

router

// retrieve all collections
.get('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        ProFormalInvoice.find({}, (err, pfis)=>{
            if(err)
                res.json({status: "failure"});
            else
                res.json(pfis);
        });
    });
})

// retreive a collection
.get('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        ProFormalInvoice.findById({_id: req.params.id}, (err, pfi) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json(pfi);
        });
    });
})

// insert a collection
.post('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        ProFormalInvoice.create(req.body, (err)=>{
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success"});
        });
    });
})

// update a collection
.patch('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        ProFormalInvoice.update({_id: req.params.id}, req.body, (err) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success"});
        });
    });
})

// delete a collection
.delete('/:id', (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        ProFormalInvoice.remove({project: req.params.id}, (err) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success"});
        });
    });
});

// I don't think deleting all db entries is a feature we'll need --- but change my mind, convince me otherwise
// .delete('/', (req, res) => {

// });

module.exports = router;