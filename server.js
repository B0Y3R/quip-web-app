'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const IncrementCount = require('./operations/incrementCount');
const safeNext = require('./core/safeNext');

const router = express.Router();

// Constants 
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure app to use cors middlewear
app.use(cors());

router.post('/count', safeNext(IncrementCount));

router.post('/', (req, res) => {
    console.log('ping!')
})

app.use('/', router);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);