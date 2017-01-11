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
  // console.log(req.body); // { shift: 3, text: 'oruhp lsvxp groru vlw' }
  var feedback = req.body.feedbackValue;
  var scale = req.body.scaleValue;
  var email = req.body.email.Value
  // var decrypted = decrypt(feedback,email,decrypted);

  var response = {
    "feedback" : req.body.feedbackValue,
    "scale" : req.body.scaleValue,
    "email" : req.body.email.Value
  }
   res.send(response);
}
);

app.listen(3000);
