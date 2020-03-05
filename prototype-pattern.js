
// var Person = {
//   init: function (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     return this
//   },
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// var asim = Object.create(Person, {
//   firstName: { value: 'asim' },
//   lastName: { value: 'hussain' }
// })
// // asim.init('asim', 'hussain')
// console.log(asim.fullName())

// var Person = {
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// function PersonFactory(firstName, lastName) {
//   var person = Object.create(Person)

//   person.firstName = firstName
//   person.lastName = lastName

//   return person
// }

// var asim = PersonFactory('asim', 'hussain')
// console.log(asim.fullName())

var Person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

var Professional = Object.create(Person, {
  professionalName: {
    value: function () {
      return this.honorific + ' ' + this.fullName()
    }
  }
})

var asim = Object.create(Professional, {
  honorific: { value: 'Mr' },
  firstName: { value: 'Tudor' },
  lastName: { value: 'Todorescu' }
})

console.log(asim.firstName)
console.log(asim.fullName())
console.log(asim.professionalName())
