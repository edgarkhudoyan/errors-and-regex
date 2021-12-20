/* Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split, reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an
exception was thrown, this should be the original string. */
'use strict';
function reverseString(s) {
  try {
    if (typeof s === 'string') {
      let reversed = s.split('').reverse().join('');
      console.log(reversed);
    } else {
      throw 'Try only string values';
    }
  } catch (e) {
    console.log(e);
    console.log(s);
  }
}

reverseString('asdf'); // fdsa
reverseString(1234); // Try only string values , 1234
