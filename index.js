const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/flowApp');
const app = express();
const port = 3000;
const router = express.Router();

const ProjectCtrl = require('./routes/projects/projects-ctrl');
const PfiCtrl = require('./routes/pfi/pfi-ctrl');
const EformCtrl = require('./routes/e-form/eform-ctrl');
const BolCtrl = require('./routes/bill-of-lading/bol-ctrl');
const CcvoCtrl = require('./routes/ccvo/ccvo-ctrl');
const CriaCtrl = require('./routes/cria/cria-ctrl');
const CaoCtrl = require('./routes/cao/cao-ctrl');
const DeliveryCtrl = require('./routes/delivery/delivery-ctrl');
const InsuranceCtrl = require('./routes/insurance/insurance-ctrl');
const InvoiceCtrl = require('./routes/invoice/invoice-model');
const McCtrl = require('./routes/mc/mc-ctrl');
const PackingListCtrl = require('./routes/packing-list/packinglist-ctrl');
const ReceiptCtrl = require('./routes/receipt/receipt-ctrl');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // enable cross-origin resource sharing

app.use('/api/project', ProjectCtrl);
app.use('/api/pfi', PfiCtrl);
app.use('/api/ccvo', CcvoCtrl);
app.use('/api/bol', BolCtrl);
app.use('/api/eform', EformCtrl);
app.use('/api/cria', CriaCtrl);
app.use('/api/cao', CaoCtrl);
app.use('/api/delivery', DeliveryCtrl);
app.use('/api/insurance', InsuranceCtrl);
app.use('/api/invoice', InvoiceCtrl);
app.use('/api/mc', McCtrl);
app.use('/api/pl', PackingListCtrl);
app.use('/api/receipt', ReceiptCtrl);

// test to render at '/'
// router.get('/', (req, res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hola! Flo Api");
//     res.end();
// });
// app.use('/', router);

app.listen(port);
console.log('Node server started on port: '+ port);