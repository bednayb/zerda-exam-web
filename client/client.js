'use strict';

var button = document.querySelector('#btn');
var feedback = document.querySelector('#inputText');
var scale = document.querySelector('#scale');
var emailUser = document.querySelector('#userEmail');


button.addEventListener('click',function () {
   // CHECK IT WORKS OR NOT
   // console.log("button works");
   // console.log(scale.value);
   // console.log(feedback.value);
   // console.log(emailUser.value)
   // CHECK IT WORKS OR NOT

   var httpRequest = new XMLHttpRequest();
 httpRequest.open('POST', 'http://localhost:3000/exam', true);
 httpRequest.setRequestHeader('Content-Type', 'application/json');
 httpRequest.send(JSON.stringify({

   //  input'value
   feedbackValue: feedback.value,
   scaleValue: scale.value,
   emailValue: emailUser.value
}
))
});
