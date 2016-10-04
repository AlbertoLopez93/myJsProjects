/****

timestamp: 1472847003000

****/

function createCoords (param) {
	var getRan = function () {
		return Math.random () * (100);
	};
	var arr = [];
	for (var i = 0; i < param; i++) {
		arr [i] = [parseInt (getRan ()), parseInt (getRan ())];
	}
	arr.sort(sortArr);
	function sortArr(a, b) {
		if (a[0] === b[0]) {
			return 0;
		}
		else {
			return (a[0] < b[0]) ? -1 : 1;
		}
	}
	return arr;
}