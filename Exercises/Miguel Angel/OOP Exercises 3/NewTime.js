"use strict"

function NewTime (data){
	let hour = data.hour;
	let minute = data.minute;
	let second = data.second;
	this.getHour = function getHour(){
		return hour;
	};
	this.getMinute = function getMinute(){
		return minute;
	};
	this.getSecond = function getSecond(){
		return second;
	};
	this.setHour = function setHour(newHour){
		hour = newHour;
	};
	this.setMinute = function setMinute(newMinute){
		minute = newMinute;
	};
	this.setSecond = function setSecond(newSecond){
		second = newSecond;
	};
}

NewTime.prototype.setTime = function setTime(newHour, newMinute, newSecond){
	this.setHour(newHour);
	this.setMinute(newMinute);
	this.setSecond(newSecond);
};

NewTime.prototype.toString = function toString(){
	let hour = this.getHour();
	let minute = this.getMinute();
	let second = this.getSecond();
	hour = (hour < 10) ? "0" + hour : "" + hour;
	minute = (minute < 10) ? "0" + minute : "" + minute;
	second = (second < 10) ? "0" + second : "" + second;
	return hour + ":" + minute + ":" + second; 
};

NewTime.prototype.nextSecond = function nextSecond(){
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
};

NewTime.prototype.previousSecond = function previousSecond(){
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
};

module.exports = NewTime;