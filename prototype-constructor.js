
export function Person(firstName, lastName) {
  const _privateVar = 'a'
  let _likes = 0

  const _privateMethod = function () {
    console.log('private method')
  }

  Person.prototype.incrementLikes = function () {
    _likes++
  }

  Person.prototype.getLikes = function () {
    return _likes
  }

  Person.prototype.fullName = function () {
    _privateMethod()
    return `${firstName} ${lastName} ${_privateVar}`
  }

  Object.defineProperty(this, "likes", {
    get: _ => _likes,
    set: likes => _likes = likes
  });
}
