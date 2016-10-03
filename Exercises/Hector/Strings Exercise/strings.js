function transformToUnicode(str){
	var a = x.split("");
	for(let i=0; i<a.length; i++){
		a[i] = str[i].codePointAt(a[i]); 
	}
	return a
 }

function returnAllIndex(word, char){
	var a = [];
	var i = -1;
	var x = 0;
	while((i=word.indexOf(char, i+1)) >= 0){
		a[x] = i;
		x++
	} 
	if(a == ""){
		return false;
	}
	else{
		return a;
	}
}

function capitalize(str){
var a = "";
a += str[0].toUpperCase();
for(let i=1; i<str.length; i++){
	if(str[i-1] === " "){
		a += str[i].toUpperCase();
	}else{
		a += str[i];
	}
}
	return a;
}


function closerIndex(word, char){
	var total = word.length;
	var mid = total / 2;
	mid = Math.floor(mid);
	var index = word.indexOf(char);
	if(index === -1){
		return undefined;
	}
	var j = total-1;
	for(let i=0; i<=total/2; i++){
		if(word[i] == char && word[j] == char){
			return 0;
		}
		j--;
	}
	 	if(index >= mid){
	 		return -1;
	 	}
	 	else{
	 		return 1;
	 	}
}


function reverseWords(x){
//TODO Have fun :)
var res = x.split(" ");
var max = res.length;
	var final = "";
for(var i=0; i<res.length;i++){
//console.log(res[i]);
var otherMax = res[i].length;
var word = res[i];
var maxi = res[i].length;
var split = "";
for(let x = maxi-1; x >= 0; x--){
split += word[x];
res[i] = split;
}
}
//console.log(max);
	var result  = [];
	result = res.join(" ");
	result = result.toString();
	var nuevo = result.split("");
	var final = "";
	for(let i=0; i<nuevo.length; i++){
		switch(nuevo[i]){
			case '1':
				nuevo[i] = "ONE";
				break;
			case '2':
				nuevo[i] = "TWO";
				break;
			case '3':
				nuevo[i] = "THREE";
				break;
			case '4':
				nuevo[i] = "FOUR";;
				break;
			case '5':
				nuevo[i] = "FIVE";
				break;
			case '6':
				nuevo[i] = "SIX";
				break;
			case '7':
				nuevo[i] = "SEVEN";
				break;
			case '8':
				nuevo[i] = "EIGHT";
				break;
			case '9':
				nuevo[i] = "NINE";
				break;
			case '0':
				nuevo[i] = "ZERO";
				break;
		}
		final += nuevo[i];
	}
	return final;
}

module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
