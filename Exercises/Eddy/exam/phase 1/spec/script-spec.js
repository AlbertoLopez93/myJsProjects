/**
 * Created by EDDY on 14/09/2016.
 */
function isType (item, inst, name) {
	if (item instanceof inst === true || typeof item === name) {
		return true;
	}
}
function add (date, Quantity, key) {

	var millisecond = 1;
	var second = 1000 * millisecond;
	var minute = 60 * second;
	var hour = 60 * minute;
	var day = 24 * hour;
	var month = 31 * day;
	var quarter = 3 * month;
	var year = 365 * day;
	var dates = ['years', 'quarters', 'months', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
	var values = [year, quarter, month, day, hour, minute, second, millisecond];
	var i = 0;
	var flag = false;
	for (i = 0; i < dates.length; i++) {
		if (key === dates[i]) {
			var operator = values[i];
			flag = true;
			break;
		}
	}
	if (flag && isType (date, Date, 'date') && isType (Quantity, Number, 'number')) {
		if (Quantity >= 0) {
			date.setUTCMilliseconds (operator * Quantity);
			return new Date (date);
		} else {
			return false;
		}
	} else {
		return false;
	}

}
function substract (date, Quantity, key) {

	var millisecond = 1;
	var second = 1000 * millisecond;
	var minute = 60 * second;
	var hour = 60 * minute;
	var day = 24 * hour;
	var month = 31 * day;
	var quarter = 3 * month;
	var year = 365 * day;
	var dates = ['years', 'quarters', 'months', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
	var values = [year, quarter, month, day, hour, minute, second, millisecond];
	var i = 0;
	var flag = false;
	for (i = 0; i < dates.length; i++) {
		if (key === dates[i]) {
			var operator = values[i];
			flag = true;
			break;
		}
	}
	if (flag && isType (date, Date, 'date') && isType (Quantity, Number, 'number')) {
		if (Quantity >= 0) {
			date.setUTCMilliseconds (-operator * Quantity);
			return new Date (date);
		} else {
			return false;
		}
	} else {
		return false;
	}

}
function deepReverse (arr) {
	if (isType (arr, Array, 'array')) {
		var i = 0;
		if (arr.length === 0) {
			return arr.reverse ();
		}
		if (arr.length === 1 && (isType (arr[0], Number, 'number') || isType (arr[0], String, 'string'))) {
			return arr.reverse ();
		}
		if (arr.length === 1 && isType (arr[0], Array, 'array')) {
			return [deepReverse (arr[0])];
		}
		if (arr.length > 1) {
			for (i = 0; i < arr.length; i++) {
				deepReverse (arr[i]);
			}
			return arr.reverse ();
		}
	}
	return false;
}
console.log (add (new Date (2016, 8, 14, 01, 30), 2, "minutes"));
console.log (substract (new Date (2016, 8, 14, 01, 30), 2, "minutes"));
console.log (deepReverse ([[[1, 2,], 3, NaN, {'one': 'one'}, 'lol']]));
console.log (deepReverse (1));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++# testing

describe ("Testing add,substract,deepReverse functions", function () {
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 add start
	describe ("Testing add function", function () {
		it ("should exists", function () {
			expect (add).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Dates", function () {
			it ("#1 Expect  add (new Date (2016, 8, 14, 01, 30), 2, 'minutes' => Wed Sep 14 2016 01:32:00 GMT-0500 (Hora de verano central (México))", function () {
				expect (add (new Date (2016, 8, 14, 01, 30), 2, "minutes").toString ()).toBe ('Wed Sep 14 2016 01:32:00 GMT-0500 (Hora de verano central (México))');
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 add end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 substract start
	describe ("Testing substract function", function () {
		it ("should exists", function () {
			expect (substract).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Dates", function () {
			it ("#1 Expect  substract (new Date (2016, 8, 14, 01, 30), 2, 'minutes' => Wed Sep 14 2016 01:28:00 GMT-0500 (Hora de verano central (México))", function () {
				expect (substract (new Date (2016, 8, 14, 01, 30), 2, "minutes").toString ()).toBe ('Wed Sep 14 2016 01:28:00 GMT-0500 (Hora de verano central (México))');
			});

			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 substract end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 deepReverse start
	describe ("Testing deepReverse function", function () {
		it ("should exists", function () {
			expect (substract).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Dates", function () {
			it ("#1 Expect deepReverse (1)  => false", function () {
				expect (deepReverse (1)).toBe (false);
			});
			it ("#2 Expect deepReverse (NaN) => false", function () {
				expect (deepReverse (NaN)).toBe (false);
			});
			it ("#3 Expect deepReverse  (null)=> false", function () {
				expect (deepReverse (null)).toBe (false);
			});
			it ("#4 Expect deepReverse  (true)=> false", function () {
				expect (deepReverse (true)).toBe (false);
			});
			it ("#5 Expect deepReverse  (false)=> false", function () {
				expect (deepReverse (false)).toBe (false);
			});
			it ("#6 Expect deepReverse  (undefined)=> false", function () {
				expect (deepReverse (undefined)).toBe (false);
			});
			it ("#7 Expect deepReverse  ([])=> []", function () {
				expect (deepReverse ([])).toEqual ([]);
			});
			it ("#8 Expect deepReverse  ([1])=> [1]", function () {
				expect (deepReverse ([1])).toEqual ([1]);
			});
			it ("#9 Expect deepReverse  ([[1]])=> [[1]]", function () {
				expect (deepReverse ([[1]])).toEqual ([[1]]);
			});
			it ("#10 Expect deepReverse  ([[1,2]])=> [[1,2]]", function () {
				expect (deepReverse ([[1, 2]])).toEqual ([[2, 1]]);
			});
			it ("#11 Expect deepReverse  ([[1,2]])=> [[1,2]]", function () {
				expect (deepReverse ([['lol', {one: 'one'}, NaN, 3, [2, 1]]])).toEqual ([[[1, 2,], 3, NaN, {'one': 'one'}, 'lol']]);
			});

			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 deepReverse end
});