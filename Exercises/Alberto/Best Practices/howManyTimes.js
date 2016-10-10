"use strict";

/*Next function evaluate how many days you can entry
with annual pass to make cheaper than entry with simple tickets*/
function howManyTimes ( annual, single ) {
  if( (isNaN ( annual )||isNaN ( single )) || (annual < 0||single < 0) ) {
    return 0;
  }
  let days = annual / single ;
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
