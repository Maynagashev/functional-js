/**
 * Created by https://github.com/maynagashev on 25.11.2016.
 */

/*
# Task

Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

## Example

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

## Arguments

* inputWords: An array of random Strings.

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.
* */
function countWords(inputWords) {
   return inputWords.reduce(function (t, c) {
       t[c] = (t[c]) ? t[c]+1 : 1;
       // t[c] = ++t[c] || 1; // variant #2
       return t;
   }, {});
}

module.exports = countWords