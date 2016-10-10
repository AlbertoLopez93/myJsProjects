"use strict";
function abbreviateNumber(number) {
    if (number === 0) {
        return "0";
    }

    let num = number.toString();
    let units = ["K", "M", "G"];

    if (number <= 9999) {
        number = Math.floor(number);
        return number.toLocaleString("en-US");
    }
    if (number > 9999 && number <= 99999) {
return (number/1000).toFixed(1) + units[0];
    }
    if ( num.length === 6 && number <= 999499 ) {
            num = num.slice(0,3) + units[0];
            return num;
    }
    if ( num.length === 6 && number < 1000000 ) {
        return Math.round(number/1000000).toFixed(1) + units[1];
    }
    if ( num >= 1000000 && num <= 9999999) {
            return (number/1000000).toFixed(2) + units[1];
    }
    if ( num > 9999999 && num <= 99999999) {
            return (number/1000000).toFixed(1) + units[1];
    }
    if (num > 99999999) {
        return Math.floor(number/1000000) + units[1];


    }
}
console.log(abbreviateNumber(10585));

module.exports = abbreviateNumber;
