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

  if (validator(email,scale) != true) {
     console.log('alma');
    res.status(400);
    var response = {
    "status": "error",
    "message": "thank you"
    };
    res.send(response);
    }else{
       var response = {
          "feedback" : feedback,
          "scale" : scale,
          "email" : email
         }
         res.send(response);
      }
   }
);

app.listen(3000);
