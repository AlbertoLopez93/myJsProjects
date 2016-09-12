/****

timestamp: 1473094984000

****/

/* Create a function that receives an string or an array
of chars and return it in morse code, between every letter
must be an space, a white space is made of 3 white spaces*/
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

function translate (element){
    "use strict"
		let indexEl = 0;
		element = element.toUpperCase();
		if(element === ' '){
			element = '   ';
		} else {
			indexEl = MORSE.findIndex(findIndexMorse); 
			function findIndexMorse (charToFind){
				return charToFind.char === element;
			}
			if(indexEl < 0){
				element = '';
			} else {
				element = MORSE[indexEl].morse;
			}
		}
		return element;
}

function filtro (element){
	return element !== '';
}

function morseEnc (str){
    "use strict"
	let arr = [];
	let newArr = [];
	let morseCode = '';
	arr = Array.from(str);
	newArr = arr.map(translate);
	newArr = newArr.filter(filtro);
	morseCode = newArr.join(' ');
	//console.log(newArr);
	return morseCode;
}
console.log(morseEnc('hola ?m'));
console.log(morseEnc(['h','o','l','a',' ','?','m']));