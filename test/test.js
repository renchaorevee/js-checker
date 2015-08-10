var checker = require('../index'),
    assert = require('assert');

var test_case_comparator = function(a, b) {
    if (a.result > b.result) return -1;
    if (a.result < b.result) return 1;
    if (a.result === b.result) return 0;
};

var test = function(function_name, test_cases) {
    describe('#'+function_name, function() {
        test_cases.sort(test_case_comparator).forEach(function(test_case) {

            it('returns ' + test_case.result + ' when input is ' + test_case.name, function() {
                assert.equal(checker[function_name](test_case.input), test_case.result);
            });

        });
    });
}

describe('js-checker', function() {
    test('isTypeUndefined', [
        {input: undefined, name: 'undefined', result: true},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: false},
        {input: "", name: '""', result: false},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: Symbol(), name: 'Symbol()', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: function() {}, name: 'function() {}', result: false},
    ]);

    test('isTypeObject', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: true},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: false},
        {input: "", name: '""', result: false},
        {input: [], name: '[]', result: true},
        {input: {}, name: '{}', result: true},
        {input: new Date(), name: 'new Date()', result: true},
        {input: {a: 1}, name: '{a: 1}', result: true},
        {input: [true], name: '[true]', result: true},
        {input: new Boolean(true), name: 'new Boolean(true)', result: true},
        {input: new Number(1), name: 'new Number(1)', result: true},
        {input: new String("abc"), name: 'new String("abc")', result: true},
        {input: Boolean(true), name: 'Boolean(true)', result: false},
        {input: Number(1), name: 'Number(1)', result: false},
        {input: String("abc"), name: 'String("abc")', result: false},
        {input: Symbol(), name: 'Symbol()', result: false},
        {input: function() {}, name: 'function() {}', result: false},
    ]);

    test('isTypeBoolean', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: true},
        {input: false, name: 'false', result: true},
        {input: 0, name: '0', result: false},
        {input: "", name: '""', result: false},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: {a: 1}, name: '{a: 1}', result: false},
        {input: [false], name: '[false]', result: false},
        {input: new Boolean(true), name: 'new Boolean(true)', result: false},
        {input: new Number(1), name: 'new Number(1)', result: false},
        {input: new String("abc"), name: 'new String("abc")', result: false},
        {input: Boolean(true), name: 'Boolean(true)', result: true},
        {input: Number(1), name: 'Number(1)', result: false},
        {input: String("abc"), name: 'String("abc")', result: false},
        {input: Symbol(), name: 'Symbol()', result: false},
        {input: function() {}, name: 'function() {}', result: false},
    ]);

    test('isTypeNumber', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: true},
        {input: 0.11, name: '0.11', result: true},
        {input: "", name: '""', result: false},
        {input: "123", name: '"123"', result: false},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: {a: 1}, name: '{a: 1}', result: false},
        {input: new Number(1), name: 'new Number(1)', result: false},
        {input: new String("123"), name: 'new String("123")', result: false},
        {input: Number(1), name: 'Number(1)', result: true},
        {input: String("123"), name: 'String("123")', result: false},
        {input: Symbol("123"), name: 'Symbol("123")', result: false},
        {input: function() {return 1}, name: 'function() {return 1}', result: false},
    ]);

    test('isTypeString', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: false},
        {input: 0.11, name: '0.11', result: false},
        {input: "", name: '""', result: true},
        {input: "123", name: '"123"', result: true},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: {a: 1}, name: '{a: 1}', result: false},
        {input: new Number(1), name: 'new Number(1)', result: false},
        {input: new String("123"), name: 'new String("123")', result: false},
        {input: Number(1), name: 'Number(1)', result: false},
        {input: String("123"), name: 'String("123")', result: true},
        {input: Symbol("123"), name: 'Symbol("123")', result: false},
        {input: function() {return 1}, name: 'function() {return 1}', result: false},
    ]);

    test('isTypeSymbol', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: false},
        {input: 0.11, name: '0.11', result: false},
        {input: "", name: '""', result: false},
        {input: "123", name: '"123"', result: false},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: {a: 1}, name: '{a: 1}', result: false},
        {input: new Number(1), name: 'new Number(1)', result: false},
        {input: new String("123"), name: 'new String("123")', result: false},
        {input: Number(1), name: 'Number(1)', result: false},
        {input: String("123"), name: 'String("123")', result: false},
        {input: Symbol("123"), name: 'Symbol("123")', result: true},
        {input: function() {return 1}, name: 'function() {return 1}', result: false},
    ]);

    test('isTypeFunction', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: false},
        {input: 0.11, name: '0.11', result: false},
        {input: "", name: '""', result: false},
        {input: "123", name: '"123"', result: false},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: {a: 1}, name: '{a: 1}', result: false},
        {input: new Number(1), name: 'new Number(1)', result: false},
        {input: new String("123"), name: 'new String("123")', result: false},
        {input: Number(1), name: 'Number(1)', result: false},
        {input: String("123"), name: 'String("123")', result: false},
        {input: Symbol("123"), name: 'Symbol("123")', result: false},
        {input: function() {return 1}, name: 'function() {return 1}', result: true},
        {input: Math.sin, name: 'Math.sin', result: true},
    ]);

    test('isTruthy', [
        {input: undefined, name: 'undefined', result: false},
        {input: null, name: 'null', result: false},
        {input: true, name: 'true', result: true},
        {input: false, name: 'false', result: false},
        {input: 0, name: '0', result: false},
        {input: 0.11, name: '0.11', result: true},
        {input: "", name: '""', result: false},
        {input: "123", name: '"123"', result: true},
        {input: [], name: '[]', result: true},
        {input: {}, name: '{}', result: true},
        {input: new Date(), name: 'new Date()', result: true},
        {input: {a: 1}, name: '{a: 1}', result: true},
        {input: new Number(1), name: 'new Number(1)', result: true},
        {input: new String("123"), name: 'new String("123")', result: true},
        {input: new Boolean(true), name: 'new Boolean(true)', result: true},
        {input: new Boolean(false), name: 'new Boolean(false)', result: true},
        {input: Number(1), name: 'Number(1)', result: true},
        {input: String("123"), name: 'String("123")', result: true},
        {input: Boolean(true), name: 'Boolean(true)', result: true},
        {input: Boolean(false), name: 'Boolean(false)', result: false},
        {input: Symbol("123"), name: 'Symbol("123")', result: true},
        {input: function() {return 1}, name: 'function() {return 1}', result: true},
        {input: Math.sin, name: 'Math.sin', result: true},
    ]);

    test('isFalsy', [
        {input: undefined, name: 'undefined', result: true},
        {input: null, name: 'null', result: true},
        {input: true, name: 'true', result: false},
        {input: false, name: 'false', result: true},
        {input: 0, name: '0', result: true},
        {input: 0.11, name: '0.11', result: false},
        {input: "", name: '""', result: true},
        {input: "123", name: '"123"', result: false},
        {input: [], name: '[]', result: false},
        {input: {}, name: '{}', result: false},
        {input: new Date(), name: 'new Date()', result: false},
        {input: {a: 1}, name: '{a: 1}', result: false},
        {input: new Boolean(true), name: 'new Boolean(true)', result: false},
        {input: new Boolean(false), name: 'new Boolean(false)', result: false},
        {input: new Number(1), name: 'new Number(1)', result: false},
        {input: new String("123"), name: 'new String("123")', result: false},
        {input: Number(1), name: 'Number(1)', result: false},
        {input: String("123"), name: 'String("123")', result: false},
        {input: Boolean(true), name: 'Boolean(true)', result: false},
        {input: Boolean(false), name: 'Boolean(false)', result: true},
        {input: Symbol("123"), name: 'Symbol("123")', result: false},
        {input: function() {return 1}, name: 'function() {return 1}', result: false},
        {input: Math.sin, name: 'Math.sin', result: false},
    ]);
});