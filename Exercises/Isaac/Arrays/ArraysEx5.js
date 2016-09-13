/****

timestamp: 1473092922000

****/

// 1) ArrEx5. create a function that receives an string or and array of chars and returns it in morse code.
// between every letter must be an space. A white space is made of 3 white spaces.
function morseEnc(message) {
    if (typeof message === 'number' || message instanceof Number) {
        message = String(message);
    }
    if (typeof message === 'string' || message instanceof String) {
        message = message.split('');
    }
    if (Array.isArray(message)) {
        return message.map(function (char) {
            if (char === ' ') {
                return '   ';
            }
            var morseChar = '';
            MORSE.forEach(function (code) {
                if (code.char === char.toUpperCase()) {
                    morseChar = code.morse;
                }
            });
            return morseChar;
        }).join(' ');
    } else {
        throw new Error('Message was expected to be an Array or a String');
    }
}