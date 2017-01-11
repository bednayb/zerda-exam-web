'use strict';

//NPM MODULES
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var validator = require('./validator.js');


var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/exam', function(req, res) {

  var feedback = req.body.feedbackValue;
  var scale = req.body.scaleValue;
  var email = req.body.emailValue;
  var decrypted = validator(email,decrypted);
  console.log(decrypted);

  var response = {
     "status" : "ok",
    "feedback" : req.body.feedbackValue,
    "scale" : req.body.scaleValue,
    "email" : req.body.emailValue
  }
  console.log(response);
   res.send(response);
}
);

app.listen(3000);
