'use strict';

var button = document.querySelector('#btn');
var feedback = document.querySelector('#feedback');
var scale = document.querySelector('#scale');
var email = document.querySelector('#email');


button.addEventListener('click',function () {
   // CHECK IT WORKS OR NOT
   console.log("button works");
   // CHECK IT WORKS OR NOT

   var httpRequest = new XMLHttpRequest();
 httpRequest.open('POST', 'http://localhost:3000/exam', true);
 httpRequest.setRequestHeader('Content-Type', 'application/json');
 httpRequest.send(JSON.stringify({
   feedback: feedback.value,
   scale: scale.value,
   email:email.value
});
