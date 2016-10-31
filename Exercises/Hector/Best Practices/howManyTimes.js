/*Function called howManyTimes recieves two parameters:
price of the annual pass and price of the single admission.
will retur how many times its necesary to go to take the
adventage of the annal pass */
"use strict";

function howManyTimes(annualPrice, singlePrice) {
    //var times will count the number of days in the loop
    let times;
    //count will accumulate the sum of the single prices
    let sumSingles = singlePrice;

    //Is invalid if both are 0
    if (annualPrice === 0 && singlePrice === 0) {
        return 0;
    }

    //Is invalid if there are negative numbers
    if (annualPrice < 0 || singlePrice < 0) {
        return 0;
    }

    if (annualPrice < singlePrice) {
        return 1;
    }

    for (times = 1; times <= 365; times++) {

        //This if statement is used to know if is not good to buy the anual pass
        if (times === 365 && sumSingles <= annualPrice) {
            return 0;
        }

        //when the sumSingles exceeds the annualPrice and times is less than
        //365 then you get adventage and return the number of times
        if (sumSingles > annualPrice) {
            return times;
        } else {
            sumSingles += singlePrice;
        }
    }
}
module.exports = howManyTimes;
