/**
 * Created by EDDY on 30/08/2016.
 */
//#6 ASSUME YOU HAVE A METHOD  isSubstrig WHUCH CHECKS IF ONE WORD IS A SUBSTRING OF ANOTHER GIVEN WORD. GIVEN TWO
// STRINGS S1 S2 WRITE A FUNCTION THAT CHECKS IF S2 IS A ROTATION OF S1 USING ONLY ONE CALL TO  THE is Substring method
//
//console.log (isSubstring ('abcdefghiabcdefghiabcdefghiabcdefghiergsdghsh', 'rgsd'));
console.log (isRotation ('trolololoy', 'loytrololo'));
console.log (isRotation (12345, 51234));

function isSubstring (strOne, strTwo) {
	var potato = false;
	var lenOne = strOne.length;
	var lenTwo = strTwo.length;
	if (lenOne > lenTwo) {
		for (var i = 0; i <= lenOne - lenTwo; i++) {
			var search = '';
			for (var j = i; j < i + lenTwo && j < lenOne && i + lenTwo <= lenOne; j++) {
				search += strOne[j];
			}
		 console.log (search); // <-- si quieres ver como se va formando la comparacion
			if (search === strTwo) {
				potato = true;
				break
			}
		}
	}

	return potato;
}

function isRotation (strOne, strTwo) {
	if (strOne.length === strTwo.length) {
		strOne += strOne;
		if (isSubstring (strOne, strTwo)) {
			return true;
		}
		return false;
	}
	return false;
}