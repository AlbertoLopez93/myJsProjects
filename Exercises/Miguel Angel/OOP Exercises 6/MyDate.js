"use strict"

function MyDate (year, month, day){
	let objYear;
	let objMonth;
	let objDay;
	let strMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
		if(!(Number.isInteger(year)) || !(Number.isInteger(month)) || !(Number.isInteger(day))){
			return false;
		}
		if(year < 1 || year > 9999){
			return false;
		}
		if(month < 1 || month > 12){
			return false;
		}
		if(day < 1 || day > 31){
			return false;
		} else if(daysInMonths[month-1] < day){
			if(!this.isLeapYear(year)){
				return false;
			} else if(month === 2 && day !== 29){
				return false;
			} else if(month !== 2){
				return false;
			}
		} 
		return true;
	}, enumerable: true, writable: false});	

	Object.defineProperty(this, "getDayOfWeek", {value: function getDayOfWeek(year, month, day){
		let a = Math.floor((14 - month) / 12);
		let y = year - a;
		let m = month + 12 * a - 2;
		let d = (day + y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((31*m)/12)) % 7;
		return d;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "setDate", {value: function setDate(year, month, day){
		let validDate = this.isValidDate(year, month, day);
		if(!validDate){
			console.log("Invalid year, month, or day!");
		} else {
			objYear = year;
			objMonth = month;
			objDay = day;
		}
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "getYear", {value: function getYear(){
		return objYear;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "getMonth", {value: function getMonth(){
		return objMonth;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "getDay", {value: function getDay(){
		return objDay;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "setYear", {value: function setYear(newYear){
		if((newYear >= 1 && newYear <= 9999) && (this.isValidDate(this.getYear(), this.getMonth(), this.getDay()))){
			objYear = newYear;
		} else {
			console.log("Invalid year!");
		}
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "setMonth", {value: function setMonth(newMonth){
		if((newMonth >= 1 && newMonth <= 12) && (this.isValidDate(this.getYear(), this.getMonth(), this.getDay()))){
			if(this.isLeapYear(this.getYear())){
				if(newMonth === 2){
					if (this.getDay() <= 29) {
						objMonth = newMonth;
					}
				} else {
					objMonth = newMonth;
				}
			} else if(newMonth === 2){
				if (this.getDay() <= 28) {
					objMonth = newMonth;
				}
			} else {
				objMonth = newMonth;
			}	
		} else {
			console.log("Invalid month!");
		}
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "setDay", {value: function setDay(newDay){
		if((this.isValidDate(this.getYear(), this.getMonth(), this.getDay()))){
			if(this.isValidDate(this.getYear(), this.getMonth(), this.getDay()) && this.getMonth() === 2){
				if(newDay <= 29){
					objDay = newDay;
				} else {
					console.log("Invalid month!");
				}
			} else if(newDay <= daysInMonths[this.getMonth()-1]){
				objDay = newDay;
			} else {
				console.log("Invalid month!");
			}
		} else {
			console.log("Invalid month!");
		}
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "toString", {value: function toString(){
		return strDays[this.getDayOfWeek(this.getYear(), this.getMonth(), this.getDay())] + " " + this.getDay() + " " + strMonths[this.getMonth() - 1] + " " + this.getYear();
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "nextDay", {value: function nextDay(){
		if(this.getDay() === daysInMonths[this.getMonth()-1]){
			if(this.getMonth() === 12){
				if(this.getYear() < 9999){
					this.setDay(1);
					this.setMonth(1);
					this.setYear(this.getYear() + 1);
				}
			} else if(this.isLeapYear(this.getYear())){
				if(this.getMonth() === 2){
					this.setDay(29);
				} else {
					this.setDay(1);
					this.setMonth(this.getMonth() + 1);
				}
			} else {
				this.setDay(1);
				this.setMonth(this.getMonth() + 1);
			}
		} else {
			this.setDay(this.getDay() + 1);
		}
		return this;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "previousDay", {value: function previousDay(){
		if(this.getDay() === 1){
			if(this.getMonth() === 1){
				if(this.getYear() > 1){
					this.setDay(daysInMonths[11]);
					this.setMonth(12);
					this.setYear(this.getYear() - 1);
				}
			} else {
				this.setDay(daysInMonths[this.getMonth()-2]);
				this.setMonth(this.getMonth() - 1);
			}
		} else {
			this.setDay(this.getDay() - 1);
		}
		return this;
	}, enumerable: true, writable: false})

	Object.defineProperty(this, "nextMonth", {value: function nextMonth(){
		if(this.getMonth() === 12){
			if(this.getYear() < 9999){
				if(this.getDay() > daysInMonths[this.getMonth()]){
					this.setDay(daysInMonths[this.getMonth()]);
				}
				this.setMonth(1);
				this.setYear(this.getYear() + 1);
			}
		} else if(this.getDay() > daysInMonths[this.getMonth()]){
			this.setDay(daysInMonths[this.getMonth()]);
		} else {
			this.setMonth(this.getMonth() + 1);
		}	
		return this;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "previousMonth", {value: function previousMonth(){
		if(this.getMonth() === 1){
			if(this.getYear() > 1){
				if(this.getDay() === 1){
					this.setDay(daysInMonths[this.getMonth() - 2])
				}
				this.setMonth(12);
				this.setYear(this.getYear() - 1);
			}
		} else if(this.getDay() > daysInMonths[this.getMonth()]){
			this.setDay(daysInMonths[this.getMonth()]);
		} else {
			this.setMonth(this.getMonth() - 1);
		}
		return this;
	}, enumerable: true, writable: false});

	Object.defineProperty(this, "nextYear", {value: function nextYear(){
		if(this.getYear() < 9999){
			if(this.isLeapYear(this.getYear())){
				if(this.getMonth() === 2){
					if(this.getDay() === 29){
						this.setDay(28);
					}
				}
			}
			this.setYear(this.getYear() + 1);
		}
		return this;
	}, enumerable: true, writable:false});

	Object.defineProperty(this, "previousYear", {value: function previousYear(){
		if(this.getYear() > 1){
			if(this.isLeapYear(this.getYear())){
				if(this.getMonth() === 2){
					if(this.getDay() === 29){
						this.setDay(28);
					}
				}
			}
			this.setYear(this.getYear() - 1);
		}
		return this;
	}});

	this.setDate(year, month, day);
}

module.exports = MyDate;