/**
 * Created by EDDY on 31/08/2016.
 */
function convertMatrix (param) {
	for (var i = 0; i < param.length; i++) {
		for (var j = 0; j < param.length; j++) {
			if (param[i][j] === 0) {
				for (var k = 0; k < param.length; k++) {
					param[k][j] = "0";
					param[i][k] = "0";
				}
				break;
			}
		}
	}return param;
}
console.log (convertMatrix ([[1, 2, 3], [4, 0, 6], [7, 8, 9]]));