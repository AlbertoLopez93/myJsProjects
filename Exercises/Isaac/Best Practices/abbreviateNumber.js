(function () {
    "use strict";

    function abbreviateNumber(number) {
        let absNumber = Math.abs(number);
        switch (true) {
        case (absNumber <= 999):
            return "" + number;
        case (absNumber <= 9999):
            return number.toLocaleString();
        case (absNumber <= 99499):
            return (number / 1000).toFixed(1) + "K";
        case (absNumber <= 999499):
            return (number / 1000).toFixed(0) + "K";
        case (absNumber <= 99994999):
            return (number / 1000000).toFixed(2) + "M";
        case (absNumber >= 99995000):
            return (number / 1000000).toFixed(0) + "M";
        }
    }

    module.exports = abbreviateNumber;
}());