"use strict";

function abbreviateNumber ( numberReceived ) {
  let shortNumber;
  if ( numberReceived < 1e3 ) {
    numberReceived.toFixed(3);
    shortNumber = parseFloat ( numberReceived ) + "";
    if ( shortNumber === "1000" ) {
      abbreviateNumber ( 1e3 );
    }
  }
  else if ( numberReceived < 1e4 ) {
    numberReceived = numberReceived.toFixed ( 0 );
    if ( numberReceived === 1e4 ) {
      abbreviateNumber ( 1e4 );
    }
    else {
      shortNumber = numberReceived [ 0 ] + "," + numberReceived [ 1 ] + numberReceived [ 2 ] + numberReceived [ 3 ];
    }
  }
  else if ( numberReceived < 1e6 ) {
    numberReceived /= 1000;
    shortNumber = numberReceived.toPrecision ( 3 );
    if ( shortNumber === "1000" ) {
      abbreviateNumber ( 1e6 );
    }
    else {
      shortNumber += "K";
    }
  }
  else if ( numberReceived < 1e9 ) {
    numberReceived /= 1e6;
    shortNumber = numberReceived.toPrecision ( 3 );
    if ( shortNumber === "1000" ) {
      abbreviateNumber ( 1e9 );
    }
    else {
      shortNumber += "M";
    }
  }
  else { //last case, you may increase code
    numberReceived /= 1e6;
    shortNumber = numberReceived.toFixed ( 0 );
    shortNumber += "M";
  }
  return shortNumber;
}

module.exports = abbreviateNumber;
