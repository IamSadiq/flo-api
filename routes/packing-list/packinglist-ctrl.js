const express = require('express');
const PackingList = require('./packinglist-model');
const router = express.Router();

router

// retrieve all collection
.get('/', (req, res) => {
    PackingList.find({}, (err, data)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// retrieve a collection
.get('/:id', (req, res) => {
    PackingList.findById({_id: req.params.id}, (err, data) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(data);
    });
})

// insert a collection
.post('/', (req, res) => {
    newPackingList.PackingList(req.body, (err, response)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", packingListId: response._id});
    });
})

// update a collection
.patch('/:id', (req, res) => {

    PackingList.update({_id: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

// remove a collection
.delete('/:id', (req, res) => {
    PackingList.remove({_id: req.params.id}, (err) => {
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