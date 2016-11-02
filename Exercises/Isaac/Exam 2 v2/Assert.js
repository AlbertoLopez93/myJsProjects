(function() {
    'use strict';

    function AssertNumber(number) {
        return typeof number === 'number' || number instanceof Number;
    }

    function AssertInteger(number) {
        return AssertNumber(number) && Number.isInteger(number);
    }

    module.exports = {
        Number: AssertNumber,
        Integer: AssertInteger
    };
}());
