// const mongoose = require('mongoose');
const express = require('express');
// const bodyParser = require('body-parser');
const Project = require('./projects-model');

const router = express.Router();

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));

router

.get('/', (req, res) => {
    Project.find({}, (err, projects)=>{
        if(err) throw err;
        res.json(projects);
    });
})

.get('/:id', (req, res) => {
    Project.findById({_id: req.params.id}, (err, project) => {
        if(err) throw err;
        res.json(project);
    });
})

.post('/', (req, res) => {
    const newProject = Project({
        projectId: req.body.projectId,
        projectStartDate: req.body.projectStartDate,
        projectName: req.body.projectName,
        supplyCategory: req.body.supplyCategory,
        supplierName: req.body.supplierName
    });

    newProject.save((err)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.patch('/:id', (req, res) => {
    myData = {
        projectId: req.body.projectId,
        projectStartDate: req.body.projectStartDate,
        projectName: req.body.projectName,
        supplyCategory: req.body.supplyCategory,
        supplierName: req.body.supplierName
    };

    Receipt.update({project: req.params.id}, myData, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.delete('/:id', (req, res) => {
    Receipt.remove({project: req.params.id}, (err) => {
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