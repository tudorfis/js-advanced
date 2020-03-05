import { Person } from './prototype-constructor.js'

var dude = new Person('tudor', 'todorescu')
console.log(dude.fullName())

console.log(dude.getLikes())
dude.incrementLikes()
dude.incrementLikes()
dude.incrementLikes()
console.log(dude.getLikes())

console.log('--------')

var dude1 = new Person('pui', 'cristina')
console.log(dude1.getLikes())
dude1.incrementLikes()
console.log(dude1.getLikes())

console.log(dude1.firstName)
console.log(dude1.lastName)
console.log(dude1.fullName())

console.log('--------')

console.log(dude.likes)
console.log(dude1.likes)

dude.likes = 100
console.log(dude.likes)