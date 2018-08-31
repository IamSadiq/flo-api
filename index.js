const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = 1004

router.get('/', (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(200, "Enjoy the REST of the Flow!!");
});

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // enable cross-origin resource sharing
app.use('/', router);

app.listen(port);