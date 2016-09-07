/**
 * Created by EDDY on 30/08/2016.
 */
//#4 YOU WILL RENT A CAR EVERYDAY YOU RENT THE CAR COST $40 IF YOU RENT THE CAR FOR THREE OR MORE DAY YOU GET $20 OFF
// YOUR TOTAL IF YOU RENT A CAR FOR 7 OR MORE DAYS UOY GET A 50% OFF YOUR TOTAL WRITE A  FUNCTION THAT GIVES YOU THE
// TOTAL AMOUNT FOR ANY GIVEN DAY

console.log (getTotatl (6));
function getTotatl (param) {
	var result = 0;
	if (param <= 3 && param > 0) {
		result = param * 40;
	}
	if (param > 3 && param < 7) {
		result = (param * 40) - 20;
	}
	if (param >= 7) {
		result = param * 40 - 50;
	}
	return result;
}