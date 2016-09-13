/****

timestamp: 1472808000000
skype

****/


function play(arr, first, end, arr2){
	var newArr = [];
	var indice = arr2[0];
	var str = arr2[1];
	newArr = arr.slice();
	newArr.unshift(first);
	newArr.push(end);
	newArr.splice(indice, 0, str.toString());
//console.log(arr + '\n\n');
return newArr;
}
play([1,2,3], "al inicio", "al final", [4,":D"]);