/****

timestamp: 1472808000000
skype

****/

// function orderColor(a, b){
// 		if(a.eyeColor > b.eyeColor ){
// 			return 1;
// 		}
// 		if(a.eyeColor < b.eyeColor ){
// 			return -1;
// 		}
// 		return 0;
// }
// function orderName(a, b){
// 		if(a.name > b.name ){
// 			return 1;
// 		}
// 		if(a.name < b.name ){
// 			return -1;
// 		}
// 		return 0;
// }

function order(a, b){
	var aux = a.eyeColor +a.name ;
	var aux2 = b.eyeColor + b.name;
	if(aux>aux2){
		return 1;
	}
	else {
		return -1;
	}
}
// obj.sort(orderName).sort(orderColor);
// //obj.sort(orderColor).sort(orderName);
// console.log(obj);

function orderPeople(people) {

	var x = people.sort(order);
	return x;

}
