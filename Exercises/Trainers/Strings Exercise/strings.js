function transformToUnicode(str) {
    let result = [];

    for(let x = 0, limit = str.length; x < limit; x++) {
        result.push(str.codePointAt(x));
    }

    return result;
}

function returnAllIndex(word, search) {
    let match, arr;

    if(!search) {
        return -1;
    }

    match = word.indexOf(search);
    arr = [];

    if(match === -1) {
        return match;
    }

    if(word.indexOf(search, match + 1) === -1) {
        return match;
    }

    while(match !== -1) {
        arr.push(match);
        match = word.indexOf(search, match + 1);
    }

    return arr;
}

function capitalize(str) {
    let lowerCase = str.toLowerCase();
    let strResult = '';

    function upperCaseFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    
    lowerCase.split(' ').forEach(function(element){
        if(element) {
            strResult += upperCaseFirstLetter(element) + ' ';
        } else {
            strResult += element + ' ';
        }
    });

    strResult = strResult.slice(0,-1);
    return strResult;
}

function closerIndex(word, search) {
    let firstIndex, lastIndex, howCloseToEnd, howCloseToStart;

    if(!search) {
        return undefined;
    }

    firstIndex = word.indexOf(search);
    lastIndex = word.lastIndexOf(search);

    if(firstIndex === -1) {
        return undefined
    }

    howCloseToEnd = word.length - (lastIndex + search.length);
    howCloseToStart = -(0 - firstIndex);

    if(howCloseToStart < howCloseToEnd) {
        return 1;
    } else if(howCloseToStart > howCloseToEnd) {
        return -1;
    } else {
        return 0;
    }
}

function reverseWords(word) {
    let reversedWords = '';
    let result = '';
    let arr;

    function reverseWord(word) {
        let reversedWord = '';
        for(let x = word.length - 1; x >= 0; x--) {
            reversedWord += word[x]
        }
        return reversedWord;
    }

    arr = word.split(' ');
    arr.forEach(function(element, index){
        if(element) {
            reversedWords += reverseWord(element) + ' ';
        } else {
           reversedWords += ' ';
        }
    });

    reversedWords = reversedWords.slice(0,-1);
    for(let x = 0, limit = reversedWords.length; x < limit; x++) {
        if(reversedWords.charCodeAt(x) >= 48 && reversedWords.charCodeAt(x) <= 57) {
            //codes from characters 0-9
            switch(reversedWords.charCodeAt(x)) {
                case 48:
                    result += 'ZERO';
                    break;
                case 49:
                    result += 'ONE';
                    break;
                case 50:
                    result += 'TWO';
                    break;
                case 51:
                    result += 'THREE';
                    break;
                case 52:
                    result += 'FOUR';
                    break;
                case 53:
                    result += 'FIVE';
                    break;
                case 54:
                    result += 'SIX';
                    break;
                case 55:
                    result += 'SEVEN';
                    break;
                case 56:
                    result += 'EIGHT';
                    break;
                case 57:
                    result += 'NINE';
                    break;
            }
        } else {
            result += reversedWords[x];
        }
    }

    return result;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
