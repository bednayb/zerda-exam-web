'use strict';

var test = require('tape');
var validator = require('./validator.js');

test("validator accepts valid email, a scale of 15 and positive feedback");
test("validator rejects unfilled email, a scale of 15 and positive feedback");
test("validator rejects valid email, a scale of 9 and positive feedback");


//test the tape
test('true', function (t) {
  t.equal(1,1);
  t.end();
})

test('good email', function (t) {
  t.equal(validator("toto@gmail.com",18),true);
  t.end();
})

test('bad email', function (t) {
  t.equal(validator("heydudegmail.com",18),false);
  t.end();
})

test(' more than 10 scale', function (t) {
  t.equal(validator("toto@gmail.com",18),true);
  t.end();
})

test(' less than 10 scale', function (t) {
  t.equal(validator("toto@gmail.com",8),false);
  t.end();
})
