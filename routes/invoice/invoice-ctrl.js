const express = require('express');
const Invoice = require('./invoice-model');

const VerifyToken = require('../../auth/VerifyToken');
const User = require('../users/user-model');
const router = express.Router();

router

// retrieve collections
.get('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Invoice.find({}, (err, data)=>{
            if(err)
                res.json({status: "failure"});
            else
                res.json(data);
        });
    });
})

// retrieve a collection
.get('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Invoice.findById({_id: req.params.id}, (err, data) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json(data);
        });
    });
})

// insert a collection
.post('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Invoice.create(req.body, (err, response)=>{
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success", invoiceId: response._id});
        });
    });
})

// update a collection
.patch('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Invoice.update({_id: req.params.id}, req.body, (err) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success"});
        });
    });
})

// remove a collection
.delete('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Invoice.remove({_id: req.params.id}, (err) => {
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