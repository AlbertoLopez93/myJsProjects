"use strict"

function MyDate (year, month, day){

	let strMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "ThursdayLe", "Friday", "Saturday"];
	let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	Object.defineProperty(this, "isLeapYear", {value: function isLeapYear (year){
		if(year % 4 === 0){
			if(year % 100 === 0){
				if(year % 400 === 0){
					return true
				} else {
					return false;
				}
			} else {
				return true;
			}
		} else {
			return false;
		}
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "isValidDate", {value: function isValidDate (year, month, day){
		if(year < 1 || year > 9999){
			return false;
		}
		if(month < 1 || month > 12){
			return false;
		}
		if(day < 1 || day > 31){
			return false;
		} else if(daysInMonths[month-1] < day){
			return false;
		} else if(month === 2 && day === 29){
			if(!this.isLeapYear(year)){
				return false
			}
		}
		return true;
	}, enumerable: true, writable: false});	

	Object.defineProperty(this, "getDayOfWeek", {value: function getDayOfWeek(year, month, day){
		
	}});
}

module.exports = MyDate;