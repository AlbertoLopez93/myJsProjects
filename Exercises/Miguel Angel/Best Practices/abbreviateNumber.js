"use strict";

function abbreviateNumber(largeNumber){
    let largeNumberStr = "";
    if(largeNumber < 0){
        largeNumberStr = "-";
        largeNumber *= -1;
    }
    if(largeNumber < 1000){
        largeNumberStr += "" + largeNumber;
    } else if(largeNumber < 10000){
        largeNumberStr += Math.floor(largeNumber / 1000) + "," +
                          (Math.floor((largeNumber % 1000) / 100)).toPrecision(1) +
                          (Math.floor((largeNumber % 100) / 10)).toPrecision(1) +
                          (Math.floor((largeNumber % 10) / 1)).toPrecision(1);
    } else if(largeNumber < 999500){
        largeNumberStr += (largeNumber / 1000).toPrecision(3) + "K";
    } else if(largeNumber < 9999999){
        largeNumberStr += (largeNumber / 1000000).toPrecision(3) + "M";
    } else {
        largeNumberStr += (largeNumber / 1000000).toPrecision(4) + "M";
    }
    return largeNumberStr;
}

module.exports = abbreviateNumber;
