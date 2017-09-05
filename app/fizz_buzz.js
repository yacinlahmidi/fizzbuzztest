module.exports = function fizzBuzz(input) {
    var output = '';
    if (isNaN(input)) {
        return '';
    }
    if ( input % 3 === 0 || input.toString().match(/3/g)) {
        output += 'fizz';
    }
    if ( input % 5 === 0) {
        output += 'buzz';
    }
    if ( output === '') {
        output += input;
    }
    return output;
}