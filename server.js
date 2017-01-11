'use strict';

//NPM MODULES
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var validator = require('./validator.js');

// MYSQL
var con = mysql.createConnection({
  host: "localhost",
  user: "'exam'",
  password: "admin",
  database: "secretsql"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
});
// MYSQL


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
});

app.listen(3000);
