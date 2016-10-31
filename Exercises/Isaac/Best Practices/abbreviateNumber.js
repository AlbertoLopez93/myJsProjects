(function () {
    "use strict";


    function fixNumber(number, factor, decimals, unit) {
        return (number / factor).toFixed(decimals) + unit;
    }

    function commaNumber(number, factor, decimals, unit) {
        return Number((number / factor).toFixed(decimals)).toLocaleString("en-US") + unit;
    }

    function simpleNumber(number, factor, decimals, unit) {
        let decimal = Math.floor((number * factor) % factor);

        if (decimal > 0) {
            return number.toFixed(decimals) + unit;
        } else {
            return number + unit;
        }
    }

    function abbreviateNumber(number) {
        let output = null,
            ranges = [
                {max: 10,       factor: 1000,    decimals: 3, unit: "",  action: simpleNumber},
                {max: 100,      factor: 100,     decimals: 2, unit: "",  action: simpleNumber},
                {max: 1000,     factor: 10,      decimals: 1, unit: "",  action: simpleNumber},
                {max: 10000,    factor: 1,       decimals: 0, unit: "",  action: commaNumber},
                {max: 99950,    factor: 1000,    decimals: 1, unit: "K", action: fixNumber},
                {max: 999500,   factor: 1000,    decimals: 0, unit: "K", action: fixNumber},
                {max: 9995000,  factor: 1000000, decimals: 2, unit: "M", action: fixNumber},
                {max: 99950000, factor: 1000000, decimals: 1, unit: "M", action: fixNumber},
                {max: Infinity, factor: 1000000, decimals: 0, unit: "M", action: fixNumber}
            ];

        for (let i = 0; i < ranges.length; i++) {
            if (number < ranges[i].max) {
                output = ranges[i].action(number, ranges[i].factor, ranges[i].decimals, ranges[i].unit);
                break;
            }
        }

        return output;
    }

    module.exports = abbreviateNumber;
}());