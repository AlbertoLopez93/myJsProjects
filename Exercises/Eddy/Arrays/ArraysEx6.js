/****

timestamp: 1473099493000

****/

/**
 * Created by EDDY on 05/09/2016.
 */

// const MORSE = [
// 	{
// 		"morse": ".-",
// 		"char": "A"
// 	},
// 	{
// 		"morse": "-...",
// 		"char": "B"
// 	},
// 	{
// 		"morse": "-.-.",
// 		"char": "C"
// 	},
// 	{
// 		"morse": "-..",
// 		"char": "D"
// 	},
// 	{
// 		"morse": ".",
// 		"char": "E"
// 	},
// 	{
// 		"morse": "..-.",
// 		"char": "F"
// 	},
// 	{
// 		"morse": "--.",
// 		"char": "G"
// 	},
// 	{
// 		"morse": "....",
// 		"char": "H"
// 	},
// 	{
// 		"morse": "..",
// 		"char": "I"
// 	},
// 	{
// 		"morse": ".---",
// 		"char": "J"
// 	},
// 	{
// 		"morse": "-.-",
// 		"char": "K"
// 	},
// 	{
// 		"morse": ".-..",
// 		"char": "L"
// 	},
// 	{
// 		"morse": "--",
// 		"char": "M"
// 	},
// 	{
// 		"morse": "-.",
// 		"char": "N"
// 	},
// 	{
// 		"morse": "---",
// 		"char": "O"
// 	},
// 	{
// 		"morse": ".--.",
// 		"char": "P"
// 	},
// 	{
// 		"morse": "--.-",
// 		"char": "Q"
// 	},
// 	{
// 		"morse": ".-.",
// 		"char": "R"
// 	},
// 	{
// 		"morse": "...",
// 		"char": "S"
// 	},
// 	{
// 		"morse": "-",
// 		"char": "T"
// 	},
// 	{
// 		"morse": "..-",
// 		"char": "U"
// 	},
// 	{
// 		"morse": "...-",
// 		"char": "V"
// 	},
// 	{
// 		"morse": ".--",
// 		"char": "W"
// 	},
// 	{
// 		"morse": "-..-",
// 		"char": "X"
// 	},
// 	{
// 		"morse": "-.--",
// 		"char": "Y"
// 	},
// 	{
// 		"morse": "--..",
// 		"char": "Z"
// 	},
// 	{
// 		"morse": "-----",
// 		"char": "0"
// 	},
// 	{
// 		"morse": ".----",
// 		"char": "1"
// 	},
// 	{
// 		"morse": "..---",
// 		"char": "2"
// 	},
// 	{
// 		"morse": "...--",
// 		"char": "3"
// 	},
// 	{
// 		"morse": "....-",
// 		"char": "4"
// 	},
// 	{
// 		"morse": ".....",
// 		"char": "5"
// 	},
// 	{
// 		"morse": "-....",
// 		"char": "6"
// 	},
// 	{
// 		"morse": "--...",
// 		"char": "7"
// 	},
// 	{
// 		"morse": "---..",
// 		"char": "8"
// 	},
// 	{
// 		"morse": "----.",
// 		"char": "9"
// 	}
// ];

function morseDec (phrase) {
	var phraseArray;
	console.log(phrase.split(' '));
	phraseArray = phrase.split(' ').map (parse);

	phraseArray =  phraseArray.join('').split('  ').join(' ');

	return phraseArray;
}
function parse (phraseArray) {
	var position;
	if (phraseArray === "") {
		return " ";
	}
	else {
		letter = phraseArray;
		position = MORSE.findIndex (search);

		if (position >= 0) {
			return MORSE[position].char;
		}
	}
}
function search (element) {
	return element.morse === letter;
}

console.log (morseDec ('.... --- .-.. .-     -- ..- -. -.. .. .-.. .-.. ---'));

