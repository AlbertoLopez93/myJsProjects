"use strict";

function abbreviateNumber(largeNumber){
    let largeNumberStr = "";
    let unity = ["K", "M"];
    let values = [1000, 10000, 999500, 100000000, 1000000000];

    if(largeNumber < values[0]){
        largeNumberStr += "" + largeNumber;
    } else if(largeNumber < values[1]){
        largeNumberStr += (Math.floor(largeNumber / 1000)) + "," +
                          (Math.floor((largeNumber % 1000) / 100)) +
                          (Math.floor((largeNumber % 100) / 10)) +
                          ((largeNumber % 10) / 1).toPrecision(1);
    } else if (largeNumber < values[2]) {
        largeNumberStr += (largeNumber / 1000).toPrecision(3) + unity[0];
    } else if (largeNumber < values[3]) {
        largeNumberStr += (largeNumber / 1000000).toPrecision(3) + unity[1];
    } else if (largeNumber < values[4]) {
        largeNumberStr += (largeNumber / 1000000).toPrecision(3) + unity[1];
    } else {
        largeNumberStr += (largeNumber / 1000000).toPrecision(4) + unity[1];
    }

    return largeNumberStr;

}

module.exports = abbreviateNumber;
