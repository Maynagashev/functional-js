/**
 * Solution created by https://github.com/maynagashev on 26.11.2016.
 */
/*
 # Task:

 Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

 Example:

 var notDuck = Object.create({quack: true})
 var duck = {quack: true}
 duckCount(duck, notDuck) // 1

 ## Arguments

 * You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property.

 ## Conditions

 * Do not use any for/while loops or Array#forEach.
 * Do not create any counter/accumulator variables.
 * Do not create any unnecessary functions e.g. helpers.

 ## Hint

 * The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

 {
 0: 'argument0',
 1: 'argument1', // etc
 length: 2
 }
 */
function duckCount() {
    // SOLUTION GOES HERE
    return Array.prototype.slice.call(arguments).reduce(function (t, obj) {
        return (Object.prototype.hasOwnProperty.call(obj, 'quack') ? ++t : t);
    }, 0);
}
/*
Official solution
 function duckCount() {
     return Array.prototype.slice.call(arguments).filter(function(obj) {
     return Object.prototype.hasOwnProperty.call(obj, 'quack')
     }).length
 }
 */

module.exports = duckCount