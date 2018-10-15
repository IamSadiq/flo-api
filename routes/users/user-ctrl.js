var express = require('express');
var router = express.Router();
var User = require('./user-model');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const config = require('../../config');
var VerifyToken = require('../../auth/VerifyToken');

// CREATES A NEW USER
router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    User.find({email: req.body.email}, {password: 0}, (err, sess_user) => {

        if (err) return res.status(500).send("There was a problem finding the users.");
        if (sess_user[0]) return res.status(404).send("User already exists.");

        if (!sess_user[0]){
            User.create(req.body, (err, user) => {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                // create a token
                var token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 604800 // expires in 1 week
                });
                res.status(200).send({ auth: true, token: token });
            });
        }
    });
    
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', VerifyToken, (req, res) => {
    User.findById(req.userId, {password: 0}, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        User.find({}, {password: 0}, (err, users) => {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, { password: 0 }, (err, user) => { // { password: 0 }projection
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        User.findById(req.params.id, (err, user) => {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("No user found.");
            res.status(200).send(user);
        });
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, { password: 0 }, (err, user) => { // { password: 0 }projection
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) return res.status(500).send("There was a problem deleting the user.");
            res.status(200).send("User: "+ user.name +" was deleted.");
        });
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', VerifyToken, (req, res) => {
    User.findById(req.userId, { password: 0 }, (err, user) => { // { password: 0 }projection
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(user);
        });
    });
});


module.exports = router;