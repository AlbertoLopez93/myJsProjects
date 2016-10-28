/****************************************************************************

 Name: abbreviateNumber.js
 Search: label:interns {subject:"arrays ex 1" subject:"arrays ex1" subject:arraysex1}
 Target: Exercises/$1/Arrays
 Function: abbreviateNumber

 ****************************************************************************/

"use strict";

const abbreviateNumber = require("../abbreviateNumber");
// const abbreviateNumber = require("/Users/braulior/dev_akc/sami/salamis/clients/simbandconfig/common-js/util/abbreviateNumber.coffee");

const largeIntegers = [
    [ "1", "1" ],
    [ "166", "166" ],
    [ "888", "888" ],
    [ "2886", "2,886" ],
    [ "5784", "5,784" ],
    [ "4505", "4,505" ],
    [ "10585", "10.6K" ],
    [ "11937", "11.9K" ],
    [ "13381", "13.4K" ],
    [ "24484", "24.5K" ],
    [ "27513", "27.5K" ],
    [ "20082", "20.1K" ],
    [ "34942", "34.9K" ],
    [ "34581", "34.6K" ],
    [ "33182", "33.2K" ],
    [ "43944", "43.9K" ],
    [ "45601", "45.6K" ],
    [ "48907", "48.9K" ],
    [ "55989", "56.0K" ],
    [ "52716", "52.7K" ],
    [ "57792", "57.8K" ],
    [ "61466", "61.5K" ],
    [ "69041", "69.0K" ],
    [ "60369", "60.4K" ],
    [ "75796", "75.8K" ],
    [ "75652", "75.7K" ],
    [ "71055", "71.1K" ],
    [ "84077", "84.1K" ],
    [ "82281", "82.3K" ],
    [ "83710", "83.7K" ],
    [ "92323", "92.3K" ],
    [ "98431", "98.4K" ],
    [ "95966", "96.0K" ],

    [ "5055041", "5.06M" ],
    [ "1123220", "1.12M" ],
    [ "2677012", "2.68M" ],
    [ "16654314", "16.7M" ],
    [ "16058442", "16.1M" ],
    [ "13874125", "13.9M" ],
    [ "20859625", "20.9M" ],
    [ "28348301", "28.3M" ],
    [ "28932955", "28.9M" ],
    [ "33437082", "33.4M" ],
    [ "32329207", "32.3M" ],
    [ "34646759", "34.6M" ],
    [ "41706156", "41.7M" ],
    [ "41994760", "42.0M" ],
    [ "43628608", "43.6M" ],
    [ "53125616", "53.1M" ],
    [ "55752985", "55.8M" ],
    [ "55081752", "55.1M" ],
    [ "63453150", "63.5M" ],
    [ "60141415", "60.1M" ],
    [ "68523988", "68.5M" ],
    [ "75320154", "75.3M" ],
    [ "74278035", "74.3M" ],
    [ "72976101", "73.0M" ],
    [ "89795201", "89.8M" ],
    [ "86011298", "86.0M" ],
    [ "84629922", "84.6M" ],
    [ "97340395", "97.3M" ],
    [ "98560757", "98.6M" ],
    [ "90330237", "90.3M" ]
];

const largeNumbersDecimals = [
    [ "1", "1" ],
    [ "166", "166" ],
    [ "888", "888" ],
    [ "2886.18", "2,886" ],
    [ "5784.51", "5,785" ],
    [ "4505.81", "4,506" ],
    [ "10585.26", "10.6K" ],
    [ "11937.01", "11.9K" ],
    [ "13381.91", "13.4K" ],
    [ "24484.67", "24.5K" ],
    [ "27513.01", "27.5K" ],
    [ "20082.28", "20.1K" ],
    [ "34942.15", "34.9K" ],
    [ "34581.92", "34.6K" ],
    [ "33182.14", "33.2K" ],
    [ "43944.34", "43.9K" ],
    [ "45601.76", "45.6K" ],
    [ "48907.75", "48.9K" ],
    [ "55989.02", "56.0K" ],
    [ "52716.47", "52.7K" ],
    [ "57792.08", "57.8K" ],
    [ "61466.91", "61.5K" ],
    [ "69041.64", "69.0K" ],
    [ "60369.65", "60.4K" ],
    [ "75796.27", "75.8K" ],
    [ "75652.92", "75.7K" ],
    [ "71055.63", "71.1K" ],
    [ "84077.77", "84.1K" ],
    [ "82281.45", "82.3K" ],
    [ "83710.10", "83.7K" ],
    [ "92323.86", "92.3K" ],
    [ "98431.25", "98.4K" ],
    [ "95966.72", "96.0K" ],

    [ "5055041.64", "5.06M" ],
    [ "1123220.59", "1.12M" ],
    [ "2677012.60", "2.68M" ],
    [ "16654314.78", "16.7M" ],
    [ "16058442.80", "16.1M" ],
    [ "13874125.05", "13.9M" ],
    [ "20859625.28", "20.9M" ],
    [ "28348301.07", "28.3M" ],
    [ "28932955.46", "28.9M" ],
    [ "33437082.74", "33.4M" ],
    [ "32329207.62", "32.3M" ],
    [ "34646759.60", "34.6M" ],
    [ "41706156.75", "41.7M" ],
    [ "41994760.42", "42.0M" ],
    [ "43628608.33", "43.6M" ],
    [ "53125616.27", "53.1M" ],
    [ "55752985.27", "55.8M" ],
    [ "55081752.25", "55.1M" ],
    [ "63453150.21", "63.5M" ],
    [ "60141415.36", "60.1M" ],
    [ "68523988.59", "68.5M" ],
    [ "75320154.20", "75.3M" ],
    [ "74278035.07", "74.3M" ],
    [ "72976101.79", "73.0M" ],
    [ "89795201.59", "89.8M" ],
    [ "86011298.32", "86.0M" ],
    [ "84629922.27", "84.6M" ],
    [ "97340395.12", "97.3M" ],
    [ "98560757.66", "98.6M" ],
    [ "90330237.42", "90.3M" ],

    [ "878840842.28", "879M" ],
    [ "575583222.09", "576M" ],
    [ "891172858.42", "891M" ],
    [ "1756161960.77", "1756M" ],
    [ "1616904260.59", "1617M" ],
    [ "1871458719.95", "1871M" ],
    [ "2317696873.10", "2318M" ],
    [ "2154184831.77", "2154M" ],
    [ "2859145395.46", "2859M" ],
    [ "3171804771.99", "3172M" ],
    [ "3767030201.62", "3767M" ],
    [ "3576679192.48", "3577M" ],
    [ "4668747637.19", "4669M" ],
    [ "4666127288.48", "4666M" ],
    [ "4371511087.75", "4372M" ],
    [ "5431705433.64", "5432M" ],
    [ "5683145167.77", "5683M" ],
    [ "5060607064.52", "5061M" ],
    [ "6673454594.80", "6673M" ],
    [ "6259863539.60", "6260M" ],
    [ "6410199299.45", "6410M" ],
    [ "7738914040.15", "7739M" ],
    [ "7603541290.15", "7604M" ],
    [ "7865124695.47", "7865M" ],
    [ "8140896211.84", "8141M" ],
    [ "8383737452.79", "8384M" ],
    [ "8655096753.73", "8655M" ],
    [ "9384259803.45", "9384M" ],
    [ "9150506594.92", "9151M" ],
    [ "9574500102.55", "9575M" ]
];

describe("Testing using integers", function() {

    largeIntegers.forEach(function(number){
        it("The number is " + number[0], function() {
            expect(abbreviateNumber(+number[0])).toBe(number[1]);
        });
    });

});

describe("Testing using decimals", function() {

    largeNumbersDecimals.forEach(function(number){
        it("The number is " + number[0], function() {
            expect(abbreviateNumber(+number[0])).toBe(number[1]);
        });
    });

});