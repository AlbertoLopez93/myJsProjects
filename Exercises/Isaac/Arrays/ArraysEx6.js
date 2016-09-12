/****

timestamp: 1473093792000

****/

function morseDec(morseMessage) {
    if (typeof morseMessage === 'string' || morseMessage instanceof String) {
        morseMessage = morseMessage.split(' ');
    }
    if (Array.isArray(morseMessage)) {
        var space = 0, char;
        return morseMessage.map(function (morseChar) {
            if (morseChar === '') {
                space++;
                if (space === 3) {
                    space = 0;
                    return ' ';
                }
            }
            char = '';
            MORSE.forEach(function (code) {
                if (code.morse === morseChar) {
                    char = code.char;
                    space = 0;
                }
            });
            return char;
        }).join('');
    }
}