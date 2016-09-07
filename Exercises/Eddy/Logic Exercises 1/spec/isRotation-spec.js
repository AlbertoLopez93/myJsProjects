/**
 * Created by EDDY on 30/08/2016.
 *
 * #6 ASSUME YOU HAVE A METHOD  isSubstrig WHUCH CHECKS IF ONE WORD IS A
 * SUBSTRING OF ANOTHER GIVEN WORD. GIVEN TWO
 * STRINGS S1 S2 WRITE A FUNCTION THAT CHECKS IF S2 IS A ROTATION OF S1 USING
 * ONLY ONE CALL TO  THE is Substring method
 *
 */

//
function isSubstring (strOne, strTwo) {
	if (strOne && strTwo) {
		if (typeof strOne === 'string' || strOne instanceof String === true) {
			if (typeof strTwo === 'string' || strTwo instanceof String === true) {

				var potato = false;
				var lenOne = strOne.length;
				var lenTwo = strTwo.length;
				if (lenOne > lenTwo) {
					for (var i = 0; i <= lenOne - lenTwo; i++) {
						var search = '';
						for (var j = i; j < i + lenTwo && j < lenOne && i + lenTwo <= lenOne; j++) {
							search += strOne[j];
						}
						//console.log (search); // <-- si quieres ver como se va formando la comparacion
						if (search === strTwo) {
							potato = true;
							break
						}
					}
				}
				return potato;
			}
		}
	}
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
describe ("Testing isRotation isSubstring functions", function () {

	describe ("Testing isRotation function", function () {
		it ("should exists", function () {
			expect (isRotation).toBeDefined ();
		});
		describe ("Tests against values that are strings", function () {
			it ("Should work with strings", function () {
				expect (isRotation ('trolololoy', 'loytrololo')).toBe (true);
			});
			it ("Should work with strings becouse args doesnt have same lenght", function () {
				expect (isRotation ('trolololoy', 'loytrololos')).toBe (false);
			});
		});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are instance of Strings", function () {
			it ("Should not work with strings", function () {
				expect (isRotation (String ('trolololoy'), String ('loytrololo'))).toBe (true);
			});
		});
	});
});
