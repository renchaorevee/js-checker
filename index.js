'use strict';

/**
 * Checking Types:
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
exports.isTypeUndefined = function(input) {
    return (typeof input === 'undefined');
}

exports.isTypeObject = function(input) {
    return (typeof input === 'object');
}

exports.isTypeBoolean = function(input) {
    return (typeof input === 'boolean');
}

exports.isTypeNumber = function(input) {
    return (typeof input === 'number');
}

exports.isTypeString = function(input) {
    return (typeof input === 'string');
}

exports.isTypeSymbol = function(input) {
    return (typeof input === 'symbol');
}

exports.isTypeFunction = function(input) {
    return (typeof input === 'function');
}
