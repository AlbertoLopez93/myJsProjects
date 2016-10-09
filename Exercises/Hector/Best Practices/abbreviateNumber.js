"use strict";
function abbreviateNumber(number) {
    if (number === 0) {
        return "0";
    }
    let isPositive = true;
    if ( number <= 0) {
        number = number * -1;
        isPositive = false;
    }
    let num = number.toString();
    let units = ["K", "M", "G"];

    if (num.length <= 4) {
        if (isPositive) {
            return number.toLocaleString("en-US");
        } else {
            return "-" + number.toLocaleString("en-US");
        }
    }
    if (num.length === 5 ) {
        let aux = (num / 1000).toFixed(2).toString();
        if (aux.length === 2) {
            aux += ".0";
        }
        if (isPositive) {
            return aux.slice(0,4) + units[0];
        } else {
            return "-" + aux.slice(0,4) + units[0];
        }
    }
    if ( num.length === 6 && number <= 999499 ) {
        if (isPositive) {
            num = num.slice(0,3) + units[0];
            return num;
        } else {
            num = num.slice(0,3) + units[0];
            return "-" + num;
        }

    }
    if ( num.length === 6 && number < 1000000 ) {
        if (isPositive) {
            return Math.round(number/1000000).toFixed(2) + units[1];
        } else {
            return "-" + Math.round(number/1000000).toFixed(2) + units[1];
        }

    }
    if ( num >= 1000000 && num < 100000000) {
        if (isPositive) {
            return (number/1000000).toFixed(2) + units[1];
        } else {
            return "-" + (number/1000000).toFixed(2) + units[1];
        }

    }
    if ( num >= 100000000) {
        if (isPositive) {
            return (number/1000000) + units[1];
        } else {
            return "-" + (number/1000000) + units[1];
        }

    }
}

module.exports = abbreviateNumber;
