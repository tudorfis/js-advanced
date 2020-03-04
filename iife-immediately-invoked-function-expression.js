"use strict";

// What is an IIFE (immediately invoked function expression) and why might use it  ?

var thing = { hello: "main" };
console.log("thing", thing);

(function(a) {
  var thing = { hello: "other" };

  console.log("thing", thing);
  console.log("a", a);
})("abc");

console.log("thing", thing);
