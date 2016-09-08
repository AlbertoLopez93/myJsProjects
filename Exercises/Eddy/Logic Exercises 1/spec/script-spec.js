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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 convertSpaces start
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 convertSpaces end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 rounded start
function rounded (param) {
	var numberString = false;
	if (param && param instanceof Array !== true) {
		if (!isNaN (param)) {
			if (typeof parseFloat (param) === 'number' || param instanceof Number === true) {
				param = param.toString ();
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
				numberString = parseFloat (numberString);
			}
		}
	}
	return numberString;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 rounded end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal start
function getTotal (param) {
	var result = false;
	if (param && param instanceof Array !== true) {
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
			result = parseFloat (result);
		}
	}
	return result;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 squareSum start
function squareSum (param) {
	if (param instanceof Array) {
		for (var i = 0; i < param.length; i++) {
			if (isNaN (param[i]) || typeof param[i] !== 'number') {
				return false;
			}
		}
		var restult = 0;
		for (var j = 0; j < param.length; j++) {
			restult += param[j] * param[j];
		}
		return restult;
	}
	return false;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 squareSum end
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
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 convertMatrix start
function convertMatrix2 (param) {
	if (param instanceof Array) {
		var result = [];
		var indexes = [];
		for (var i = 0; i < param.length; i++) {
			result[i] = [];
			for (var j = 0; j < param[i].length; j++) {
				result[i][j] = param[i][j];
				if (result[i][j] === 0) {
					indexes.push ({
						x: j,
						y: i
					});
				}
			}
		}
		for (var k = 0, index; k < indexes.length; k++) {
			index = indexes[k];
			for (var x = 0; x < result[index.y].length; x++) {
				result[index.y][x] = 0;
			}
			for (var y = 0; y < result.length; y++) {
				result[y][index.x] = 0;
			}
		}
		return result;
	}
	return false;
}

function convertMatrix (param) {
	if (param instanceof Array) {
		var result = [];
		for (var i = 0; i < param.length; i++) {
			result[i] = [];
			for (var j = 0; j < param.length; j++) {
				result[i][j] = param[i][j];
				if (result[i][j] === 0) {
					for (var k = 0; k < param.length; k++) {
						result[k][j] = 0;
						result[i][k] = 0;
					}
					return result;
				}
			}
		}
		return result;
	}
	return false
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 convertMatrix end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8 rotate start
function rotate (param) {
	if (param instanceof Array) {
		var paLen = param.length;
		if (paLen > 0) {
			for (var i = 0; i < paLen; i++) {
				if (param[i].length !== paLen) {
					return false;
				}
			}
			var rotated = [];
			for (var x = 0; x < paLen; x++) {
				rotated[x] = [];
				for (var y = paLen - 1; y >= 0; y--) {
					rotated[x][paLen - 1 - y] = param[y][x];
				}
			}
			return rotated;
		}
	}
	return false;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8 rotate end
//
//-----------------------------------------------------------------------------
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++# testing
describe ("Testing isAnagram, convertSpace, rounded, getTotal, isRotation, isSubstring, functions", function () {
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram start
	describe ("Testing isAnagram function", function () {
		it ("should exists", function () {
			expect (isAnagram).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are strings", function () {
			it ("Expect that Amor and Roma are Anagrams", function () {
				expect (isAnagram ('Amor', 'Roma')).toBe (true);
			});
			it ("Expect that Amors and Romaz aren't Anagrams", function () {
				expect (isAnagram ('Amors', 'Romaz')).toBe (false);
			});
			it ("Expect that 25 and 52 aren't Anagrams", function () {
				expect (isAnagram (25, 52)).toBe (false);
			});
			it ("Expect that Caras and Rascar aren't Anagrams", function () {
				expect (isAnagram ('Caras', 'Rascar')).toBe (false);
			});
			it ("Expect that Cosa and Saco are Anagrams", function () {
				expect (isAnagram ('Cosa', 'Saco')).toBe (true);
			});
			it ("Expect that true and true aren't Anagrams", function () {
				expect (isAnagram (true, true)).toBe (false);
			});
			it ("Expect that false and false aren't Anagrams", function () {
				expect (isAnagram (false, false)).toBe (false);
			});
			it ("Expect that Amor2 and Ro2ma are Anagrams", function () {
				expect (isAnagram ('Amor2', 'Ro2ma')).toBe (true);
			});
			it ("Expect that null and null aren't Anagrams", function () {
				expect (isAnagram (null, null)).toBe (false);
			});
			it ("Expect that Ecuador and Acuerdo are Anagrams", function () {
				expect (isAnagram ('Ecuador', 'Acuerdo')).toBe (true);
			});
			it ("Expect that Amor and undefined are Anagrams", function () {
				expect (isAnagram ('Amor', undefined)).toBe (false);
			});
			it ("Expect that Amor and [] aren't Anagrams", function () {
				expect (isAnagram ('Amor', [])).toBe (false);
			});
			it ("Expect that Amor and {} aren't Anagrams", function () {
				expect (isAnagram ('Amor', {})).toBe (false);
			});
			it ("Expect that Amor and ['A','m','o','r'] are Anagrams", function () {
				expect (isAnagram ('Amor', ['A', 'm', 'o', 'r'])).toBe (false);
			});
			it ("Expect that Amor and {p1: 'Amor'} are Anagrams", function () {
				expect (isAnagram ('Amor', {p1: 'Amor'})).toBe (false);
			});
			it ("Expect that Ecuador and Acuerdo are Anagrams", function () {
				expect (isAnagram ('Ecuador', 'Acuerdo')).toBe (true);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			describe ("Tests against values that aren't strings or are mixed up return false", function () {
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
			it ("Should not work with NaN's", function () {
				expect (convertSpaces (Infinity)).toBe (false);
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
				expect (rounded ('23.45667')).toBe (23.46);
			});
			it ("Should work with number", function () {
				expect (rounded (23.45667)).toBe (23.46);
			});
			it ("Should work with Number(23.456679", function () {
				expect (rounded (Number (23.45667))).toBe (23.46);
			});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
		describe ("Tests against values that are't  string number array or instance of number", function () {
			it ("Shouldn´t work with NaN", function () {
				expect (rounded (NaN)).toBe (false);
			});
			it ("Shouldn´t work with '1234rt'", function () {
				expect (rounded ('1234rt')).toBe (false);
			});
			it ("Shouldn't work with [23.45667]", function () {
				expect (rounded ([23.45667])).toBe (false);
			});
			it ("Shouldn't work with [23.45667]", function () {
				expect (rounded ([null])).toBe (false);
			});
			it ("Shouldn't work with [23.45667]", function () {
				expect (rounded ([Infinity])).toBe (false);
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

		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that aren't numbers", function () {
			it ("Shouldn't work with arrys", function () {
				expect (getTotal ([6])).toBe (false);
			});
			it ("Shouldn't work with arry with strings", function () {
				expect (getTotal (['6'])).toBe (false);
			});
			it ("Shouldn't work with NaN", function () {
				expect (getTotal (NaN)).toBe (false);
			});
			it ("Shouldn't work with undefined", function () {
				expect (getTotal (undefined)).toBe (false);
			});
			it ("Shouldn't work with arrys", function () {
				expect (getTotal ([NaN])).toBe (false);
			});
			it ("Shouldn't work with 'lol'", function () {
				expect (getTotal ('lol')).toBe (false);
			});
		});
	});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 squareSum start
	describe ("Testing squareSum function", function () {
		it ("should exists", function () {
			expect (squareSum).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are strings numbers arrays[one item]", function () {
			it ("Should work with numbers", function () {
				expect (squareSum ([1, 2, 2, 1])).toBe (10);
			});
			it ("Should work with arrys", function () {
				expect (squareSum ([6])).toBe (36);
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that aren't numbers", function () {
			it ("Shouldn't work with strings", function () {
				expect (squareSum ('6')).toBe (false);
			});
			it ("Shouldn't work with arry with strings", function () {
				expect (squareSum (['6'])).toBe (false);
			});
			it ("Shouldn't work with numbers", function () {
				expect (squareSum (6.5)).toBe (false);
			});
			it ("Shouldn't work with ['1, 2, 2, 1']", function () {
				expect (squareSum (['1, 2, 2, 1'])).toBe (false);
			});
			it ("Shouldn't work with '[1, 2, 2, 1]'", function () {
				expect (squareSum ('[1, 2, 2, 1]')).toBe (false);
			});
			it ("Shouldn't work with NaN", function () {
				expect (squareSum (NaN)).toBe (false);
			});
			it ("Shouldn't work with Infinity", function () {
				expect (squareSum (Infinity)).toBe (false);
			});
			it ("Shouldn't work with null", function () {
				expect (squareSum (null)).toBe (false);
			});
			it ("Shouldn't work with false", function () {
				expect (squareSum (false)).toBe (false);
			});
			it ("Shouldn't work with true", function () {
				expect (squareSum (true)).toBe (false);
			});
			it ("Shouldn't work with 4", function () {
				expect (squareSum (4)).toBe (false);
			});
		});
	});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 squareSum end
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
			it ("Should not work with NaN's", function () {
				expect (isRotation (Infinity, -Infinity)).toBe (false);
			});
		});
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 convertMatrix start
	describe ("Testing convertMatrix function", function () {
		it ("should exists", function () {
			expect (convertMatrix).toBeDefined ();
		});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Testing convertMatrix unvalid inputs", function () {
			it ("should exists", function () {
				expect (convertMatrix).toBeDefined ();
			});
			it ("should NOT work with one string", function () {
				expect (convertMatrix ('asddds')).toBe (false);
			});
			it ("should NOT work with floating points", function () {
				expect (convertMatrix (1.3666)).toBe (false);
			});
			it ("should NOT work with integers", function () {
				expect (convertMatrix (1)).toBe (false);
			});
			it ("should NOT work with booleans", function () {
				expect (convertMatrix (true)).toBe (false);
			});
			it ("should NOT work with nulls", function () {
				expect (convertMatrix (null)).toBe (false);
			});
			it ("should NOT work with undefineds", function () {
				expect (convertMatrix (undefined)).toBe (false);
			});
			it ("should NOT work with objects", function () {
				expect (convertMatrix ({
					'a': 'a'
				})).toBe (false);
			});
			it ("should NOT work with functions", function () {
				expect (convertMatrix (function () {
				})).toBe (false);
			});
		});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Testing convertMatrix valid inputs", function () {
			it ("should convert the matrix", function () {
				expect (convertMatrix ([[7, 0, 8], [1, 10, 7], [7, 7, 0]])).toEqual ([[0, 0, 0], [1, 0, 0], [0, 0, 0]]);
			});
		});
	});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 convertMatrix end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8 rotate start
	describe ("Testing rotate function", function () {
		it ("should exists", function () {
			expect (rotate).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Testing rotate with invalid inputs", function () {
			it ("should NOT work with one string", function () {
				expect (rotate ('word word')).toBe (false);
			});
			it ("should NOT work with floating points", function () {
				expect (rotate (1.056)).toBe (false);
			});
			it ("should NOT work with integers", function () {
				expect (rotate (Number (100))).toBe (false);
			});
			it ("should NOT work with booleans", function () {
				expect (rotate (true)).toBe (false);
			});
			it ("should NOT work with booleans", function () {
				expect (rotate (false)).toBe (false);
			});
			it ("should NOT work with nulls", function () {
				expect (rotate (null)).toBe (false);
			});
			it ("should NOT work with undefineds", function () {
				expect (rotate (undefined)).toBe (false);
			});
			it ("should NOT work with objects", function () {
				expect (rotate ({
					'potato': 'potatoes'
				})).toBe (false);
			});
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Testing rotate with valid inputs", function () {
			it ("should return false", function () {
				expect (rotate ([[1, 2], [0]])).toBe (false);
				expect (rotate ([[1, 2], [0, 0], [1, 2]])).toBe (false);
				expect (rotate ([])).toBe (false);
				expect (rotate ([], [1, 2])).toBe (false);
			});
			it ("should rotate the matrix", function () {
				expect (rotate (mat)).toEqual (matRotated);
				expect (rotate (mat2)).toEqual (mat2Rotated);
			});
		});
	});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8  rotate end
});

var mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matRotated = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
var mat2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
var mat2Rotated = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]];