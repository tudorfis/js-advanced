"use strict";

// What are function closures ?

function sayHello(name) {
  var text = "Hello " + name;
  return lastName => girlfriend =>
    console.log(`${text} ${lastName} ${girlfriend}`);
}

sayHello("Tudor")("Todorescu")("Cristina");
