(function () {
    "use strict";

    /**
     * Returns the number of days you have to use in order to take advantage of the annual pass.
     * If it is not convinient to pay for the anual pass, it returns cero.
     * @param  {float} anualPrice Price for an anual pass.
     * @param  {float} dayPrice   Price for a day pass.
     * @return {int}	          Number of days.
     */
    function howManyTimes (anualPrice, dayPrice) {
        const daysInYear = 365;

        if (anualPrice / daysInYear < dayPrice) {
            return Math.ceil((anualPrice + dayPrice) / dayPrice);
        } else {
            return 0;
        }
    }

    module.exports = howManyTimes;
}());