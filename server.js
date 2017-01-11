'use strict';

//NPM MODULES
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
// var decrypt = require('./decrypt.js');


var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));



app.listen(3000);
