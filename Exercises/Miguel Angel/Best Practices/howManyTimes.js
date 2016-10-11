"use strict";

/*
Function 'howManyTimes' receives the price of an annual pass and a single pass
and returns the minnimun amount of days that a person have to use the annual
pass to take advantage of it
*/

function howManyTimes(annualPassPrice, singlePassPrice) {
    let amountOfDays;

    /*This asigns to 'amountOfDays' the minnimun amount of days to take advantage of the annual pass*/
    amountOfDays = (Math.floor(annualPassPrice / singlePassPrice) + 1);

    /*This compares if the amount of days are lower than 365, or the price of the single pass is lower
    than the price of the annual pass, if don't, theres no advantage*/
    if (amountOfDays >= 365 || annualPassPrice <= singlePassPrice) {
        amountOfDays = 0;
    }

    return amountOfDays;
}

module.exports = howManyTimes;
