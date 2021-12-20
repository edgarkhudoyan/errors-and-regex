/* Convert the code using try...catch.

function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
} */
'use strict';
function reverseString(s) {
  try {
    if (typeof s !== 'string') {
      throw new Error('s.split is not a function');
    } else {
      s = s.split('').reverse().join('');
    }
  } catch (e) {
    console.log(e);
    console.log(s);
  }
}
reverseString('asdf');
reverseString(1234);
