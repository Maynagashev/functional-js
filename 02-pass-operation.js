/**
 * Created by https://github.com/maynagashev on 21.11.2016.
 */

function repeat(operation, num) {
    if (num>0) {
        operation();
        repeat(operation, num - 1);
    }
}

module.exports = repeat;
