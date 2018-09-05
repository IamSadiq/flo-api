const express = require('express');
const Project = require('./projects-model');
const router = express.Router();

router

.get('/', (req, res) => {
    Project.find({}, (err, projects)=>{
        if(err)
            res.json({status: "failure"});
        else
            res.json(projects);
    });
})

.get('/:id', (req, res) => {
    Project.findById({_id: req.params.id}, (err, project) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json(project);
    });
})

.post('/', (req, res) => {

    // Project.find({projectNumber: data.projectNumber}, (err, returnedData) => {})

    Project.create(req.body, (err, response) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success", project: response});
    });

    // newProject.save();
})

.patch('/:id', (req, res) => {

    Project.update({project: req.params.id}, req.body, (err) => {
        if(err)
            res.json({status: "failure"});
        else
            res.json({status: "success"});
    });
})

.delete('/:id', (req, res) => {
    Project.remove({project: req.params.id}, (err) => {
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