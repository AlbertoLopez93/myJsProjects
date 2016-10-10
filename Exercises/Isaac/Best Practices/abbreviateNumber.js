(function() {
    "use strict";

    function abbreviateNumber(number) {
        let output = null,
            units = ["K", "M"],
            factors = [1000, 1000000],
            range = {
                "a thousand": 1000,
                "ten thousand": 10000,
                "hundred thousand": 99500,
                "a million": 999500,
                "ten million": 9995000,
                "hundred million": 99995000,
            };

        switch (true) {
            case (number < range["a thousand"]):
                output = "" + number;
                break;
            case (number < range["ten thousand"]):
                output = Math.floor(number).toLocaleString("es-EN");
                break;
            case (number < range["hundred thousand"]):
                output = (number / factors[0]).toFixed(1) + units[0];
                break;
            case (number < range["a million"]):
                output = (number / factors[0]).toFixed(0) + units[0];
                break;
            case (number < range["ten million"]):
                output = (number / factors[1]).toFixed(2) + units[1];
                break;
            case (number < range["hundred million"]):
                output = (number / factors[1]).toFixed(1) + units[1];
                break;
            case (number >= range["hundred million"]):
                output = (number / factors[1]).toFixed(0) + units[1];
                break;
        }
        return output;
    }

    module.exports = abbreviateNumber;
}());
