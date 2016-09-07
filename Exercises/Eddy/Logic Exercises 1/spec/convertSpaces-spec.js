/**
 * Created by EDDY on 30/08/2016.
 */
//# 2 WRITE A FUNCTION THAT REPLACE ALL SPACES WITH THE STRING '%20'

console.log (convertSpaces ("hola mundo como estas ?"));
function convertSpaces (param) {
	var result = '';
	for (var i = 0; i < param.length; i++) {

		if (param[i] == ' ') {
			result += '%20';
			i++;
		}
		result += param[i];
	}
	return result;
}