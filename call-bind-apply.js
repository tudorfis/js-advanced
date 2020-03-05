
// function asim(param1, param2) {
// console.log(this)
// console.log(param1)
// console.log(param2)
// }

// asim.call(1)

// asim()
// asim.call()
// asim.call({ a: 'a' }, 3, 4)
// asim.call({ a: 'a' }, ...[5, 6])

// let b = asim
// console.log(b.name)

// asim.moo = 1
// console.log(asim.moo)
// console.log(b.moo)

// b.apply({ b: 'b' }, [7, 8])

// console.log(asim.toString())

// var asim = {
//   checkThis: function () {
//     function checkOther() {
//       console.log(this)
//     }

//     checkOther.call(this)
//   }
// }

// asim.checkThis()
// asim.checkThis.call(window)

// function a(b, c, d) {
//   console.log(this)
//   // console.log(b)
//   // console.log(c)
//   // console.log(d)
// }

// var x = function () {
//   console.log(this)
// }.bind(1)

// // a.call(1, 2, 3, 4)

// b = a.bind('b')
// c = b.bind('c')
// d = a.bind('d')
// a()
// b()
// c()
// d()
// x()

/** doesn't work */
var asim = {
  checkThis: _ => {
    var checkOther = function () {
      console.log(this);
    }.bind(this);

    checkOther();
  }
}
asim.checkThis()

var asim = {
  checkThis: function () {
    var checkOther = function () {
      console.log(this);
    }.bind(this);

    checkOther();
  }
}

asim.checkThis();