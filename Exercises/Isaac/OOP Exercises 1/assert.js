(function() {
    'use strict';

    function assertNumber(_number) {
        return typeof _number === 'number' || _number instanceof Number;
    }

    function assertString(_string) {
        return typeof _string === 'string' || _string instanceof String;
    }

    module.exports = {
        Number: assertNumber,
        String: assertString
    };
}());
