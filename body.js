const express = require('express');
const app = express();


const bodyParser = require('body-parse');

app.use(bodyParser.urlencoded({extended : false}))