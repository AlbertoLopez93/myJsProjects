/****

timestamp: 1472847035000

****/

function isInLine (param) {
	var x0 = param[0][0];
	var y0 = param[0][1];
	var xn = param[param.length - 1][0];
	var yn = param[param.length - 1][1];
	var distanceMax = Math.sqrt (Math.pow (xn - x0, 2) + Math.pow (yn - y0, 2), 2);
	var distance = 0;
	for (var i = 0; i < param.length - 1; i++) {
		distance += Math.sqrt (Math.pow (param[i + 1][0] - param[i][0], 2) + Math.pow (param[i + 1][1] - param[i][1], 2), 2);
	}
	return distanceMax === distance;
}