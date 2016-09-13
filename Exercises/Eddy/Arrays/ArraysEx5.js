/****

timestamp: 1473110397000

****/

/**
 * Created by EDDY on 05/09/2016.
 *
 * create a function that receives an string or an array of chars and return it in morse code bettwen every letter must
 * be an space a white space is made of three white spaces
 *
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

function morseEnc (phrase) {
	var phraseCopy;
	phraseCopy = phrase.toUpperCase ().split ('').map (parse);                // Mayusculas => split => mapeo en parse
	return phraseCopy.join (" ");
}

var letter;                                                                    // variable global necesaria para

function parse (phraseArray) {
	var position;
	if (phraseArray === " ") {
		return "   ";                               //si el elemento es un espacio se concatenan dos mas
	}
	else {
		letter = phraseArray;                       // se asigna el parametro a la variable global letter
		position = MORSE.findIndex (search);        // busco la posicion del marametro acual pasando el valor a la
	                                                // funcion search
		if (position >= 0) {
			return MORSE[position].morse;           //me retorna el valor morse en la posicion del arreglo
		}
	}
}

function search (element) {                         // cuando encuentra la posicion la envia a  findIndex y luego
													// index evalua la posicion cuando search y le reorna true
	return element.char === letter;                 // retorna true o false
}

console.log (morseEnc ("hola mundillo"));
