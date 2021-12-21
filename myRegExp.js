/* Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
Exactly 4 or 6 characters.
Only numerical characters (0-9).
No whitespace. */
'use strict';
const myRegExp = /^(\d{4}|\d{6})$/;
