"use strict";

function abbreviateNumber(largeNumber){
    let largeNumberStr;
    if(largeNumber < 1000){
        largeNumberStr = "" + largeNumber;
    } else if(largeNumber < 10000){
        largeNumberStr = Math.floor(largeNumber / 1000);
        largeNumberStr += "," + largeNumber % 1000;
    } else if(largeNumber < 999500){
        if(largeNumber < 99999){
            largeNumberStr = Math.floor(largeNumber / 1000) + "." +
                            (Math.floor((largeNumber % 1000)/10)) + "K";
        } else {
            largeNumberStr = Math.floor(largeNumber / 1000) + "K";
        }
    } else if(largeNumber < 1010000){
        largeNumberStr = "1.00M";
    } else if(largeNumber < 9999999){
        if(largeNumber < 1100000){
            largeNumberStr = Math.floor(largeNumber / 1000000) + ".0" +
                            (Math.floor((largeNumber % 1000000)/10000)) + "M";
        } else {
            largeNumberStr = Math.floor(largeNumber / 1000000) + "." +
                            (Math.floor((largeNumber % 1000000)/10000)) + "M";
        }
    } else {
        largeNumberStr = Math.floor(largeNumber / 1000000) + "M";
    }
    return largeNumberStr;
}

module.exports = abbreviateNumber;
