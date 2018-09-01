const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/flowApp');
const app = express();
const port = 3000;

const ProjectCtrl = require('./routes/projects/projects-ctrl');
const PfiCtrl = require('./routes/pfi/pfi-ctrl');
const EformCtrl = require('./routes/e-form/eform-ctrl');
const BolCtrl = require('./routes/bill-of-lading/bol-ctrl');
const CcvoCtrl = require('./routes/ccvo/ccvo-ctrl');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // enable cross-origin resource sharing

app.use('/api/project', ProjectCtrl);
app.use('/api/pfi', PfiCtrl);
app.use('/api/ccvo', CcvoCtrl);
app.use('/api/bol', BolCtrl);
app.use('/api/eform', EformCtrl);

app.listen(port);
console.log('Node server started on port: '+ port);