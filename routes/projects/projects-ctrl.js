const mongoose = require('mongoose');
const express = require('express');
const bodyPaser = require('body-parser');
const Project = require('./projects-model');

const router = express.Router();

router

.get('/', (req, res) => {
    Project.find({}, (err, projects)=>{
        if(err) throw err;
        res.json(projects);
    });
})

.get('/:id', (req, res) => {
    Project.findById({_id: req.params.id}, (err, projects) => {
        if(err) throw err;
        res.json(project);
    });
})

.post('/', (req, res) => {
    const newProject = Project({

    });

    newProject.save((err)=>{
        if(err) return res.status(500).send("failed to save");
        else return res.status(200).send("successfully saved");
    });
});

module.exports = router;