var chai = require('chai');
var sinon = require('sinon');
var fizzBuzz = require('./../app/fizz_buzz');

describe('Tests for FizzBuzz', function() {
    it('should return buzz when input is not a number', function(){
        // WHEN
        var result = fizzBuzz('foo');
        // THEN
        chai.assert.equal(result, '');
    });

    it('should return fizz when input is divisible by 3', function(){
        // WHEN
        var result = fizzBuzz(3);
        // THEN
        chai.assert.equal(result, 'fizz');
    });

    it('should return fizz when input has a 3 ', function(){
        // WHEN
        var result = fizzBuzz(13);
        // THEN
        chai.assert.equal(result, 'fizz');
    });

    it('should return buzz when input is divisible by 5', function(){
        // WHEN
        var result = fizzBuzz(5);
        // THEN
        chai.assert.equal(result, 'buzz');
    });

    it('should return fizzbuzz when input is  divisible by 5 and 3', function(){
        // WHEN
        var result = fizzBuzz(15);
        // THEN
        chai.assert.equal(result, 'fizzbuzz');
    });

    it('should return given input when input is not divisible by 3 or 5 and if it has a 3 or 5 in it', function(){
        // WHEN
        var result = fizzBuzz(1);
        // THEN
        chai.assert.equal(result, 1);
    });
});