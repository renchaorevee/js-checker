'use strict';

/**
 * Checking Types:
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
[
    'Undefined',
    'Object',
    'Boolean',
    'Number',
    'String',
    'Symbol',
    'Function'
].forEach(function(type) {
    exports['isType' + type] = function(input) {
        return (typeof input === type.toLowerCase());
    }
});

/**
 * Check Truthy, Falsy
 */
exports.isTruthy = function(input) {
    return Boolean(input) === true;
};

exports.isFalsy = function(input) {
    return Boolean(input) === false;
};
