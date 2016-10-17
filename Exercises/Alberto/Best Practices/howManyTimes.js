"use strict";

/*This function evaluate how many days you can entry
with annual pass to make cheaper than entry with simple tickets*/

function howManyTimes ( annualPrice, singlePrice ) {
  let days;

  if( (isNaN ( annualPrice )||isNaN ( singlePrice )) || (annualPrice < 0||singlePrice < 0) ) {
    return 0;
  }

  days = annualPrice / singlePrice ;

  if ( days <= 0 || days >= 365 || ( isNaN ( days ) ) ) {
    days = 0;
  }

  else {
  days++;
    if ( ! Number.isInteger ( days ) ) {
      days = parseInt ( days );
    }
  }
  
  return days;
}

module.exports = howManyTimes;
