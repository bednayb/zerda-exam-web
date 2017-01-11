'use strict';

var button = document.querySelector('#btn');
var feedback = document.querySelector('#inputText');
var scale = document.querySelector('#scale');
var emailUser = document.querySelector('#userEmail');
var loading = document.querySelector('span');

button.addEventListener('click',function () {


   // in the task it was not necesseary hide anytime
   loading.innerHTML = "loading";

   var httpRequest = new XMLHttpRequest();
   httpRequest.open('POST', 'http://localhost:3000/exam', true);
   httpRequest.setRequestHeader('Content-Type', 'application/json');
   httpRequest.send(JSON.stringify({
      //  input'value
      feedback: feedback.value,
      scale: scale.value,
      email: emailUser.value
         }
   ))
});
