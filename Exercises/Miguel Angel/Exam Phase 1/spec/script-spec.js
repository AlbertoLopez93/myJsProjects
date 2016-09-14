"use strict"
function add(date, num, str){
	if(date instanceof Date && (typeof num === 'number' || num instanceof Number) && (typeof str === 'string' || str instanceof String)){
		if(!Number.isInteger(num) || num < 0){
			return false;
		}
		str.toLowerCase();
		switch(true){
			case str === 'years':
				var years = date.getFullYear();
				date.setFullYear(years + num);
				return date;
			case str === 'quarters':
				var quarter = date.getMonth();
				num *= 3;
				date.setMonth(quarter + num);
				return date;
			case str === 'months':
				var month = date.getMonth();
				date.setMonth(month + num);
				return date;
			case str === 'days':
				var day = date.getDate();
				date.setDate(day + num);
				return date;
			case str === 'hours':
				var hours = date.getHours();
				date.setHours(hours + num);
				return date;
			case str === 'minutes':
				var minutes = date.getMinutes();
				date.setMinutes(minutes + num);
				return date;
			case str === 'seconds':
				var seconds = date.getSeconds();
				date.setSeconds(seconds + num);
				return date;
			case str === 'milliseconds':
				var milliseconds = date.getMilliseconds();
				date.setMilliseconds(milliseconds + num);
				return date;
			default:
				return false;
		}
	} else {
		return false;
	}
}

describe("Tests add function", function () {
    it("Should exists", function () {
    	var date1 = new Date(2010, 5, 12);
    	var dateExp = new Date(2014, 5, 12)
    	var res = add(date1, 4, 'years');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date2 = new Date(2016, 8, 4);
    	var dateExp = new Date(2016, 11, 4)
    	var res = add(date2, 1, 'quarters');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date3 = new Date(2017, 8);
    	var dateExp = new Date(2017, 10)
    	var res = add(date3, 2, 'months');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date4 = new Date(2017, 8, 15);
    	var dateExp = new Date(2017, 8, 21)
    	var res = add(date4, 6, 'days');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date5 = new Date(2010, 8, 7, 8);
    	var dateExp = new Date(2010, 8, 7, 20);
    	var res = add(date5, 12, 'hours');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date6 = new Date(2011, 8, 8, 17, 12);
    	var dateExp = new Date(2011, 8, 8, 17, 45);
    	var res = add(date6, 33, 'minutes');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date7 = new Date(2012, 8, 9, 16, 30, 11);
    	var dateExp = new Date(2012, 8, 9, 16, 30, 55);
    	var res = add(date7, 44, 'seconds');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var dateExp = new Date(2013, 8, 10, 10, 0, 1, 729);
    	var res = add(date8, 721, 'milliseconds');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = add(date8, 721, 'milliseconds1');
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = add(date8, true, 'milliseconds');
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = add(date8, Infinity, 'milliseconds');
    	expect(res).toEqual(false);
    });
});

function subtract(date, num, str){
	if(date instanceof Date && (typeof num === 'number' || num instanceof Number) && (typeof str === 'string' || str instanceof String)){
		if(!Number.isInteger(num) || num < 0){
			return false;
		}
		str.toLowerCase();
		switch(true){
			case str === 'years':
				var years = date.getFullYear();
				date.setFullYear(years - num);
				return date;
			case str === 'quarters':
				var quarter = date.getMonth();
				num *= 3;
				date.setMonth(quarter - num);
				return date;
			case str === 'months':
				var month = date.getMonth();
				date.setMonth(month - num);
				return date;
			case str === 'days':
				var day = date.getDate();
				date.setDate(day - num);
				return date;
			case str === 'hours':
				var hours = date.getHours();
				date.setHours(hours - num);
				return date;
			case str === 'minutes':
				var minutes = date.getMinutes();
				date.setMinutes(minutes - num);
				return date;
			case str === 'seconds':
				var seconds = date.getSeconds();
				date.setSeconds(seconds - num);
				return date;
			case str === 'milliseconds':
				var milliseconds = date.getMilliseconds();
				date.setMilliseconds(milliseconds - num);
				return date;
			default:
				return false;
		}
	} else {
		return false;
	}
}

describe("Tests subtract function", function () {
    it("Should exists", function () {
    	var date1 = new Date(2010, 5, 12);
    	var dateExp = new Date(2006, 5, 12)
    	var res = subtract(date1, 4, 'years');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date2 = new Date(2016, 8, 4);
    	var dateExp = new Date(2016, 5, 4)
    	var res = subtract(date2, 1, 'quarters');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date3 = new Date(2017, 8);
    	var dateExp = new Date(2017, 6)
    	var res = subtract(date3, 2, 'months');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date4 = new Date(2017, 8, 15);
    	var dateExp = new Date(2017, 8, 9)
    	var res = subtract(date4, 6, 'days');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date5 = new Date(2010, 8, 7, 20);
    	var dateExp = new Date(2010, 8, 7, 8);
    	var res = subtract(date5, 12, 'hours');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date6 = new Date(2011, 8, 8, 17, 45);
    	var dateExp = new Date(2011, 8, 8, 17, 12);
    	var res = subtract(date6, 33, 'minutes');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date7 = new Date(2012, 8, 9, 16, 30, 55);
    	var dateExp = new Date(2012, 8, 9, 16, 30, 11);
    	var res = subtract(date7, 44, 'seconds');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 729);
    	var dateExp = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = subtract(date8, 721, 'milliseconds');
    	expect(res).toEqual(dateExp);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = subtract(date8, 721, 'milliseconds1');
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = subtract(date8, true, 'milliseconds');
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var date8 = new Date(2013, 8, 10, 10, 0, 1, 8);
    	var res = subtract(date8, Infinity, 'milliseconds');
    	expect(res).toEqual(false);
    });
});

function deepReverse (arr){
	if(!Array.isArray(arr)){
		return false;
	}
	var len = arr.length-1;
	var flag = Array.from(arr);
	for(let k = 0; k < arr.length; k++){
		if(Array.isArray(arr[k])){
			flag[k] = true;
		}
	}
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < len; j++){
			if(Array.isArray(arr[j]) && flag[j] === true){
				arr[j] = deepReverse(arr[j]);
				flag[j] = false;
			}
			if(Array.isArray(arr[j+1]) && flag[j+1] === true){
				arr[j+1] = deepReverse(arr[j+1]);
				flag[j+1] = false;
			}
			var temp = 0;
			temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
		}
		len--;
	}
	return arr;
}

describe("Tests deepReverse function", function () {
	it("Should exists", function () {
    	var res = deepReverse([[1,2], [3,4]]);
    	expect(res).toEqual([[4,3], [2,1]]);
    });
    it("Should exists", function () {
    	var res = deepReverse([[12,11,10],[9,8,7], [6,5,4], [3,2,1]]);
    	expect(res).toEqual([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]]);
    });
    it("Should exists", function () {
    	var res = deepReverse([50, 51,[52, 53]]);
    	expect(res).toEqual([[53, 52], 51, 50]);
    });
    it("Should exists", function () {
    	var res = deepReverse([50, 51,[52, 53,[1,2,3,[5,6,7,[9,12]]]]]);
    	expect(res).toEqual([[[[[12,9],7,6,5],3,2,1],53,52],51,50]);
    });
    it("Should exists", function () {
    	var res = deepReverse([[9,8,7], [6,5,4], [3,2,1]]);
    	expect(res).toEqual([[1,2,3], [4,5,6], [7,8,9]]);
    });
    it("Should exists", function () {
    	var res = deepReverse([[false,true,undefined], [{},[],'foo'], [3,2,1]]);
    	expect(res).toEqual([[1,2,3], ['foo',[],{}], [undefined,true,false]]);
    });
});

function every (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var flag = true;
		for(let i = 0; i < arr.length; i++){
			var newArray = Array.from(arr);
			flag = callback(arr[i], i, newArray);
			if(!flag || isNaN(flag)){
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

describe("Tests every function", function () {
	it("Should exists", function () {
    	var res = every([1,2,3], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = every([1,2,3,6], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = every([1,2,3], function (element, index, array){
    		return element > index;
    	});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = every([1,2,3], function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = every([1,2,3], 25);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = every({a: [1,2,3]}, function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = every([1,2,3], function (){});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = every([1,2,3], function (){return 1;});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = every([1,2,3], function (){return NaN;});
    	expect(res).toEqual(false);
    });
});

function some (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var flag = true;
		for(let i = 0; i < arr.length; i++){
			var newArray = Array.from(arr);
			flag = callback(arr[i], i, newArray);
			if(flag){
				return true;
			}
		}
		return false;
	} else {
		return false;
	}
}

describe("Tests some function", function () {
	it("Should exists", function () {
    	var res = some([1,2,3], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = some([1,2,3,6], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = some([1,2,3], function (element, index, array){
    		return element > index;
    	});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = some([1,2,3], function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = some([1,2,3], 25);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = some({a: [1,2,3]}, function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = some([1,2,3], function (){});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = some([1,2,3], function (){return 1;});
    	expect(res).toEqual(true);
    });
    it("Should exists", function () {
    	var res = some([1,2,3], function (){return NaN;});
    	expect(res).toEqual(false);
    });
});

function find (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var flag = true;
		for(let i = 0; i < arr.length; i++){
			var newArray = Array.from(arr);
			flag = callback(arr[i], i, newArray);
			if(flag){
				return arr[i];
			}
		}
		return undefined;
	} else {
		return false;
	}
}

describe("Tests find function", function () {
	it("Should exists", function () {
    	var res = find([1,2,3], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual(1);
    });
    it("Should exists", function () {
    	var res = find([1,2,3,6], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual(1);
    });
    it("Should exists", function () {
    	var res = find([1,2,3], function (element, index, array){
    		return element > index;
    	});
    	expect(res).toEqual(1);
    });
    it("Should exists", function () {
    	var res = find([1,2,3], function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(1);
    });
    it("Should exists", function () {
    	var res = find([1,2,4], function (element, index, array){
    		return element > array.length;
    	});
    	expect(res).toEqual(4);
    });
    it("Should exists", function () {
    	var res = find([1,2,3], 25);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = find({a: [1,2,3]}, function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = find([1,2,3], function (){});
    	expect(res).toEqual(undefined);
    });
    it("Should exists", function () {
    	var res = find([1,2,3], function (){return 1;});
    	expect(res).toEqual(1);
    });
    it("Should exists", function () {
    	var res = find([1,2,3], function (){return NaN;});
    	expect(res).toEqual(undefined);
    });
});

function map (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var newArray = Array.from(arr);
		var resArray = Array.from(arr);
		for(let i = 0; i < arr.length; i++){
			resArray[i] = callback(arr[i], i, newArray);
		}
		return resArray;
	} else {
		return false;
	}
}

describe("Tests map function", function () {
	it("Should exists", function () {
    	var res = map([1,2,3], function (element, index, array){
    		return element + 5;
    	});
    	expect(res).toEqual([6,7,8]);
    });
    it("Should exists", function () {
    	var res = map([1,2,3,6], function (element, index, array){
    		return element - 5;
    	});
    	expect(res).toEqual([-4,-3,-2,1]);
    });
    it("Should exists", function () {
    	var res = map([1,2,3], function (element, index, array){
    		return element + index;
    	});
    	expect(res).toEqual([1,3,5]);
    });
    it("Should exists", function () {
    	var res = map([1,2,3], function (element, index, array){
    		return element + 3;
    	});
    	expect(res).toEqual([4,5,6]);
    });
    it("Should exists", function () {
    	var res = map([1,2,4], function (element, index, array){
    		return element + array.length;
    	});
    	expect(res).toEqual([4,5,7]);
    });
    it("Should exists", function () {
    	var res = map([1,2,3], 25);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = map({a: [1,2,3]}, function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = map([1,2,3], function (){});
    	expect(res).toEqual([undefined, undefined, undefined]);
    });
    it("Should exists", function () {
    	var res = map([1,2,3], function (){return 1;});
    	expect(res).toEqual([1,1,1]);
    });
    it("Should exists", function () {
    	var res = map([1,2,3], function (){return NaN;});
    	var expected = every(res,function(element, index, array){
    		return isNaN(element);
    	});
    	expect(expected).toEqual(true);
    });
});

function foreach (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var newArray = Array.from(arr);
		for(let i = 0; i < arr.length; i++){
			callback(arr[i], i, newArray);
		}
	} else {
		return false;
	}
}

describe("Tests foreach function", function () {
	it("Should exists", function () {
		let ary = [1,2,3];
		let result = 0;
    	var res = foreach(ary, function (element, index, array){
    		result += element;
    	});
    	expect(res).toEqual(undefined);
    	expect(result).toBe(6);
    });
    it("Should exists", function () {
		let ary = [1,2,3,4];
		let result = 0;
    	var res = foreach(ary, function (element, index, array){
    		result += element;
    	});
    	expect(res).toEqual(undefined);
    	expect(result).toBe(10);
    });
    it("Should exists", function () {
		let ary = [1,undefined,3];
		let result = 0;
    	var res = foreach(ary, function (element, index, array){
    		result += element;
    	});
    	expect(res).toEqual(undefined);
    	expect(result).toBeNaN();
    });
    it("Should exists", function () {
		let ary = [1,2,3];
		let result = 1;
    	var res = foreach(ary, function (element, index, array){
    		result *= element;
    	});
    	expect(res).toEqual(undefined);
    	expect(result).toBe(6);
    });
    it("Should exists", function () {
		let ary = [1,2,3,4];
		let result = 1;
    	var res = foreach(ary, function (element, index, array){
    		result *= element;
    	});
    	expect(res).toEqual(undefined);
    	expect(result).toBe(24);
    });
    it("Should exists", function () {
		let ary = [1,2,3,true,false];
		let result = 0;
    	var res = foreach(ary, function (element, index, array){
    		result += element;
    	});
    	expect(res).toEqual(undefined);
    	expect(result).toBe(7);
    });
});

function filter (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var newArray = Array.from(arr);
		var resArray = [];
		for(let i = 0; i < arr.length; i++){
			var flag = callback(arr[i], i, newArray);
			if(flag){
				resArray.push(arr[i]);
			}
		}
		return resArray;
	} else {
		return false;
	}
}

describe("Tests filter function", function () {
	it("Should exists", function () {
    	var res = filter([1,2,3], function (element, index, array){
    		return element < 5;
    	});
    	expect(res).toEqual([1,2,3]);
    });
    it("Should exists", function () {
    	var res = filter([1,2,3,6], function (element, index, array){
    		return element > 5;
    	});
    	expect(res).toEqual([6]);
    });
    it("Should exists", function () {
    	var res = filter([1,2,3], function (element, index, array){
    		return element > index;
    	});
    	expect(res).toEqual([1,2,3]);
    });
    it("Should exists", function () {
    	var res = filter([1,2,3], function (element, index, array){
    		return element < 3;
    	});
    	expect(res).toEqual([1,2]);
    });
    it("Should exists", function () {
    	var res = filter([1,2,4], function (element, index, array){
    		return element > array.length;
    	});
    	expect(res).toEqual([4]);
    });
    it("Should exists", function () {
    	var res = filter([1,2,3], 25);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = filter({a: [1,2,3]}, function (element, index, array){
    		return element < array.length;
    	});
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = filter([1,2,3], function (){});
    	expect(res).toEqual([]);
    });
    it("Should exists", function () {
    	var res = filter([1,2,3], function (){return 1;});
    	expect(res).toEqual([1,2,3]);
    });
});

function concat(arr){
	if(!Array.isArray(arr)){
		return false;
	}
	var args = Array.from(arguments);
	args.shift();
	for(let i = 0; i < args.length; i++){
		if(Array.isArray(args[i])){
			for(let j = 0; j < args[i].length; j++){
				arr.push(args[i][j]);
			}
		} else {
			arr.push(args[i]);
		}
	}
	return arr;
}

describe("Tests concat function", function (){
	it("Should exists", function () {
    	var res = concat([1,2,3], [4,5,6]);
    	expect(res).toEqual([1,2,3,4,5,6]);
    });
    it("Should exists", function () {
    	var res = concat([1,2,3], [4,5,6,[7]]);
    	expect(res).toEqual([1,2,3,4,5,6,[7]]);
    });
    it("Should exists", function () {
    	var res = concat([1,2,3], [4,5,6],[7,8,9]);
    	expect(res).toEqual([1,2,3,4,5,6,7,8,9]);
    });
    it("Should exists", function () {
    	var res = concat([1,2,3,[4]], [4,5,6,[7]]);
    	expect(res).toEqual([1,2,3,[4],4,5,6,[7]]);
    });
    it("Should exists", function () {
    	var res = concat([1,2,3], [4,5,6]);
    	expect(res).toEqual([1,2,3,4,5,6]);
    });
    it("Should exists", function () {
    	var res = concat([true,undefined,{}], [false,[],'tukituku']);
    	expect(res).toEqual([true, undefined, {}, false, [], 'tukituku']);
    });
    it("Should exists", function () {
    	var res = concat([1,2,3], 'holamundo');
    	expect(res).toEqual([1,2,3,'holamundo']);
    });
    it("Should exists", function () {
    	var res = concat([1,2,3], '[4,5,6]');
    	expect(res).toEqual([1,2,3,'[4,5,6]']);
    });
});

function encrypt(str, num){
	var res = '';
	if((typeof str === 'string' || str instanceof String) && (typeof num === 'number' || num instanceof Number)){
		if(!Number.isInteger(num) || num < 0){
			return false;
		}
		if(num === 0 || str.length === 0){
			return str;
		}
		if(num > 1){
			str = encrypt(str, num-1);
		}
		for(let i = 0; i < 2; i++){
			if(i === 0){
				for(let j = 1; j < str.length; j++){
					res += str[j];
					j++;
				}
			} else {
				for(let j = 0; j < str.length; j++){
					res += str[j];
					j++;
				}
			}
		}
		return res;
	} else {
		return false;
	}
}

describe("Tests encrypt function", function (){
	it("Should exists", function () {
    	var res = encrypt('This is a test!', 1);
    	expect(res).toEqual('hsi  etTi sats!');
    });
    it("Should exists", function () {
    	var res = encrypt('This is a test!', 2);
    	expect(res).toEqual('s eT ashi tist!');
    });
    it("Should exists", function () {
    	var res = encrypt('This is a test!', 4);
    	expect(res).toEqual('This is a test!');
    });
    it("Should exists", function () {
    	var res = encrypt('hat', 1);
    	expect(res).toEqual('aht');
    });
    it("Should exists", function () {
    	var res = encrypt('Hola, soy Goku', 1);
    	expect(res).toEqual('oa o ouHl,syGk');
    });
    it("Should exists", function () {
    	var res = encrypt('Hola, soy Goku!', 1);
    	expect(res).toEqual('oa o ouHl,syGk!');
    });
    it("Should exists", function () {
    	var res = encrypt('Hola, soy Goku', 0);
    	expect(res).toEqual('Hola, soy Goku');
    });
    it("Should exists", function () {
    	var res = encrypt('', 1000);
    	expect(res).toEqual('');
    });
    it("Should exists", function () {
    	var res = encrypt('Hola, soy Goku', Infinity);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = encrypt(['Hola, soy Goku'], 1);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = encrypt('Hola, soy Goku', NaN);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = encrypt(undefined, 1);
    	expect(res).toEqual(false);
    });
    it("Should exists", function () {
    	var res = encrypt('undefined', 1);
    	expect(res).toEqual('neieudfnd');
    });
});