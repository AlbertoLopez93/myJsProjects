/*The objective is to know how many days you will have to go to Six Flags (for example)
so you can take advantage of an annual pass instead of buy a one day pass everytime you go*/
"use strict";
function howManyTimes(annualPassPrice, oneDayPassPrice){
  let timesYouHaveToGo;

  if (annualPassPrice === 0 || oneDayPassPrice === 0){
    return 0;
  }

  timesYouHaveToGo = annualPassPrice / oneDayPassPrice;

  if (timesYouHaveToGo >= 364){ //returns zero when it's not convenient for you to buy an annual pass
    return 0;
  }

  if (timesYouHaveToGo % 1 === 0){
    timesYouHaveToGo = timesYouHaveToGo + 1;
  } else {
    timesYouHaveToGo = Math.round(timesYouHaveToGo + 0.4);
  }

  return timesYouHaveToGo;
}

module.exports = howManyTimes;
