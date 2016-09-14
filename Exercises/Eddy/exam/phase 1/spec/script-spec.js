/**
 * Created by EDDY on 14/09/2016.
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++phase #1.1
function isType (item, inst, name) {
	if (item instanceof inst === true || typeof item === name) {
		return true;
	}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
	if (flag && isType (date, Date, 'date') && isType (Quantity, Number, 'number') && (Quantity % 1 === 0) && Quantity !== Infinity) {
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
	if (flag && isType (date, Date, 'date') && isType (Quantity, Number, 'number') && (Quantity % 1 === 0) && Quantity !== Infinity) {
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++phase #1.2
function every (arr, funct) {

	var flag = 0;
	if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
		for (var i = 0; i < arr.length; i++) {
			if (funct (arr[i], i, arr)) {
				flag++;
			} else {
				return false;
			}
		}
		return flag === arr.length;
	}
	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function some (arr, funct) {

	if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
		for (var i = 0; i < arr.length; i++) {
			if (funct (arr[i], i, arr)) {
				return true;
			}
		}

	}
	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function find (arr, funct) {
	var flag = undefined;
	if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
		for (var i = 0; i < arr.length; i++) {
			if (funct (arr[i], i, arr)) {
				flag = arr.indexOf (arr[i]);
				return flag;
			}
		}
		return flag;
	}
	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function map (arr, funct) {
	var flag = [];
	if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
		for (var i = 0; i < arr.length; i++) {
			if (funct (arr[i], i, arr)) {
				flag.push (funct (arr[i]));
			}
		}
		return flag;
	}
	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var ary = [1, 2, 3];
var result = 0;
function foreach (arr, funct) {
	var args = Array.prototype.slice.call (arguments[1]);

	if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
		for (var i = 0; i < arr.length; i++) {
			funct (args[i], i, ary)   // se que ary y arr son lo mismo pero que es mas correto?

		}
		return undefined;
	}
	return false
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function filter (arr, funct) {
	var flag = [];
	if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
		for (var i = 0; i < arr.length; i++) {
			if (funct (arr[i], i, arr)) {
				flag.push (arr[i]);
			}
		}
		return flag;
	}
	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function concat () {
	if (!arguments) {
		return false;
	} else {
		var args = Array.prototype.slice.call (arguments);
		var result = [];
		for (var i = 0; i < args.length; i++) {
			if (isType (args[i], Array, 'array')) {
				result = result.concat (args[i]);
			} else {
				return false;
			}
		}
		return result;
	}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function encrypt (str, num) {
	if (isType (str, String, 'string') && isType (num, Number, 'number')) {
		if (num > 0 && !isNaN (num) && num % 1 === 0 && num !== Infinity) {
			var strCopy = str;
			var newPhrase = '';
			var garbage = '';
			for (var n = 0; n < num; n++) {
				newPhrase = '';
				garbage = '';
				for (var i = 1; i < strCopy.length; i += 2) {
					newPhrase += strCopy[i];
					garbage += strCopy[i - 1];
				}
				garbage += strCopy[str.length - 1];
				strCopy = newPhrase + garbage;
			}
			return strCopy;
		}
		return false;
	}
	return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
			it ("#2 Expect  substract (new Date (2016, 8, 14, 01, 30), 2.7, 'minutes' => false", function () {
				expect (substract (new Date (2016, 8, 14, 01, 30), 2.7, "minutes").toString ()).toBe ('false');
			});
			it ("#3 Expect  substract (new Date (2016, 8, 14, 01, 30), Infinity, 'minutes' => false", function () {
				expect (substract (new Date (2016, 8, 14, 01, 30), Infinity, "minutes").toString ()).toBe ('false');
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
			it ("#11 Expect deepReverse  ([['lol',[1, 2]]])=> [[[2, 1],'lol']]", function () {
				expect (deepReverse ([['lol',[1, 2]]])).toEqual ([[[2, 1],'lol']]);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 deepReverse end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 every start
	describe ("Testing every function", function () {
		it ("should exists", function () {
			expect (every).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Arrays", function () {
			it ("#1 Expect every ([1, 2, 3], function (element) { return element < 5; }) => true", function () {
				expect (every ([1, 2, 3], function (element, index, array) {
					return element < 5;
				})).toBe (true);
			});
			it ("#2 Expect every ([1, 2, 3],3 => false", function () {
				expect (every ([1, 2, 3], 2)).toBe (false);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 every end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 some start
	describe ("Testing some function", function () {
		it ("should exists", function () {
			expect (some).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Arrays", function () {
			it ("#1 Expect some ([false,false,true], function (element) { return element === true5; }) => true", function () {
				expect (some ([false, false, true], function (element) {
					return element === true;
				})).toBe (true);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 some end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 find start
	describe ("Testing find function", function () {
		it ("should exists", function () {
			expect (find).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Arrays", function () {
			it ("#1 Expect find ([1,2,3], function (element) { return element === 5; }) => undefined", function () {
				expect (find ([1, 2, 3], function (element) {
					return element === 5;
				})).toBe (undefined);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 find end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 map start
	describe ("Testing map function", function () {
		it ("should exists", function () {
			expect (map).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Arrays", function () {
			it ("#1 Expect map ([1,2,3], function (element) { return element === 5; }) => undefined", function () {
				expect (map ([1, 2, 3], function (element) {
					return element + 3;
				})).toEqual ([4, 5, 6]);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 map end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8 foreach start
	describe ("Testing foreach function", function () {
		it ("should exists", function () {
			expect (foreach).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Arrays", function () {
			it ("#1 Expect foreach foreach((ary, function (element, index, ary) { result += ary[index];	}))=> undefined", function () {
				expect (foreach (ary, function (element, index, ary) {
					result += ary[index];
				})).toBe (undefined);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8 foreach end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#9 filter start
	describe ("Testing filter function", function () {
		it ("should exists", function () {
			expect (filter).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are arrays", function () {
			it ("#1 Expect filter foreach((ary, function (element, index, ary) { result += ary[index];	}))=> undefined", function () {
				expect (filter ([1, 2, 3], function (element) {
					return element < 5;
				})).toEqual ([1, 2, 3]);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#9 filter end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#10 concat start
	describe ("Testing concat function", function () {
		it ("should exists", function () {
			expect (concat).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are arrays", function () {
			it ("#1 Expectconcat ([1, 2, 3], [4, 5, 6, [7]])=> [1,2,3,4,5,6,[7]]", function () {
				expect (concat ([1, 2, 3], [4, 5, 6, [7]])).toEqual ([1, 2, 3, 4, 5, 6, [7]]);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#10 concat end
	//
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#11 encrypt start
	describe ("Testing encrypt function", function () {
		it ("should exists", function () {
			expect (encrypt).toBeDefined ();
		});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests against values that are Dates", function () {
			it ("#1 Encrypt 'This is a test!'=> 's eT ashi tist!'", function () {
				expect (encrypt ('This is a test!', 2)).toBe ('s eT ashi tist!');
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#11 encrypt end
});