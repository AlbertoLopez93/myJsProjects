"use strict";

function isAnagram(str1,str2) {
    var string1=[] ,string2=[];
    if (typeof(str1)!=="string"||typeof(str2)!=="string") {
        return false;
    }
    str1=str1.toLowerCase(),str2=str2.toLowerCase();

    string1=str1.split("");
    string2=str2.split("");
    string1=string1.sort();
    string2=string2.sort();
    string1=string1.join(separador = ',');
    string2=string2.join(separador = ',');

    if (string1===string2) {
        return true;
    }else{
        return false;
    }



}



module.exports = {
    isAnagram: isAnagram,
    convertSpaces: function() {},
    rounded: function() {},
    getTotal: function() {},
    squareSum: function() {},
    isRotation: function() {},
    convertMatrix: function() {},
    rotate: function() {}
};
