/****

timestamp: 1473109463000

****/

/*Create a function that receives on string or array of
chars as morse code and returns an uppercased text based 
n the code provided*/

module.exports = function(MORSE) {
"use strict"

/*const MORSE = [
    {
        "morse": ".-",
        "char": "A"
    },
    {
        "morse": "-...",
        "char": "B"
    },
    {
        "morse": "-.-.",
        "char": "C"
    },
    {
        "morse": "-..",
        "char": "D"
    },
    {
        "morse": ".",
        "char": "E"
    },
    {
        "morse": "..-.",
        "char": "F"
    },
    {
        "morse": "--.",
        "char": "G"
    },
    {
        "morse": "....",
        "char": "H"
    },
    {
        "morse": "..",
        "char": "I"
    },
    {
        "morse": ".---",
        "char": "J"
    },
    {
        "morse": "-.-",
        "char": "K"
    },
    {
        "morse": ".-..",
        "char": "L"
    },
    {
        "morse": "--",
        "char": "M"
    },
    {
        "morse": "-.",
        "char": "N"
    },
    {
        "morse": "---",
        "char": "O"
    },
    {
        "morse": ".--.",
        "char": "P"
    },
    {
        "morse": "--.-",
        "char": "Q"
    },
    {
        "morse": ".-.",
        "char": "R"
    },
    {
        "morse": "...",
        "char": "S"
    },
    {
        "morse": "-",
        "char": "T"
    },
    {
        "morse": "..-",
        "char": "U"
    },
    {
        "morse": "...-",
        "char": "V"
    },
    {
        "morse": ".--",
        "char": "W"
    },
    {
        "morse": "-..-",
        "char": "X"
    },
    {
        "morse": "-.--",
        "char": "Y"
    },
    {
        "morse": "--..",
        "char": "Z"
    },
    {
        "morse": "-----",
        "char": "0"
    },
    {
        "morse": ".----",
        "char": "1"
    },
    {
        "morse": "..---",
        "char": "2"
    },
    {
        "morse": "...--",
        "char": "3"
    },
    {
        "morse": "....-",
        "char": "4"
    },
    {
        "morse": ".....",
        "char": "5"
    },
    {
        "morse": "-....",
        "char": "6"
    },
    {
        "morse": "--...",
        "char": "7"
    },
    {
        "morse": "---..",
        "char": "8"
    },
    {
        "morse": "----.",
        "char": "9"
    }
];*/

let count = 0;
function translate (element){
		let indexEl = 0;
		if(element === '' || element === ','){
			if(count < 3){
				element = '';
				count++;
			} else {
				element = ' ';
				count = 0;
			}
		} else {
			indexEl = MORSE.findIndex(findIndexMorse); 
			function findIndexMorse (charToFind){
				return charToFind.morse === element;
			}
			if(indexEl < 0){
				element = '';
			} else {
				element = MORSE[indexEl].char;
				count = 0;
			}
		}
		return element;
}

function filtro (element){
	return element !== '';
}

function morseDec(str){
	let arr = [];
	let newArr = [];
	let morseCode = '';
	if((Array.isArray(str))){
		str = str.join('');
	}
	//arr = Array.from(str);
	arr = str.split(' ');
	newArr = arr.map(translate);
	//newArr = newArr.filter(filtro);
	morseCode = newArr.join('');
	return morseCode;
}
console.log(morseDec('.... --- .-.. .-     --'));
console.log(morseDec(['.... ','--- ', '.-.. ','.-   ','  --']));

return morseDec; 
}