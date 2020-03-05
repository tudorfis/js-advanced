"use strict";

// What are function closures ?

// function sayHello(name) {
//   var text = "Hello " + name;
//   return lastName => girlfriend =>
//     console.log(`${text} ${lastName} ${girlfriend}`);
// }

// sayHello("Tudor")("Todorescu")("Cristina");

// function sayHello(name) {
//   let text = "Hello " + name;
//   debugger;
//   return _ => console.log(text);
// }

// var sayTudor = sayHello("Tudor");
// var sayCristina = sayHello("Cristina");
// var sayAndrei = sayHello("Andrei");

// sayCristina();
// sayTudor();

var foo = [];
for (var i = 0; i < 10; i++)
  (y => {
    foo[y] = _ => y;
  })(i);

for (const key in foo) {
  console.log(foo[key]());
}
