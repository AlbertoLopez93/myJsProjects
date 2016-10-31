"use strict";

// function for calculate the  minimum of days that you have to enter in a year to take adventage of the anual pass
function howManyTimes(priceAnual, priceAdmission ) {

  let days= 0;

  //days minimun of advantage of anual pass price for each days of  advantage of anual pass
  days = Math.floor(priceAnual / priceAdmission);

  return (days< 365) ? days: 0;
}


module.exports = howManyTimes;
