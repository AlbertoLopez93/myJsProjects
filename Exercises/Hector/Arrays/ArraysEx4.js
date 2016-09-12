/****

timestamp: 1472808000000
skype

****/

function orderColor(a, b){
		if(a.eyeColor > b.eyeColor ){
			return 1;
		}
		if(a.eyeColor < b.eyeColor ){
			return -1;
		}
		return 0;
}
function orderName(a, b){
		if(a.name > b.name ){
			return 1;
		}
		if(a.name < b.name ){
			return -1;
		}
		return 0;
}
// obj.sort(orderName).sort(orderColor);
// //obj.sort(orderColor).sort(orderName);
// console.log(obj);

function orderPeople(people) {
	people.sort(orderName).sort(orderColor);
}