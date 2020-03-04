// function h1(strings) {
//   return `<h1>${strings[0]}</h1>`;
// }

// let html = '';
// html += h1`asim`; // <h1>asim</h1>

// console.log(html);

class HtmlUtilities {
  static h1(strings, ...values) {
    let str = '';
  
    for (const key in strings) {
      str += `${strings[key]}`
      str += `${values[key] ? `<h1>${values[key]}</h1>` : ''}`
    }
  
    return str;
  }
}

var name = 'asim';
var place = 'world';

console.log(HtmlUtilities.h1`hello ${place} my name is ${name}`);
console.log(HtmlUtilities.h1`hello my name is`);
