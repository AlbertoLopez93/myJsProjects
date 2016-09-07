/**
 * Created by EDDY on 30/08/2016.
 */
// #1 WRITE A FUNCTION THAT DCIDE IF 2 STRINGS ARE ANAGRAMS OR NOT
console.log (isAnagram ("amar", "rama"));
function isAnagram (strOne, strTwo) {
	var isAnagram = false;
	var listOne =strTwo;
	var listTwo = [];

	if (strOne.length === listOne.length) {
		strOne = strOne.split ("");
		strOne = atoA (strOne);
		for (var i = 0; i < strOne.length; i++) {
		}
		listOne = listOne.split ("");
		listOne = atoA (listOne);
		for (var j = 0; j < strOne.length; j++) {
			for (var k = 0; k < strOne.length; k++) {
				if (strOne[j] === listOne[k]) {
					listTwo[j] = listOne[k];
					listOne[k] = delete listOne[k];
					listTwo[j] = delete listTwo[j];
					console.log(listOne);
					console.log(listTwo);

				}
			}

			if (listTwo.join (',') == strOne.join (',')) {
				isAnagram = true
			}
		}
		return isAnagram;
	}
}
function atoA (param) {
	var result = [];
	for (var i = 0; i < param.length; i++) {
		switch (true) {
			case param[i] == 'A':
				result[i] = 'a';
				break;
			case param[i] == 'B':
				result[i] = 'b';
				break;
			case param[i] == 'C':
				result[i] = 'c';
				break;
			case param[i] == 'D':
				result[i] = 'd';
				break;
			case param[i] == 'E':
				result[i] = 'e';
				break;
			case param[i] == 'F':
				result[i] = 'f';
				break;
			case param[i] == 'G':
				result[i] = 'g';
				break;
			case param[i] == 'H':
				result[i] = 'h';
				break;
			case param[i] == 'I':
				result[i] = 'i';
				break;
			case param[i] == 'J':
				result[i] = 'j';
				break;
			case param[i] == 'K':
				result[i] = 'k';
				break;
			case param[i] == 'L':
				result[i] = 'l';
				break;
			case param[i] == 'M':
				result[i] = 'm';
				break;
			case param[i] == 'N':
				result[i] = 'n';
				break;
			case param[i] == 'O':
				result[i] = 'o';
				break;
			case param[i] == 'P':
				result[i] = 'p';
				break;
			case param[i] == 'R':
				result[i] = 'r';
				break;
			case param[i] == 'S':
				result[i] = 's';
				break;
			case param[i] == 'T':
				result[i] = 't';
				break;
			case param[i] == 'U':
				result[i] = 'u';
				break;
			case param[i] == 'V':
				result[i] = 'v';
				break;
			case param[i] == 'W':
				result[i] = 'w';
				break;
			case param[i] == 'X':
				result[i] = 'x';
				break;
			case param[i] == 'Y':
				result[i] = 'y';
				break;
			case param[i] == 'Z':
				result[i] = 'z';
				break;
			case param[i] == 'Ñ':
				result[i] = 'ñ';
				break;
			default:
				result[i] = param[i];
		}
	}
	return result;
}
