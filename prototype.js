
var animal = { kind: 'human' }

var asim = {}

asim.__proto__ = animal

console.log(asim)
console.log(animal.isPrototypeOf(asim))

animal.kind = 'igloo'
console.log(asim.kind)

asim.kind = 'igloo-asim'
console.log(asim.kind)
console.log(animal.kind)

var animal = { kind: 'dog' }
var asim = Object.create(animal, { food: { value: "mango" } })

animal.kind = 'cat'

console.log(asim)

'use strict'

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName
  }
}



var dude = new Person('asim', 'hussain')
var dude2 = new Person('asim2', 'hussain2')

console.log(dude.fullName())
try { console.log(dude.fullNamePrototype()) } catch (e) { }

Person.prototype.fullNamePrototype = function () {
  return this.firstName + ' ' + this.lastName
}

var dude3 = new Person('asim3', 'hussain3')
console.log(dude3.fullNamePrototype())

// var dude = {}
// Person.call(dude, "asim", "hussain")
// console.log(dude)

