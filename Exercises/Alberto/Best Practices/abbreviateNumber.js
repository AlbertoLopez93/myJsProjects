"use strict";

function abbreviateNumber(numberReceived) {
  let shortNumber;
  if(numberReceived < 1e3) {
    return numberReceived + "";
  }
  if(numberReceived < 1e4) {
    shortNumber = parseInt(numberReceived/1000) + ",";
    let finalChars = numberReceived % 1000;
    finalChars += "";
    return shortNumber + finalChars;
  }
  if(numberReceived < 1e5) {
    shortNumber = numberReceived / 1000;
    shortNumber = shortNumber.toFixed(1);
    if(shortNumber === "100.0") {
      abbreviateNumber(1e5);
    }
    else {
      return shortNumber + "K";
    }
  }
  if(numberReceived < 1e6) {
    shortNumber = numberReceived / 1000;
    shortNumber = shortNumber.toFixed(0);
    if(shortNumber === "1000") {
      abbreviateNumber(1e6);
    }
    else {
      return shortNumber + "K";
    }
  }
  if(numberReceived < 1e8) {
    shortNumber = numberReceived / 1e6;
    shortNumber = shortNumber.toFixed(2);
    if(shortNumber === "100.00") {
      abbreviateNumber (1e8);
    } else {
      return shortNumber + "M";
    }
  }
  shortNumber = numberReceived / 1e6;
  shortNumber = shortNumber.toFixed(0);
  return shortNumber + "M";
}

module.exports = abbreviateNumber;
