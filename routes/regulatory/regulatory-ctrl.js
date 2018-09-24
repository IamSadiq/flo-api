const express = require('express');
const Regulatory = require('./regulatory-model');

const VerifyToken = require('../../auth/VerifyToken');
const User = require('../users/user-model');


const router = express.Router();

router

.get('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Regulatory.find({}, (err, data)=>{
            if(err)
                res.json({status: "failure"});
            else
                res.json(data);
        });
    });
})

.get('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Regulatory.findById({_id: req.params.id}, (err, data) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json(data);
        });
    });
})

.post('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Regulatory.create(req.body, (err, response) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success", regulatoryId: response._id});
        });
    });
})

.patch('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Regulatory.update({_id: req.params.id}, req.body, (err) => {
            if(err)
                res.json({status: "failure"});
            else
                res.json({status: "success"});
        });
    });
})

.delete('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Regulatory.remove({_id: req.params.id}, (err) => {
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