/**
 * Created by EDDY on 30/08/2016.
 */
//#5 WRITE A FUNCTION THAT RECEIVES AN ARRAY OF INTEGERS  AND RETURNS THE SUM  OF THE SQUARES OF EACH NUMBER
console.log (squareSum ([1, 2, 2, 1]))
function squareSum (param) {
	var result = 0;
	for (var i = 0; i < param.length; i++) {
		result += (param[i] * param[i])
	}
	return result;
}