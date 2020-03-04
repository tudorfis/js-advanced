// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log(result);

// function login(method) {
//   //   let options = Array.prototype.slice.call(arguments, 1);
//   let options = [...arguments].slice(1);
//   console.log(method);
//   console.log(options);
// }

// login('facebook', 1, 2, 3, 4);
// login('twitter', 1, 2);

// var arr1 = [4, 5, 6];
// var arr2 = [...arr1];
// arr1[0] = -1;

// console.log(arr1);
// console.log(arr2);

// var method = 'twitter';
// var options = ['key', 'callbackUrl'];

// function login(method, key, callbackUrl) {
//   console.log(method);
//   console.log(key);
//   console.log(callbackUrl);
// }

// login(...['twitter', 'key', 'callbackUrl']);

// let method = 'twitter';
// let options = ['key', 'callbackUrl'];

// function login(method, ...options) {
//   console.log(method);
//   console.log(options);
// }

// login(method, ...options);

// let obj1 = {
//   a: '1',
//   b: '2'
// };

// let obj2 = {
//   ...obj1,
//   a: '3',
//   c: '1'
// };

// console.log(obj2);
