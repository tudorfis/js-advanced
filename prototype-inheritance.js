'use strict'

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

function Professional(honorific, firstName, lastName) {
  Person.call(this, firstName, lastName)
  this.honorific = honorific
}

Professional.prototype = Object.create(Person.prototype)

Professional.prototype.professionalName = function () {
  return this.honorific + ' ' + this.firstName + ' ' + this.lastName
}

var prof = new Professional("Dr", "Asim", "Hussain")
console.log(prof)
console.log(prof.fullName())
console.log(prof.professionalName())

Person.prototype.a = 'a'
console.log(prof.a)

// const a = {
//   method: _ => console.log('a')
// }

// const b = Object.create(a)
// const c = { ...a }
// const d = Object.assign({}, a)
// const e = a

// a.method = _ => console.log('x')

// b.method()
// c.method()
// d.method()
// e.method()

// console.log(a === a)