"use strict"
function isAnagram(str1, str2){
    if(typeof(str1) === 'number' || typeof(str2) === 'number'){
        return false;
    }
    if (Number(str1)) {
        return false;
    }
    if(Number(str2)){
        return false;
    }
    if(typeof(str1) === 'boolean' || typeof(str2) === 'boolean'){
        return false;
    }
    if(typeof(str1) !== 'string' || typeof(str2) !== 'string'){
        return false;
    }
    var x = str1.split("");
    var y = str2.split("");
    if(str1.length !== str2.length){
        return false;
    }
    x = toNum(x);
    y = toNum(y);
    x = bubble(x);
    y = bubble(y);
    for(let i=0; i<x.length;i++){
        if(x[i]!==y[i]){
            return false;
        }
    }
    return true;
}

function bubble(x){
    var inter;
    do{
        inter = false;
        for (var i=0; i < x.length-1; i++){
            if (x[i] > x[i+1]){
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                inter = true;
            }
        }
    }while (inter);
    return x;
}

function toNum(x){
    for(let i=0; i<x.length; i++){
        switch (x[i]){
            case 'A':
            case 'a':
            x[i] = 1;
            break;
            case 'B':
            case 'b':
            x[i] = 2;
            break;
            case 'C':
            case 'c':
            x[i] = 3;
            break;
            case 'D':
            case 'd':
            x[i] = 4;
            break;
            case 'E':
            case 'e':
            x[i] = 5;
            break;
            case 'F':
            case 'f':
            x[i] = 6;
            break;
            case 'G':
            case 'g':
            x[i] = 7;
            break;
            case 'H':
            case 'h':
            x[i] = 8;
            break;
            case 'I':
            case 'i':
            x[i] = 9;
            break;
            case 'J':
            case 'j':
            x[i] = 10;
            break;
            case 'K':
            case 'k':
            x[i] = 11;
            break;
            case 'L':
            case 'l':
            x[i] = 12;
            break;
            case 'M':
            case 'm':
            x[i] = 13;
            break;
            case 'N':
            case 'n':
            x[i] = 14;
            break;
            case 'Ñ':
            case 'ñ':
            x[i] = 15;
            break;
            case 'O':
            case 'o':
            x[i] = 16;
            break;
            case 'P':
            case 'p':
            x[i] = 17;
            break;
            case 'Q':
            case 'q':
            x[i] = 18;
            break;
            case 'R':
            case 'r':
            x[i] = 19;
            break;
            case 'S':
            case 's':
            x[i] = 20;
            break;
            case 'T':
            case 't':
            x[i] = 21;
            break;
            case 'U':
            case 'u':
            x[i] = 22;
            break;
            case 'V':
            case 'v':
            x[i] = 23;
            break;
            case 'W':
            case 'w':
            x[i] = 24;
            break;
            case 'X':
            case 'x':
            x[i] = 25;
            break;
            case 'Y':
            case 'y':
            x[i] = 26;
            break;
            case 'Z':
            case 'z':
            x[i] = 27;
            break;
            default:
            break;
        }
    }
    return x;
}

/*Function 2 convertSpaces*/
function convertSpaces(str){
    var cont = 0;
    for(var n=0; n<str.length; n++){
        if(str[n] === " "){
            cont++;
        }
    }
    if(cont === str.length){
        var s = "";
        for(let i=0; i<cont; i++){
            s += "%20";
        }
        return s;
    }
    if(typeof(str) !== "string"){
        return false;
    }
    var s;
    s = str.split("");
    for(let i=0; i<s.length-1; i++){
        if(s[i] === " "){
            s[i] = "%20";
        }
    }
    var res = "";
    for(let i=0; i<s.length; i++){
        res += s[i];
    }
    return res;
}

/*Function 3 */
function rounded(num){
    if(num === true || num === false){
        return false;
    }
    if(num === Infinity){
        return Infinity;
    }
    if(num === -Infinity){
        return -Infinity;
    }

    if(num % 1 ===0){
        return num;
    }

    if(!Number(num)){
        return false;
    }

    if(typeof(num) == 'string'){
        return false;
    }

    num = num.toString();
    var n = num.split("");
    var max = n.length;
    var point = 0;
    var nueva = [];
    var last;
    var number = "";
    var res = 0;

    for(let i=0; i<max; i++){
        if(n[i]=== "."){
            point = i;
        }
    }

    for(let i=0; i<point+4; i++){
        nueva[i] = n[i];
    }

    last = nueva[nueva.length-1];
    if(last >= 5){
        for(let i=0; i<nueva.length; i++){
            number += nueva[i];
        }
        last = 10 - last;
        last = ".00" + last;
        res = Number(number) + Number(last);
        if(res.length===3){
            res += "0";
        }
        if(res%1===0){
            res += ".00"
        }
        return Number(res);
    }
    else{
        for(let i=0; i<nueva.length-1; i++){
            number += nueva[i];
        }
        return Number(number);
    }
}

/*Function 4*/
function getTotal(days){
    var total = days * 40;
    if(days === -Infinity){
        return -Infinity;
    }
    if(days === Infinity){
        return Infinity;
    }
    if(days < 0){
        return false;
    }
    if(typeof days == "string"){
        return false;
    }

    if(typeof days == "object"){
        return false;
    }
    if( days === 0){
        return 0;
    }
    if(!Number(days)){
        return false;
    }
    if(days >= 3 && days < 7){
        total -= 20;
    }
    if(days >= 7){
        total -= 50;
    }
    return total;
}

/*Function 5*/
function squareSum(ary){

    if(typeof ary === "number" || ary < 0){
        return false;
    }
    if(ary === null){
        return false;
    }
    if(!ary.length){
        return false;
    }
    if(ary === Infinity){
        return false;
    }
    if(ary === true || ary === false){
        return false;
    }
    if(Array(ary) === false ) {
        return false;
    }
    if(typeof ary === "string"){
        return false;
    }
    if(typeof ary === "number" || ary < 0){
        return false;
    }
    for(var i = 0; i< ary.length; i++){
        if(typeof ary[i] !== "number"){
            return false;
        }
    }
    var x = [];
    x = ary;
    var total = 0;
    var sum = 0;
    for(let i=0; i<x.length; i++){
        sum = ary[i] * ary[i];
        total += sum;
    }
    return total;
}

/*Function 6*/
function isRotation(str1, str2){
    if(typeof str1 != "string" || typeof str2 != "string" ){
        return false;
    }
    if(str1.match(" ") || str2.match(" ")){
        return false;
    }
    if(str1 === null || str2 === null){
        return false;
    }
    if(str1.length !== str2.length){
        return false
    }
    if(Array.isArray(str1) || Array.isArray(str2)){
        return false;
    }
    if(typeof str1 === "number" || typeof srt2 === "number" ){
        return false;
    }
    var a = str1.split("");
    var b = str2.split("");
    var n = [];
    var temp = "";
    var x= "", y = "";
    console.log(a);
    n = b;
    console.log(n);
    //e r b o t t l e w a t
    for(let i=0; i<a.length; i++){
        temp = 0;
        temp = n[0];
        for(let j=0; j<b.length; j++){
            n[j] = n[j+1];
        }
        n[n.length-1] = temp;
        x = a.toString();
        y = n.toString();
        if(x == y){
            return true;
        }
    }
    return false;
}

/*Function 7 */
function convertMatrix(mat){
    if(!Array.isArray(mat)){
        return false;
    }
    for(var i=0; i<mat.length;i++){
        for(var j=0; j<mat.length; j++){
            if(mat[i][j] === 0){
                for(var k=0; k<mat.length;k++){
                    mat[k][j]=0;
                    mat[i][k]=0;
                }
                break;
            }
        }
    }
    return mat;
}

/*Function 8 */
function rotate(mat) {
    if(mat instanceof Array){
        var max = mat.length;
        if(max > 0){
            for(var i = 0; i < max; i++){
                if(mat[i].length !== max){
                    return false;
                }
            }
            var res = [];
            for(var x = 0; x < max; x++){
                res[x] = [];
                for(var y = max - 1; y >= 0; y--){
                    res[x][max - 1 - y] = mat[y][x];
                }
            }
            return res;
        }
    }
    return false;
}

//console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));


/*Exercise 1 : Anagrams*/
describe("Testing Anagram", function(){
    it("Espero que amor y roma sea true", function(){
        var res = isAnagram("amOr", "Roma");
        expect(res).toBe(true);
    });

    it("Espero que amor y amrw sea false", function(){
        var res = isAnagram("amor", "amrw");
        expect(res).toBe(false);
    });

    it("Espero que amor y 2 sea false", function(){
        var res = isAnagram("amor", 2);
        expect(res).toBe(false);
    });

    it("Espero que 2 y amor sea false", function(){
        var res = isAnagram(2, "amor");
        expect(res).toBe(false);
    });

    it("Espero que 2 y 2 sea false", function(){
        var res = isAnagram(2, 2);
        expect(res).toBe(false);
    });

    it("Espero que \"2\" y \"2\" sea false", function(){
        var res = isAnagram("2", "2");
        expect(res).toBe(false);
    });
    it("Espero que 2 y \"2\" sea false", function(){
        var res = isAnagram(2, "2");
        expect(res).toBe(false);
    });
    it("Espero que \"2\" y 2 sea false", function(){
        var res = isAnagram("2", 2);
        expect(res).toBe(false);
    });
    it("Espero que NaN y NaN sea false", function(){
        var res = isAnagram(NaN, NaN);
        expect(res).toBe(false);
    });

    it("Espero que false y false sea false", function(){
        var res = isAnagram(false, false);
        expect(res).toBe(false);
    });

    it("Espero que amor y false sea false", function(){
        var res = isAnagram("amor", false);
        expect(res).toBe(false);
    });

    it("Espero que true y amor sea false", function(){
        var res = isAnagram(true, "amor");
        expect(res).toBe(false);
    });

    it("Espero que * y amor sea false", function(){
        var res = isAnagram("*", "amor");
        expect(res).toBe(false);
    });

    it("Espero que null y null sea false", function(){
        var res = isAnagram(null, null);
        expect(res).toBe(false);
    });

    it("Espero que null y amor sea false", function(){
        var res = isAnagram(null, "amor");
        expect(res).toBe(false);
    });

    it("Espero que amor y null sea false", function(){
        var res = isAnagram("amor", null);
        expect(res).toBe(false);
    });

    it("Espero que amor e Infinity sea false", function(){
        var res = isAnagram("amor", Infinity);
        expect(res).toBe(false);
    });

    it("Espero que Infinity y amor sea false", function(){
        var res = isAnagram(Infinity, "amor");
        expect(res).toBe(false);
    });

    it("Espero que [a,m,o,r] y roma sea false", function(){
        var res = isAnagram(["a","m","o","r"],"roma");
        expect(res).toBe(false);
    });

    it("Espero que roma y [a,m,o,r] sea false", function(){
        var res = isAnagram("roma", ["a","m","o","r"]);
        expect(res).toBe(false);
    });

    it("Espero que {1:2,12:2} y [a,m,o,r] sea false", function(){
        var res = isAnagram({1:2,12:2}, ["a","m","o","r"]);
        expect(res).toBe(false);
    });

});

/*Exercise 2*/
describe("Testing convertSpaces", function(){
    it("Espero que Hola mundo sea igual a Hola%mundo",function(){
        var res = convertSpaces("Hola mundo");
        expect(res).toBe("Hola%20mundo");
    });

    it("Espero que 1 sea igual a false",function(){
        var res = convertSpaces(1);
        expect(res).toBe(false);
    });

    it("Espero que \"    \" sea igual a %20",function(){
        var res = convertSpaces('    ');
        expect(res).toBe("%20%20%20%20");
    });

    it("Espero que true sea igual a false",function(){
        var res = convertSpaces(true);
        expect(res).toBe(false);
    });

    it("Espero que [1,2,3] sea igual a false",function(){
        var res = convertSpaces([1,2,3]);
        expect(res).toBe(false);
    });

    it("Espero que {1:1,2:3,3:3} sea igual a false",function(){
        var res = convertSpaces({1:1,2:3,3:3});
        expect(res).toBe(false);
    });
});


/*Exercise 3*/

describe("Testing rounded", function(){
    it("Espero que rounded de 0.994 sea igual a 0.99",function(){
        var res = rounded(0.994);
        expect(res).toBe(0.99);
    });

    it("Espero que rounded de 0.996 sea igual a 1.00",function(){
        var res = rounded(0.995);
        expect(res).toBe(1.00);
    });

    it("Espero que 1 sea igual a 1",function(){
        var res = rounded(1);
        expect(res).toBe(1);
    });

    it("Espero que rounded de 0 sea igual a 0",function(){
        var res = rounded(0);
        expect(res).toBe(0);
    });

    it("Espero que rounded de 0.00 sea igual a 0.00",function(){
        var res = rounded(0.00);
        expect(res).toBe(0.00);
    });

    it("Espero que rounded de 100 sea igual a 100",function(){
        var res = rounded(100);
        expect(res).toBe(100);
    });

    it("Espero que rounded de \"hola\" sea igual NaN",function(){
        var res = rounded("hola");
        expect(res).toBe(false);
    });

    it("Espero que rounded de [1,2,3] sea igual NaN",function(){
        var res = rounded([1,2,3]);
        expect(res).toBe(false);
    });

    it("Espero que rounded de {1:1,2:2} sea igual NaN",function(){
        var res = rounded({1:1,2:2});
        expect(res).toBe(false);
    });


    it("Espero que rounded de Infinity sea igual Ininity",function(){
        var res = rounded(Infinity);
        expect(res).toBe(Infinity);
    });
    it("Espero que rounded de -Infinity sea igual NaN",function(){
        var res = rounded(-Infinity);
        expect(res).toBe(-Infinity);
    });
});

/*Exercise 4*/

describe("Testing getTotal", function(){
    it("Espero que getTotal de 10 sea igual a 350",function(){
        var res = getTotal(10);
        expect(res).toBe(350);
    });
    it("Espero que getTotal de 5 sea igual a 180",function(){
        var res = getTotal(5);
        expect(res).toBe(180);
    });
    it("Espero que getTotal de a sea igual a NaN",function(){
        var res = getTotal("a");
        expect(res).toBe(false);
    });
    it("Espero que getTotal de [1,2,3] sea igual a NaN",function(){
        var res = getTotal([1,2,3]);
        expect(res).toBe(false);
    });
    it("Espero que getTotal de {1:1,2:2} sea igual a NaN",function(){
        var res = getTotal({1:1,2:2});
        expect(res).toBe(false);
    });

    it("Espero que getTotal de 0 sea igual a 0",function(){
        var res = getTotal(0);
        expect(res).toBe(0);
    });
    it("Espero que getTotal de -1 sea igual a false",function(){
        var res = getTotal(-1);
        expect(res).toBe(false);
    });

    it("Espero que getTotal de Infinity sea igual a Infinity",function(){
        var res = getTotal(Infinity);
        expect(res).toBe(Infinity);
    });
    it("Espero que getTotal de -Infinity sea igual a -Infinity",function(){
        var res = getTotal(-Infinity);
        expect(res).toBe(-Infinity);
    });
    it("Espero que getTotal de NaN sea igual a NaN",function(){
        var res = getTotal(NaN);
        expect(res).toBe(false);
    });
    it("Espero que getTotal de -NaN sea igual a NaN",function(){
        var res = getTotal(-NaN);
        expect(res).toBe(false);
    });
});


/*Exercise 5*/
describe("Testing squareSum", function(){
    it("Espero que squareSum de [1,2,2] sea igual a 9",function(){
        var res = squareSum([1,2,2]);
        expect(res).toBe(9);
    });

    it("Espero que squareSum de \"a\" sea igual a NaN",function(){
        var res = squareSum("a");
        expect(res).toBe(false);
    });

    it("Espero que squareSum de 1 sea igual a false",function(){
        var res = squareSum(1);
        expect(res).toBe(false);
    });

    it("Espero que squareSum de [1,2,3,4,e] sea igual a false",function(){
        var res = squareSum([1,2,3,4,"e"]);
        expect(res).toBe(false);
    });

    it("Espero que squareSum de null sea igual a false",function(){
        var res = squareSum(null);
        expect(res).toBe(false);
    });

    it("Espero que squareSum de Infinity sea igual a false",function(){
        var res = squareSum(Infinity);
        expect(res).toBe(false);
    });
    it("Espero que squareSum de true sea igual a false",function(){
        var res = squareSum(true);
        expect(res).toBe(false);
    });
    it("Espero que squareSum de false sea igual a false",function(){
        var res = squareSum(false);
        expect(res).toBe(false);
    });
    it("Espero que squareSum de 1.4 sea igual a false",function(){
        var res = squareSum(1.4);
        expect(res).toBe(false);
    });
    it("Espero que squareSum de -18 sea igual a false",function(){
        var res = squareSum(-18);
        expect(res).toBe(false);
    });
    it("Espero que squareSum de [] sea igual a false",function(){
        var res = squareSum([]);
        expect(res).toBe(false);
    });
});

/*Exercise 6*/
describe("Testing isRotation", function(){
    it("Espero que maro isRotation de roma",function(){
        var res = isRotation("roma", "maro");
        expect(res).toBe(true);
    });
    it("Espero que mar isRotation de roma",function(){
        var res = isRotation("roma", "mar");
        expect(res).toBe(false);
    });
    it("Espero que 2 isRotation de roma",function(){
        var res = isRotation("roma", 2);
        expect(res).toBe(false);
    });
    it("Espero que roma isRotation de 2",function(){
        var res = isRotation(2, "roma");
        expect(res).toBe(false);
    });
    it("Espero que [r,o,m,a] isRotation de [m,a,r,o]",function(){
        var res = isRotation(["m","a","r","o"], ["r","o","m","a"]);
        expect(res).toBe(false);
    });
    it("Espero que roma isRotation de [m,a,r,o]",function(){
        var res = isRotation(["m","a","r","o"], "roma");
        expect(res).toBe(false);
    });
    it("Espero que [m,a,r,o] isRotation de roma",function(){
        var res = isRotation("roma", ["m","a","r","o"]);
        expect(res).toBe(false);
    });
    it("Espero que null isRotation de null",function(){
        var res = isRotation(null, null);
        expect(res).toBe(false);
    });
    it("Espero que 2 isRotation de 2",function(){
        var res = isRotation(2, 2);
        expect(res).toBe(false);
    });
    it("Espero que NaN isRotation de roma",function(){
        var res = isRotation("roma", NaN);
        expect(res).toBe(false);
    });
    it("Espero que NaN isRotation de NaN",function(){
        var res = isRotation(NaN, NaN);
        expect(res).toBe(false);
    });
    it("Espero que {1:1, 2:2} isRotation de {1:1, 2:2}",function(){
        var res = isRotation({1:1, 2:2}, {1:1, 2:2});
        expect(res).toBe(false);
    });
    it("Espero que \"\" isRotation de \"\"",function(){
        var res = isRotation("", "");
        expect(res).toBe(false);
    });
    it("Espero que \" \" isRotation de \" \"",function(){
        var res = isRotation(" ", " ");
        expect(res).toBe(false);
    });
    it("Espero que NOLASCO isRotation de lascono",function(){
        var res = isRotation("NOLASCO", "LASCONO");
        expect(res).toBe(true);
    });
    it("Espero que -1 isRotation de axel",function(){
        var res = isRotation(-1, "axel");
        expect(res).toBe(false);
    });
});

/*Exercise 7*/
describe("Testing convertMatrix", function(){
    it("Espero que convertMatrix [[1,1,1], [1,1,1], [1,1,0]] devuelva [[1,1,0],[1,1,0],[0,0,0]]",function(){
        var res = convertMatrix([[1,1,1], [1,1,1], [1,1,0]]);
        expect(res).toEqual([[1,1,0],[1,1,0],[0,0,0]]);
    });
    it("Espero que convertMatrix a devuelva false",function(){
        var res = convertMatrix("a");
        expect(res).toEqual(false);
    });
    it("Espero que convertMatrix 5 devuelva false",function(){
        var res = convertMatrix(5);
        expect(res).toEqual(false);
    });
    it("Espero que convertMatrix Axel devuelva false",function(){
        var res = convertMatrix("Axel");
        expect(res).toEqual(false);
    });
    it("Espero que convertMatrix {1:1,2:2,3:3} devuelva false",function(){
        var res = convertMatrix({1:1,2:2,3:3});
        expect(res).toEqual(false);
    });
});

/*Exercise 8*/
describe("Testing rotate", function(){
    it("Espero que rotate [[1,2,3], [4,5,6], [7,8,9]] equal [[1,2,3], [4,5,6], [7,8,9]]",function(){
        var res = rotate([[1,2,3], [4,5,6], [7,8,9]]);
        expect(res).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
    });
    it("Espero que rotate Axel return false", function(){
        var res = rotate("Axel");
        expect(res).toEqual(false);
    });
    it("Espero que rotate 123456789 return false", function(){
        var res = rotate(123456789);
        expect(res).toEqual(false);
    });
    it("Espero que rotate {1:2,2:3,3:4} return false", function(){
        var res = rotate(123456789);
        expect(res).toEqual(false);
    });
    it("Espero que rotate NaN return false", function(){
        var res = rotate(NaN);
        expect(res).toEqual(false);
    });
    it("Espero que rotate false return false", function(){
        var res = rotate(false);
        expect(res).toEqual(false);
    });
    it("Espero que rotate \" \" return false", function(){
        var res = rotate(" ");
        expect(res).toEqual(false);
    });
    it("Espero que rotate Infinity return false", function(){
        var res = rotate(Infinity);
        expect(res).toEqual(false);
    });
    it("Espero que rotate -1 return false", function(){
        var res = rotate(-1);
        expect(res).toEqual(false);
    });
    it("Espero que rotate [] return false", function(){
        var res = rotate([]);
        expect(res).toEqual(false);
    });
    it("Espero que rotate [[],[],[]] return false", function(){
        var res = rotate([[],[],[]]);
        expect(res).toEqual(false);
    });
    it("Espero que rotate [[q,w,e],[1,2,3],[f,d,4]] return [['f',1,'q'], ['d',2,'w'], [4,3,'e']]", function(){
        var res = rotate([["q","w","e"],[1,2,3],["f","d",4]]);
        expect(res).toEqual([['f',1,'q'], ['d',2,'w'], [4,3,'e']]);
    });
    it("Espero que rotate [[[],[]],[[],[]],[[],[]]] return false", function(){
        var res = rotate([[[],[]],[[],[]],[[],[]]]);
        expect(res).toEqual(false);
    });
});
