function isAnagram (str1, str2){
    var res = true;
    if ((typeof str1 === 'string' || (str1 instanceof String)) && (typeof str2 === 'string' || (str2 instanceof String))){
    	if(str1.length != str2.length){
        	res = false;
        	return res;
    	}
	    var strArre1 = str1.split('');
    	var strArre2 = str2.split('');
    	var temp = '';
    	strArre1 = convertToLowerCase(strArre1);
    	strArre2 = convertToLowerCase(strArre2);
    	for(var i = 0; i < strArre1.length; i++){
       		for(var j = 0; j < strArre1.length; j++){
            	if(strArre1[j] > strArre1[j+1]){
                	temp = strArre1[j];
	                strArre1[j] = strArre1[j+1];
    	            strArre1[j+1] = temp;
        	    }
            	if(strArre2[j] > strArre2[j+1]){
                	temp = strArre2[j];
	                strArre2[j] = strArre2[j+1];
    	            strArre2[j+1] = temp;
        	    }
	        }
    	}
    	for(var i = 0; i < strArre1.length; i++){
        	if(strArre1[i] !== strArre2[i]){
            	res = false;
        	}
    	}
    } else {
    	res = false;
    	return res;
    }
    return res;
}

function convertToLowerCase (str){
    for(var i = 0; i < str.length; i++){
        switch(true){
            case str[i] == 'A' : 
                str[i] = 'a';
                break;
            case str[i] === 'B' :
                str[i] = 'b';
                break;
            case str[i] === 'C' : 
                str[i] = 'c';
                break;
            case str[i] === 'D' : 
                str[i] = 'd';
                break;
            case str[i] === 'E' : 
                str[i] = 'e';
                break;
            case str[i] === 'F' : 
                str[i] = 'f';
                break;
            case str[i] === 'G' : 
                str[i] = 'g';
                break;
            case str[i] === 'H' :
                str[i] = 'h';
                break;
            case str[i] === 'I' : 
                str[i] = 'i';
                break;
            case str[i] === 'J' : 
                str[i] = 'j';
                break;
            case str[i] === 'K' : 
                str[i] = 'k';
                break;
            case str[i] === 'L' : 
                str[i] = 'l';
                break;
            case str[i] === 'M' : 
                str[i] = 'm';
                break;
            case str[i] === 'N' : 
                str[i] = 'n';
                break;
            case str[i] === 'Ñ' : 
                str[i] = 'ñ';
                break;
            case str[i] === 'O' : 
                str[i] = 'o';
                break;
            case str[i] === 'P' : 
                str[i] = 'p';
                break;
            case str[i] === 'Q' : 
                str[i] = 'q';
                break;
            case str[i] === 'R' : 
                str[i] = 'r';
                break;
            case str[i] === 'S' : 
                str[i] = 's';
                break;
            case str[i] === 'T' : 
                str[i] = 't';
                break;
            case str[i] === 'U' : 
                str[i] = 'u';
                break;
            case str[i] === 'V' : 
                str[i] = 'v';
                break;
            case str[i] === 'W' : 
                str[i] = 'w';
                break;
            case str[i] === 'X' : 
                str[i] = 'x';
                break;
            case str[i] === 'Y' : 
                str[i] = 'y';
                break;
            case str[i] === 'Z' : 
                str[i] = 'z';
                break;
            default:
        }
    }
    return str;
}

describe ("Testing isAnagram", function(){
    it("Expect that Amor and Roma are Anagrams", function(){
        var res = isAnagram('Amor', 'Roma');
        expect(res).toBe(true); 
    });
    it("Expect that Amors and Romaz aren't Anagrams", function(){
        var res = isAnagram('Amors', 'Romaz');
        expect(res).toBe(false); 
    });
    it("Expect that 25 and 52 aren't Anagrams", function(){
        var res = isAnagram(25, 52);
        expect(res).toBe(false); 
    });
    it("Expect that Caras and Rascar aren't Anagrams", function(){
        var res = isAnagram('Caras', 'Rascar');
        expect(res).toBe(false); 
    });
    it("Expect that Cosa and Saco are Anagrams", function(){
        var res = isAnagram('Cosa', 'Saco');
        expect(res).toBe(true); 
    });
    it("Expect that true and true aren't Anagrams", function(){
        var res = isAnagram(true, true);
        expect(res).toBe(false); 
    });
    it("Expect that false and false aren't Anagrams", function(){
        var res = isAnagram(false, false);
        expect(res).toBe(false); 
    });
    it("Expect that Amor2 and Ro2ma are Anagrams", function(){
        var res = isAnagram('Amor2', 'Ro2ma');
        expect(res).toBe(true); 
    });
    it("Expect that null and null aren't Anagrams", function(){
        var res = isAnagram(null, null);
        expect(res).toBe(false); 
    });
    it("Expect that Ecuador and Acuerdo are Anagrams", function(){
    	var str1 = new String ('Ecuador');
    	var str2 = new String ('Acuerdo');
        var res = isAnagram(str1, str2);
        expect(res).toBe(true); 
    });
    it("Expect that Amor and undefined are Anagrams", function(){
        var res = isAnagram('Amor', undefined);
        expect(res).toBe(false); 
    });
    it("Expect that Amor and [] are Anagrams", function(){
        var res = isAnagram('Amor', []);
        expect(res).toBe(false); 
    });it("Expect that Amor and {} are Anagrams", function(){
        var res = isAnagram('Amor', {});
        expect(res).toBe(false); 
    });
    it("Expect that Amor and ['A','m','o','r'] are Anagrams", function(){
        var res = isAnagram('Amor', ['A','m','o','r']);
        expect(res).toBe(false); 
    });it("Expect that Amor and {p1: 'Amor'} are Anagrams", function(){
        var res = isAnagram('Amor', {p1: 'Amor'});
        expect(res).toBe(false); 
    });
    it("Expect that Ecuador and Acuerdo are Anagrams", function(){
    	var str1 = new String ('Ecuador');
    	var str2 = 'Acuerdo';
        var res = isAnagram(str1, str2);
        expect(res).toBe(true); 
    });
});

function convertSpaces(str){
	if ((typeof str === 'string' || (str instanceof String))){
		var arreStr = str.split('');
		str = '';
		for(var i = 0; i < arreStr.length; i++){
			if(arreStr[i] === ' '){
				arreStr[i] = '%20';
			}
			str += arreStr[i];
		}
	} else {
		return false;
	}
	return str;
}

describe ("Testing convertSpaces", function(){
	it("Expect that 'Hello world!' returns 'Hello%20world'", function(){
        var res = convertSpaces('Hello world!');
        expect(res).toBe('Hello%20world!'); 
    });
    it("Expect that 'Everybody the bananas' returns 'Everybody%20the%20bananas'", function(){
        var res = convertSpaces('Everybody the bananas');
        expect(res).toBe('Everybody%20the%20bananas'); 
    });
    it("Expect that undefined returns false", function(){
        var res = convertSpaces(undefined);
        expect(res).toBe(false); 
    });
    it("Expect that true returns false", function(){
        var res = convertSpaces(true);
        expect(res).toBe(false); 
    });
    it("Expect that false returns false", function(){
        var res = convertSpaces(false);
        expect(res).toBe(false); 
    });
    it("Expect that null returns false", function(){
        var res = convertSpaces(null);
        expect(res).toBe(false); 
    });
    it("Expect that [] returns false", function(){
        var res = convertSpaces([]);
        expect(res).toBe(false); 
    });
    it("Expect that {} returns false", function(){
        var res = convertSpaces({});
        expect(res).toBe(false); 
    });
    it("Expect that ['hola mundo'] returns false", function(){
        var res = convertSpaces(['hola mundo']);
        expect(res).toBe(false); 
    });
    it("Expect that {hola: 'hola mundo'} returns false", function(){
        var res = convertSpaces({hola: 'hola mundo'});
        expect(res).toBe(false); 
    });
});

function rounded (param){
	if(typeof param === 'number' || param instanceof Number){
		if(param === Infinity){
			return Infinity;
		}
		if(param === -Infinity){
			return -Infinity;
		}
		var paramStr = param + '';
		var paramAry = paramStr.split('.');
		var acum = 0;
		var paramRes = 0;
		paramStr = '';
		for(var i = 0; i < paramAry.length; i++){
			paramAry[i] = paramAry[i].split('');
		}
		for(var i = paramAry[1].length-1; i > 1 ; i--){
			paramAry[1][i] = paramAry[1][i] * 1 + acum;
			if(paramAry[1][i] >= 5){
				paramAry[1][i] = 0;
				acum = 1;
			} else {
				acum = 0;
			}
			if(i === 2 && acum > 0){
				paramAry[1][i-1] = paramAry[1][i-1] * 1 + acum;
				acum = 0;
				if(paramAry[1][i-1] === 10){
					paramAry[1][i-1] = 0;
					acum = 1;
					paramAry[1][i-2] = paramAry[1][i-2] * 1 + acum;
					if(paramAry[1][i-2] === 10){
						paramAry[1][i-2] = 0;
						acum = 1;
					} else {
						acum = 0;
					}
				}
			}
		}
		paramAry[0][paramAry.length-1] = paramAry[0][paramAry.length-1] * 1 + acum;
		for(var i = 0; i < paramAry.length; i++){
			for(var j = 0; j < paramAry[i].length; j++){
				if(i > 0 && j > 1){
					break;
				}
				paramStr += paramAry[i][j] + '';
			}
			if(i > 0){
					break;
				}
			paramStr += '.';
		}
	} else {
		return false;
	}
	paramRes = parseFloat(paramStr);
	return paramRes;
}

describe ("Testing rounded", function(){
	it("Expect that 12.87234 returns 12.87", function(){
        var res = rounded(12.87234);
        expect(res).toBe(12.87); 
    });
    it("Expect that 18.9982 returns 19", function(){
        var res = rounded(18.9982);
        expect(res).toBe(19); 
    });
    it("Expect that null returns false", function(){
        var res = rounded(null);
        expect(res).toBe(false); 
    });
    it("Expect that false returns false", function(){
        var res = rounded(false);
        expect(res).toBe(false); 
    });
    it("Expect that undefined returns false", function(){
        var res = rounded(undefined);
        expect(res).toBe(false); 
    });
    it("Expect that true returns false", function(){
        var res = rounded(true);
        expect(res).toBe(false); 
    });
    it("Expect that '18.9982' returns false", function(){
        var res = rounded('18.9982');
        expect(res).toBe(false); 
    });
    it("Expect that [18.9982] returns false", function(){
        var res = rounded([18.9982]);
        expect(res).toBe(false); 
    });
    it("Expect that {num: 18.9982} returns false", function(){
        var res = rounded({num: 18.9982});
        expect(res).toBe(false); 
    });
    it("Expect that num returns 19", function(){
    	var num = new Number(18.9982);
        var res = rounded(num);
        expect(res).toBe(19); 
    });
    it("Expect that Infinity returns Infinity", function(){
        var res = rounded(Infinity);
        expect(res).toBe(Infinity); 
    });
    it("Expect that -Infinity returns -Infinity", function(){
        var res = rounded(-Infinity);
        expect(res).toBe(-Infinity); 
    });
});

function getTotal (days){
	if((typeof days === 'number' && Number.isInteger(days)) || days instanceof Number){
		var totalAmount = days * 40;
		if(days >= 3 && days < 7){
			totalAmount -= 20;
		} else if(days >= 7){
			totalAmount -= 50;
		}
	} else {
		return false;
	}
	return totalAmount;
}

describe ("Testing getTotal", function(){
	it("Expect that 3 returns 100", function(){
        var res = getTotal(3);
        expect(res).toBe(100); 
    });
    it("Expect that 2 returns 80", function(){
        var res = getTotal(2);
        expect(res).toBe(80); 
    });
    it("Expect that 7 returns 230", function(){
        var res = getTotal(7);
        expect(res).toBe(230); 
    });
    it("Expect that 10 returns 350", function(){
        var res = getTotal(10);
        expect(res).toBe(350); 
    });
    it("Expect that null returns false", function(){
        var res = getTotal(null);
        expect(res).toBe(false); 
    });
    it("Expect that undefined returns false", function(){
        var res = getTotal(undefined);
        expect(res).toBe(false); 
    });
    it("Expect that '3' returns false", function(){
        var res = getTotal('3');
        expect(res).toBe(false); 
    });
    it("Expect that 'hola' returns false", function(){
        var res = getTotal('hola');
        expect(res).toBe(false); 
    });
    it("Expect that true returns false", function(){
        var res = getTotal(true);
        expect(res).toBe(false); 
    });
    it("Expect that false returns false", function(){
        var res = getTotal(false);
        expect(res).toBe(false); 
    });
    it("Expect that [3] returns false", function(){NaN
        var res = getTotal([3]);
        expect(res).toBe(false); 
    });
    it("Expect that {num: 3} returns false", function(){
        var res = getTotal({num: 3});
        expect(res).toBe(false); 
    });
    it("Expect that num returns 100", function(){
    	var num = new Number(3);
        var res = getTotal(num);
        expect(res).toBe(100); 
    });
    it("Expect that Infinity returns false", function(){
        var res = getTotal(Infinity);
        expect(res).toBe(false); 
    });
    it("Expect that -Infinity returns false", function(){
        var res = getTotal(-Infinity);
        expect(res).toBe(false); 
    });
});

function squareSum(arrNum){
	if(Array.isArray(arrNum)){
		if(arrNum.length < 1){
			return undefined;
		}
		var squareSum = 0;
		for(var i = 0; i < arrNum.length; i++){
			if(typeof arrNum[i] === 'number' || arrNum[i] instanceof Number){
				if(arrNum[i] === Infinity){
					return Infinity;
				}
				if(arrNum[i] === -Infinity){
					return -Infinity;
				}
				squareSum += arrNum[i] * arrNum[i];
			} else {
				return NaN;
			}
		}
	} else {
		return false;
	}
	return squareSum;
}

describe ("Testing squareSum", function(){
	it("Expect that [1,2,3] returns 14", function(){
        var res = squareSum([1,2,3]);
        expect(res).toBe(14); 
    });
    it("Expect that [1,2,-3] returns 14", function(){
        var res = squareSum([1,2,-3]);
        expect(res).toBe(14); 
    });
    it("Expect that [] returns undefined", function(){
        var res = squareSum([]);
        expect(res).toBe(undefined); 
    });
    it("Expect that [undefined] returns NaN", function(){
        var res = squareSum([undefined]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,'2',3] returns NaN", function(){
        var res = squareSum([1,'2',3]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,2,true] returns NaN", function(){
        var res = squareSum([1,2,true]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,2,false] returns NaN", function(){
        var res = squareSum([1,2,false]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,2,null] returns NaN", function(){
        var res = squareSum([1,2,null]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,2,[]] returns NaN", function(){
        var res = squareSum([1,2,[]]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,2,[3]] returns NaN", function(){
        var res = squareSum([1,2,[3]]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [1,2,{num: 3}] returns NaN", function(){
        var res = squareSum([1,2,{num: 3}]);
        expect(res).toBeNaN(); 
    });
    it("Expect that [x ,y ,z ] returns 14", function(){
    	var x = new Number(1);
    	var y = new Number(2);
    	var z = new Number(3);
    	var arr = [x, y, z];
        var res = squareSum(arr);
        expect(res).toBe(14); 
    });
    it("Expect that undefined returns false", function(){
        var res = squareSum(undefined);
        expect(res).toBe(false); 
    });
    it("Expect that {arr: [1,2,3]} returns false", function(){
        var res = squareSum({arr: [1,2,3]});
        expect(res).toBe(false); 
    });
    it("Expect that true returns false", function(){
        var res = squareSum(true);
        expect(res).toBe(false); 
    });
    it("Expect that false returns false", function(){
        var res = squareSum(false);
        expect(res).toBe(false); 
    });
    it("Expect that null returns false", function(){
        var res = squareSum(null);
        expect(res).toBe(false); 
    });
    it("Expect that [1,2,Infinity] returns Infinity", function(){
        var res = squareSum([1,2,Infinity]);
        expect(res).toBe(Infinity); 
    });
    it("Expect that [1,2,-Infinity] returns -Infinity", function(){
        var res = squareSum([1,2,-Infinity]);
        expect(res).toBe(-Infinity); 
    });
    it("Expect that 3 returns false", function(){
        var res = squareSum(3);
        expect(res).toBe(false); 
    });
});

function isSubstring (str1, str2) {
  	var flag = false;
  	if (str1.length > str2.length) {
    	for (var i = 0; i <= str1.length - str2.length; i++) {
        	var res = '';
        	for (var j = i; j < i + str2.length && j < str1.length && i + str2.length <= str1.length; j++) {
          		res += str1[j];
        	}
        	if (res === str2) {
          		flag = true;
          		break;
        	}
      	}
  	}
  	return flag;
}

function isRotation (str1, str2) {
	if((typeof str1 === 'string' || str1 instanceof String) && (typeof str2 === 'string' || str2 instanceof String)){
	  	var flag = false;
	  	if (str1.length === str2.length) {
	    	str1 += str1;
	      	if (isSubstring (str1, str2)) {
	        	flag = true
	        	return flag;
	      	} else {
	        	return flag;
	      	}
	  	}
	  	return flag;
	} else {
		return false;
	}
}

describe ("Testing isRotation", function(){
	it("Expect that Amor and Roma returns false", function(){
        var res = isRotation('Amor', 'Roma');
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and 'erbottlewat' returns true", function(){
        var res = isRotation('waterbottle', 'erbottlewat');
        expect(res).toBe(true); 
    });
    it("Expect that 'waterbottle' and 123 returns false", function(){
        var res = isRotation('waterbottle', 123);
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and ['erbottlewat'] returns false", function(){
        var res = isRotation('waterbottle', ['erbottlewat']);
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and {rot: ['erbottlewat']} returns false", function(){
        var res = isRotation('waterbottle', {rot: ['erbottlewat']});
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and true returns false", function(){
        var res = isRotation('waterbottle', true);
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and false returns false", function(){
        var res = isRotation('waterbottle', false);
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and undefined returns false", function(){
        var res = isRotation('waterbottle', undefined);
        expect(res).toBe(false); 
    });
    it("Expect that 'waterbottle' and null returns false", function(){
        var res = isRotation('waterbottle', null);
        expect(res).toBe(false); 
    });
});