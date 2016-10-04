function transformToUnicode(str){
    var unicode = [];
    for(var i = 0; i < str.length; i++){
        unicode[i] = str.codePointAt(i);
    }
    return unicode;
}

function returnAllIndex(str1, str2) {
    var index = str1.indexOf(str2);
    if (index >= 0) {
        var indexes = [];
        var aux = index;
        do {
            index = str1.indexOf(str2, index + 1);
            if (index >= 0) {
                indexes[indexes.length] = aux;
                aux = index;
            }
        } while (index >= 0);
        indexes[indexes.length] = aux;
        return indexes.length > 1 ? indexes : aux;
    }
    return -1;
}

function capitalize(str) {
    if (typeof str === 'string' || str instanceof String) {
        var words = str.split(' '),
            sentence = '';
        for (var i = 0; i < words.length; i++) {
            sentence += words[i][0] ? words[i][0].toUpperCase() + words[i].slice(1) : '';
            sentence += i === words.length - 1 ? '' : ' ';
        }
        return sentence;
    } else {
        return new Error('Parameter \'str\' is not a string.');
    }
}

function closerIndex(str1, str2) {
    var firstIndex = str1.indexOf(str2);
    if (firstIndex >= 0) {
        var lastIndex = str1.length - 1 - str1.lastIndexOf(str2);
        if (firstIndex < lastIndex) {
            return 1;
        } else if (firstIndex > lastIndex) {
            return -1;
        } else {
            return 0;
        }
    }
    return;
}

function reverseWords(msg) {
    var numbers = {
        0: 'ZERO',
        1: 'ONE',
        2: 'TWO',
        3: 'THREE',
        4: 'FOUR',
        5: 'FIVE',
        6: 'SIX',
        7: 'SEVEN',
        8: 'EIGTH',
        9: 'NINE'
    };
    msg = msg.split(' ');
    var sentence = '';
    for (var i = 0, reversed; i < msg.length; i++) {
        reversed = '';
        for (var c = msg[i].length - 1; c >= 0; c--) {
            if (numbers[msg[i][c]]) {
                reversed += numbers[msg[i][c]];
            } else {
                reversed += msg[i][c];
            }
        }
        sentence += reversed;
        sentence += i === msg.length - 1 ? '' : ' ';
    }
    return sentence;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
