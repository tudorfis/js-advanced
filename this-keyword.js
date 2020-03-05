// console.log(this);

// (_ => {
//   console.log(this);
//   // this.asim = 1;
// })();

// const checkThis = function() {
//   this.asim = 1;
// };
// checkThis();

// console.log(asim);
// console.log(this.asim);
// console.log(window.asim);
// console.log(globalThis.asim);

// var asimObj = {
//   checkThis: function() {
//     console.log(this);
//   }
// };

// asimObj.checkThis();
// console.log(asimObj);

// var func = asimObj.checkThis;

// func();

// var asim = {
//   checkThis: function() {
//     console.log(this);
//     var self = this;

//     function checkOther() {
//       console.log(self);
//     }

//     checkOther();
//   }
// };

// asim.checkThis();

/** private function */
// const privateFunction = new WeakMap();

// class Asim {
//   static self = this;

//   constructor(name) {
//     const cristina = "Pui";

//     privateFunction.set(this, lastName => {
//       console.log("name", `${name} ${lastName} ${cristina}`);
//     });
//   }
//   checkThis() {
//     console.log(this);
//     checkOther(this);

//     function checkOther(context) {
//       console.log(context);
//     }

//     // privateFunction.get(this)("Todorescu");

//     // const checkOther = function() {
//     // console.log(this);
//     // };
//   }

//   static checkThat() {
//     // console.log(this);

//     function checkOther() {
//       // console.log(this);
//     }

//     checkOther();
//   }
// }

// Asim.checkThat();

// const asimO = new Asim("Tudor");
// // const asimO1 = new Asim("Mateescu");
// asimO.checkThis();

// // privateFunction.get(asimO1)("Andrei");

var asim = {
  checkThis: function() {
    var self = this;
    console.log(self);

    function checkOther() {
      console.log(self);
      self.moo = 1;
    }

    checkOther();

    console.log(self.moo);
    console.log(window.moo);
  }
};

asim.checkThis();
