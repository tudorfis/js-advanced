'use strict';

var theVal = 0;

thVal = 1;

if (theVal > 0) {
  console.log('hello');
}

var let = 1;

var foo = 1;
delete foo;

function moo(arg) {
  delete arg;
}
delete moo;

eval('var a = 1');
console.log(a);

var a = {moo: 'too'};

function foo(a = {}) {
  //   if (!!a) a = {...a};

  a = {too: 'moo'};
}

foo(a);

console.log(a);
