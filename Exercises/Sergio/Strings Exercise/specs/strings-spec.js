var strFunctions = require("../strings.js");

describe("Strings functions exercise", function () {
    describe("transformToUnicode function", function () {
        it("should exist", function () {
            expect(strFunctions.transformToUnicode).toBeDefined();
        });
        it("transformToUnicode test number 1", function () {
            expect(strFunctions.transformToUnicode('HAHAHA')).toEqual([ 72, 65, 72, 65, 72, 65 ]);
        });
        it("transformToUnicode test number 2", function () {
            expect(strFunctions.transformToUnicode('')).toEqual([]);
        });
        it("transformToUnicode test number 3'", function () {
            expect(strFunctions.transformToUnicode('𐀀')).toEqual([ 65536, 56320 ]);
        });
    });

    describe("returnAllIndex function", function () {
        it("should exist", function () {
            expect(strFunctions.returnAllIndex).toBeDefined();
        });
        it("returnAllIndex test number 1", function () {
            expect(strFunctions.returnAllIndex('This is a test', 'i')).toEqual([ 2, 5 ]);
        });
        it("returnAllIndex test number 2", function () {
            expect(strFunctions.returnAllIndex('', '')).toBe(-1);
        });
        it("returnAllIndex test number 3", function () {
            expect(strFunctions.returnAllIndex('Anita laba la tina', 'A')).toBe(0);
        });
        it("returnAllIndex test number 4", function () {
            expect(strFunctions.returnAllIndex('Anita laba la tina de Anita', 'Anita')).toEqual([ 0, 22 ]);
        });
    });

    describe("capitalize function", function () {
        it("should exist", function () {
            expect(strFunctions.capitalize).toBeDefined();
        });
        it("capitalize test number 1", function () {
            expect(strFunctions.capitalize('TacoLandia eSTA con ustedes')).toBe('Tacolandia Esta Con Ustedes');
        });
        it("capitalize test number 2", function () {
            expect(strFunctions.capitalize('TacoLandia eSTA con ustedes     ')).toBe('Tacolandia Esta Con Ustedes     ');
        });
        it("capitalize test number 3", function () {
            expect(strFunctions.capitalize('')).toBe('');
        });
        it("capitalize test number 4", function () {
            expect(strFunctions.capitalize(' ')).toBe(' ');
        });
        it("capitalize test number 5", function () {
            expect(strFunctions.capitalize('NO QUIERO 1NADA')).toBe('No Quiero 1nada');
        });
    });

    describe("closerIndex function", function () {
        it("should exist", function () {
            expect(strFunctions.closerIndex).toBeDefined();
        });
        it("closerIndex test number 1", function () {
            expect(strFunctions.closerIndex('anita', 'a')).toBe(0);
        });
        it("closerIndex test number 2", function () {
            expect(strFunctions.closerIndex('anita ', 'a')).toBe(1);
        });
        it("closerIndex test number 3", function () {
            expect(strFunctions.closerIndex(' anita ', 'a')).toBe(0);
        });
        it("closerIndex test number 4", function () {
            expect(strFunctions.closerIndex(' anita', 'a')).toBe(-1);
        });
        it("closerIndex test number 5", function () {
            expect(strFunctions.closerIndex(' anita', '')).toBe(undefined);
        });
        it("closerIndex test number 6", function () {
            expect(strFunctions.closerIndex(' anita ', 'anita')).toBe(0);
        });
        it("closerIndex test number 7", function () {
            expect(strFunctions.closerIndex(' anita ', 'ta')).toBe(-1);
        });
        it("closerIndex test number 8", function () {
            expect(strFunctions.closerIndex(' anita ', 'an')).toBe(1);
        });
    });

    describe("reverseWords function", function () {
        it("should exist", function () {
            expect(strFunctions.reverseWords).toBeDefined();
        });
        it("reverseWords test number 1", function () {
            expect(strFunctions.reverseWords('Here are some tests')).toBe('ereH era emos stset');
        });
        it("reverseWords test number 2", function () {
            expect(strFunctions.reverseWords('1 2 3 4 5 67')).toBe('ONE TWO THREE FOUR FIVE SEVENSIX');
        });
        it("reverseWords test number 3", function () {
            expect(strFunctions.reverseWords('')).toBe('');
        });
        it("reverseWords test number 4", function () {
            expect(strFunctions.reverseWords(' ')).toBe(' ');
        });
        it("reverseWords test number 5", function () {
            expect(strFunctions.reverseWords('No2w leTs trY th1s oNe1 Ha9d')).toBe('wTWOoN sTel Yrt sONEht ONEeNo dNINEaH');
        });
        it("reverseWords test number 6", function () {
            expect(strFunctions.reverseWords('Thisshouldnotchange')).toBe('egnahctondluohssihT');
        });
        it("reverseWords test number 7", function () {
            expect(strFunctions.reverseWords('tihS nam siht si gnirob ot ,od tub si htrow ti')).toBe('Shit man this is boring to do, but is worth it');
        });
        it("reverseWords test number 8", function () {
            expect(strFunctions.reverseWords('01 12 1091 12309310 123912 1231')).toBe('ONEZERO TWOONE ONENINEZEROONE ZEROONETHREENINEZEROTHREETWOONE TWOONENINETHREETWOONE ONETHREETWOONE');
        });
    });
});
