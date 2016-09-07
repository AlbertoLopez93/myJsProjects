/**
 * Created by EDDY on 07/09/2016.
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram start
function isAnagram (strOne, strTwo) {
	var res = true;
	if ((typeof strOne === 'string' || strOne instanceof String) && (typeof strTwo === 'string' || strTwo instanceof String)) {
		if (strOne.length != strTwo.length) {
			res = false;
			return res;
		}
		strOne = strOne.split ('');
		strTwo = strTwo.split ('');
		var temp = '';
		strOne = convertToLowerCase (strOne);
		strTwo = convertToLowerCase (strTwo);
		for (var i = 0; i < strOne.length; i++) {
			for (var j = 0; j < strOne.length; j++) {
				if (strOne[j] > strOne[j + 1]) {
					temp = strOne[j];
					strOne[j] = strOne[j + 1];
					strOne[j + 1] = temp;
				}
				if (strTwo[j] > strTwo[j + 1]) {
					temp = strTwo[j];
					strTwo[j] = strTwo[j + 1];
					strTwo[j + 1] = temp;
				}
			}
		}
		for (var j = 0; j < strOne.length; j++) {
			if (strOne[j] !== strTwo[j]) {
				res = false;
			}
		}
	} else {
		res = false;
		return res;
	}
	return res;
}

function convertToLowerCase (str) {
	for (var i = 0; i < str.length; i++) {
		switch (true) {
			case str[i] == 'A' :
				str[i] = 'a';
				break;
			case str[i] === 'B' :
				str[i] = 'b';
				break;
			case str[i] === 'C' :
				str[i] = 'c';
				break;
			case str[i] === 'D' :
				str[i] = 'd';
				break;
			case str[i] === 'E' :
				str[i] = 'e';
				break;
			case str[i] === 'F' :
				str[i] = 'f';
				break;
			case str[i] === 'G' :
				str[i] = 'g';
				break;
			case str[i] === 'H' :
				str[i] = 'h';
				break;
			case str[i] === 'I' :
				str[i] = 'i';
				break;
			case str[i] === 'J' :
				str[i] = 'j';
				break;
			case str[i] === 'K' :
				str[i] = 'k';
				break;
			case str[i] === 'L' :
				str[i] = 'l';
				break;
			case str[i] === 'M' :
				str[i] = 'm';
				break;
			case str[i] === 'N' :
				str[i] = 'n';
				break;
			case str[i] === 'Ñ' :
				str[i] = 'ñ';
				break;
			case str[i] === 'O' :
				str[i] = 'o';
				break;
			case str[i] === 'P' :
				str[i] = 'p';
				break;
			case str[i] === 'Q' :
				str[i] = 'q';
				break;
			case str[i] === 'R' :
				str[i] = 'r';
				break;
			case str[i] === 'S' :
				str[i] = 's';
				break;
			case str[i] === 'T' :
				str[i] = 't';
				break;
			case str[i] === 'U' :
				str[i] = 'u';
				break;
			case str[i] === 'V' :
				str[i] = 'v';
				break;
			case str[i] === 'W' :
				str[i] = 'w';
				break;
			case str[i] === 'X' :
				str[i] = 'x';
				break;
			case str[i] === 'Y' :
				str[i] = 'y';
				break;
			case str[i] === 'Z' :
				str[i] = 'z';
				break;
			default:
		}
	}
	return str;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2
function convertSpaces (param) {
	var result = false;
	if (param) {
		if (typeof param === 'string' || param instanceof String === true) {

			result = '';
			for (var i = 0; i < param.length; i++) {

				if (param[i] == ' ') {
					result += '%20';
					i++;
				}
				result += param[i];
			}
		}
	}
	return result;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3
function rounded (param) {
	var numberString = NaN;
	if (!isNaN (param)) {
		if (typeof parseFloat (param) === 'number' || param instanceof Number === true) {
			param = param.toString ();
			if (param) {
				if (typeof param === 'string' || param instanceof String === true) {
					var numberCopy = param.split ('.');
					numberCopy[1] = numberCopy[1].split ('');
					numberCopy[1].length = 3;
					for (var i = numberCopy[1].length - 1; i > 1; i--) {
						if (numberCopy[1][i] >= 5) {
							numberCopy[1][i - 1] = Number (numberCopy[1][i - 1]) + Number (1);
							numberCopy[1].length = numberCopy[1].length - 1;
						}
						if (numberCopy[1][i] < 5) {
							numberCopy[1][i] = Number (0);
							numberCopy[1].length = numberCopy[1].length - 1;
						}
						numberString = numberCopy[0].toString () + '.';
						for (var j = 0; j < numberCopy[1].length; j++) {
							numberString += numberCopy[1][j];
						}
					}
				}
			}
		}
	}
	return parseFloat (numberString);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4
function getTotal (param) {
	var result = NaN;
	if (!isNaN (param)) {
		if (typeof parseFloat (param) === 'number' || param instanceof Number === true) {
			result = 0;
			if (param <= 3 && param > 0) {
				result = param * 40;
			}
			if (param > 3 && param < 7) {
				result = (param * 40) - 20;
			}
			if (param >= 7) {
				result = param * 40 - 50;
			}
		}
	}
	return parseFloat (result);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation start
function isSubstring (strOne, strTwo) {
	if (strOne && strTwo) {
		if (typeof strOne === 'string' || strOne instanceof String === true) {
			if (typeof strTwo === 'string' || strTwo instanceof String === true) {
				var potato = false;
				var lenOne = strOne.length;
				var lenTwo = strTwo.length;
				if (lenOne > lenTwo) {
					for (var i = 0; i <= lenOne - lenTwo; i++) {
						var search = '';
						for (var j = i; j < i + lenTwo && j < lenOne && i + lenTwo <= lenOne; j++) {
							search += strOne[j];
						}
						if (search === strTwo) {
							potato = true;
							break
						}
					}
				}
				return potato;
			}
		}
	}
}

function isRotation (strOne, strTwo) {
	if (strOne && strTwo) {
		if (typeof strOne === 'string' || strOne instanceof String === true) {
			if (typeof strTwo === 'string' || strTwo instanceof String === true) {
				if (strOne.length === strTwo.length) {
					strOne += strOne;
					if (isSubstring (strOne, strTwo)) {
						return true;
					}
					return false;
				}
			}
		}
	}

	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8
//
//-----------------------------------------------------------------------------
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++# testing
describe ("Testing isAnagram, convertSpace,isRotation, isSubstring, functions", function () {
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram start
	describe ("Testing isAnagram function", function () {
		it ("should exists", function () {
			expect (isAnagram).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are strings", function () {
			it ("Expect that Amor and Roma are Anagrams", function () {
				var res = isAnagram ('Amor', 'Roma');
				expect (res).toBe (true);
			});
			it ("Expect that Amors and Romaz aren't Anagrams", function () {
				var res = isAnagram ('Amors', 'Romaz');
				expect (res).toBe (false);
			});
			it ("Expect that 25 and 52 aren't Anagrams", function () {
				var res = isAnagram (25, 52);
				expect (res).toBe (false);
			});
			it ("Expect that Caras and Rascar aren't Anagrams", function () {
				var res = isAnagram ('Caras', 'Rascar');
				expect (res).toBe (false);
			});
			it ("Expect that Cosa and Saco are Anagrams", function () {
				var res = isAnagram ('Cosa', 'Saco');
				expect (res).toBe (true);
			});
			it ("Expect that true and true aren't Anagrams", function () {
				var res = isAnagram (true, true);
				expect (res).toBe (false);
			});
			it ("Expect that false and false aren't Anagrams", function () {
				var res = isAnagram (false, false);
				expect (res).toBe (false);
			});
			it ("Expect that Amor2 and Ro2ma are Anagrams", function () {
				var res = isAnagram ('Amor2', 'Ro2ma');
				expect (res).toBe (true);
			});
			it ("Expect that null and null aren't Anagrams", function () {
				var res = isAnagram (null, null);
				expect (res).toBe (false);
			});
			it ("Expect that Ecuador and Acuerdo are Anagrams", function () {
				var str1 = new String ('Ecuador');
				var str2 = new String ('Acuerdo');
				var res = isAnagram (str1, str2);
				expect (res).toBe (true);
			});
			it ("Expect that Amor and undefined are Anagrams", function () {
				var res = isAnagram ('Amor', undefined);
				expect (res).toBe (false);
			});
			it ("Expect that Amor and [] are Anagrams", function () {
				var res = isAnagram ('Amor', []);
				expect (res).toBe (false);
			});
			it ("Expect that Amor and {} are Anagrams", function () {
				var res = isAnagram ('Amor', {});
				expect (res).toBe (false);
			});
			it ("Expect that Amor and ['A','m','o','r'] are Anagrams", function () {
				var res = isAnagram ('Amor', ['A', 'm', 'o', 'r']);
				expect (res).toBe (false);
			});
			it ("Expect that Amor and {p1: 'Amor'} are Anagrams", function () {
				var res = isAnagram ('Amor', {p1: 'Amor'});
				expect (res).toBe (false);
			});
			it ("Expect that Ecuador and Acuerdo are Anagrams", function () {
				var str1 = new String ('Ecuador');
				var str2 = 'Acuerdo';
				var res = isAnagram (str1, str2);
				expect (res).toBe (true);
			});
		});
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 convertSpaces start
	describe ("Testing convertSpaces function", function () {
		it ("should exists", function () {
			expect (convertSpaces).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are strings", function () {
			it ("Should work with strings", function () {
				expect (convertSpaces ('trolo loloy')).toBe ('trolo%20loloy');
			});
			it ("Should work with strings", function () {
				expect (convertSpaces ("trolol o l oy")).toBe ('trolol%20o%20l%20oy');
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are instance of Strings", function () {
			it ("Should work with instance of Strings", function () {
				expect (convertSpaces (String ('trolo loloy'))).toBe ('trolo%20loloy');
			});
			it ("Should work with instance of Strings", function () {
				expect (convertSpaces (String ("trolol o l oy"))).toBe ('trolol%20o%20l%20oy');
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that aren't Strings or instance of Strings", function () {
			it ("Should not work with booleans", function () {
				expect (convertSpaces (true)).toBe (false);
			});
			it ("Should not work with numbers", function () {
				expect (convertSpaces (12345)).toBe (false);
			});
			it ("Should not work with Arrays", function () {
				expect (convertSpaces (['51234'])).toBe (false);
			});
			it ("Should not work with falsy stuff", function () {
				expect (convertSpaces (undefined)).toBe (false);
			});
			it ("Should not work without arguments", function () {
				expect (convertSpaces ()).toBe (false);
			});
			it ("Should not work with NaN's", function () {
				expect (convertSpaces (NaN)).toBe (false);
			});
		});
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 convertSpaces end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 rounded start
	describe ("Testing rounded function", function () {
		it ("should exists", function () {
			expect (rounded).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are  string number array or instance of number", function () {
			it ("Should work with strings", function () {
				expect (rounded('23.45667')).toBe (23.46);
			});
			it ("Should work with number", function () {
				expect (rounded(23.45667)).toBe (23.46);
			});
			it ("Should work with [23.45667]", function () {
				expect (rounded([23.45667])).toBe (23.46);
			});
			it ("Should work with Number(23.456679", function () {
				expect (rounded(Number(23.45667))).toBe (23.46);
			});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
		describe ("Tests against values that are't  string number array or instance of number", function () {
			it ("Shouldn´t work with NaN", function () {
				expect (rounded(NaN)).toBeNaN (NaN);
			});
			it ("Shouldn´t work with '1234rt'", function () {
				expect (rounded('1234rt')).toBeNaN (NaN);
			});

		});
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 rounded end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal start
	describe ("Testing getTotal function", function () {
		it ("should exists", function () {
			expect (getTotal).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are strings numbers arrays[one item]", function () {
			it ("Should work with numbers", function () {
				expect (getTotal (6)).toBe (220);
			});
			it ("Should work with numbers", function () {
				expect (getTotal (6.5)).toBe (240);
			});
			it ("Should work with strings", function () {
				expect (getTotal ('6')).toBe (220);
			});
			it ("Should work with arrys", function () {
				expect (getTotal ([6])).toBe (220);
			});
			it ("Should work with arry with strings", function () {
				expect (getTotal (['6'])).toBe (220);
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that aren't strings numbers arrays[one item]", function () {
			it ("Shouldn't work with NaN", function () {
				expect (getTotal (NaN)).toBeNaN (getTotal);
			});
			it ("Shouldn't work with undefined", function () {
				expect (getTotal (undefined)).toBeNaN (getTotal);
			});
			it ("Shouldn't work with arrys", function () {
				expect (getTotal ([NaN])).toBeNaN (getTotal);
			});
			it ("Shouldn't work with 'lol'", function () {
				expect (getTotal ('lol')).toBeNaN (getTotal);
			});
		});
	});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation start
	describe ("Testing isRotation function", function () {
		it ("should exists", function () {
			expect (isRotation).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are strings", function () {
			it ("Should work with strings", function () {
				expect (isRotation ('trolololoy', 'loytrololo')).toBe (true);
			});
			it ("Should work with strings becouse args doesnt have same lenght", function () {
				expect (isRotation ('trolololoy', 'loytrololos')).toBe (false);
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are instance of Strings", function () {
			it ("Should work with instance of Strings", function () {
				expect (isRotation (String ('trolololoy'), String ('loytrololo'))).toBe (true);
			});
			it ("Should work with instance of Strings", function () {
				expect (isRotation (String ('trolololoy'), String ('loytrololott'))).toBe (false);
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that aren't Strings or instance of Strings", function () {
			it ("Should not work with booleans", function () {
				expect (isRotation (true, false)).toBe (false);
			});
			it ("Should not work with numbers", function () {
				expect (isRotation (12345, 51234)).toBe (false);
			});
			it ("Should not work with Arrays", function () {
				expect (isRotation ([12345], ['51234'])).toBe (false);
			});
			it ("Should not work with falsy stuff", function () {
				expect (isRotation (undefined, null)).toBe (false);
			});
			it ("Should not work without arguments", function () {
				expect (isRotation ()).toBe (false);
			});
			it ("Should not work with NaN's", function () {
				expect (isRotation (NaN, NaN)).toBe (false);
			});
		});
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8

});