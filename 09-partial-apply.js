 /**
 * Solution created by https://github.com/maynagashev on 29.11.2016.
 */
/*
# Task

Use partial application to create a function that fixes the first argument to console.log.  i.e. Implement a logging function that prepends a namespace string to its output.

    Your implementation should take a namespace String and return a function that prints messages to the console with the namespace prepended.

    You should use Function#apply to implement the partial application.

    Make sure all arguments passed to the returned logging function are printed.

    Print the output to the console directly

## Arguments

* namespace: a String to prepend to each message passed to the returned function.

## Example


var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
*/

var slice = Array.prototype.slice

function logger(namespace) {    
    return function () {
        console.log.apply(null, [namespace].concat(slice.call(arguments)));
    };
}

module.exports = logger