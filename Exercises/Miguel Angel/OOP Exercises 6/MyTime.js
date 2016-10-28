"use strict"

function MyTime (objHour, objMinute, objSecond) {
	let hour = objHour || 0;
	let minute = objMinute || 0;
	let second = objSecond || 0;
	Object.defineProperty(this, "getHour", {value: function getHour(){
		return hour;
	}, enumerable: true, writable: false});
	Object.defineProperty(this, "setHour", {value: function setHour(newHour){
		newHour >= 0 && newHour <= 23 ? hour = newHour : console.log("Invalid hour");
	}, enumerable: true, writable: false});
	Object.defineProperty(this, "getMinute", {value: function getMinute(){
		return minute;
	}, enumerable: true, writable: false});
	Object.defineProperty(this, "setMinute", {value: function setMinute(newMinute){
		newMinute >= 0 && newMinute <= 59 ? minute = newMinute : console.log("Invalid minute");
	}, enumerable: true, writable: false});
	Object.defineProperty(this, "getSecond", {value: function getSecond(){
		return second;
	}, enumerable: true, writable: false});
	Object.defineProperty(this, "setSecond", {value: function setSecond(newSecond){
		newSecond >= 0 && newSecond <= 59 ? second = newSecond : console.log("Invalid second");
	}, enumerable: true, writable: false});
}

Object.defineProperty(MyTime.prototype, "setTime", {value: function setTime (newHour, newMinute, newSecond){
	if((newHour >= 0 && newHour <= 23) && (newMinute >= 0 && newMinute <= 59) && (newSecond >= 0 && newSecond <= 59)){
		this.setHour(newHour);
		this.setMinute(newMinute);
		this.setSecond(newSecond);
	} else {
		console.log("Invalid, hour, minute or second");
	}
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "toString", {value: function toString (){
	let hour = this.getHour();
	let minute = this.getMinute();
	let second = this.getSecond();
	hour = (hour < 10) ? "0" + hour : "" + hour;
	minute = (minute < 10) ? "0" + minute : "" + minute;
	second = (second < 10) ? "0" + second : "" + second;
	return hour + ":" + minute + ":" + second;
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "nextSecond", {value: function nextSecond(){
	if(this.getSecond() === 59){
		this.setSecond(0);
		if(this.getMinute() === 59){
			this.setMinute(0);
			if(this.getHour() === 23){
				this.setHour(0);
			} else {
				this.setHour(this.getHour() + 1);
			}
		} else {
			this.setMinute(this.getMinute() + 1);
		}
	} else {
		this.setSecond(this.getSecond() + 1);
	}
	return this;
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "previousSecond", {value: function previousSecond(){
	if(this.getSecond() === 0){
		this.setSecond(59);
		if(this.getMinute() === 0){
			this.setMinute(59);
			if(this.getHour() === 0){
				this.setHour(23);
			} else {
				this.setHour(this.getHour() - 1);
			}
		} else {
			this.setMinute(this.getMinute() - 1);
		}
	} else {
		this.setSecond(this.getSecond() - 1);
	}
	return this;
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "nextMinute", {value: function nextMinute(){
	if(this.getMinute() === 59){
		this.setMinute(0);
		if(this.getHour() === 23){
			this.setHour(0);
		} else {
			this.setHour(this.getHour() + 1);
		}
	} else {
		this.setMinute(this.getMinute() + 1);
	}
	return this;
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "previousMinute", {value: function previousMinute(){
	if(this.getMinute() === 0){
		this.setMinute(59);
		if(this.getHour() === 0){
			this.setHour(23);
		} else {
			this.setHour(this.getHour() - 1);
		}
	} else {
		this.setMinute(this.getMinute() - 1);
	}
	return this;
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "nextHour", {value: function nextHour(){
	if(this.getHour() === 23){
		this.setHour(0);
	} else {
		this.setHour(this.getHour() + 1);
	}
	return this;
}, enumerable: true, writable: false});

Object.defineProperty(MyTime.prototype, "previousHour", {value: function previousHour(){
	if(this.getHour() === 0){
		this.setHour(23);
	} else {
		this.setHour(this.getHour() - 1);
	}
	return this;
}, enumerable: true, writable: false});

module.exports = MyTime;