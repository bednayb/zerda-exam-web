'use strict';


// THE LIST
var list = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];


// THE FUNCTION WHAT WILL BE TESTED at test.js
function decrypt(email,scale) {
   if(email.indexOf("@") != -1 && scale > 10 )
   {
      return true
   }
   return false
};

module.exports = decrypt;
