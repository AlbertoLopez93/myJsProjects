
/**
 * Created by EDDY on 06/09/2016.
 */
function eight (param) {
	var matrixCopy = param;
	for (var i = 0; i < param.length; i++) {
		for (var j = param[i].length - 1; j >= 0; j--) {
			matrixCopy[i][j]=param[j][i];
		}
	}
	return matrixCopy;
}

console.log (eight ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));