/**
 * Created by jazielsama on 30/09/16.
 */

function NewTime (data) {
	if (Number.isInteger (data.hour)) {
		var hour = data.hour;
	}
	if (Number.isInteger (data.minute)) {
		var minute = data.minute;
	}
	if (Number.isInteger (data.second)) {
		var second = data.second;
	}

	this.getHour = function getHour () {
		return hour;
	};

	this.getMinute = function getMinute () {
		return minute;
	};

	this.getSecond = function getSecond () {
		return second;
	};

	this.setHour = function setHour (newtHour) {
		if (Number.isInteger (newtHour)) {
			hour = newtHour;
		}
	};

	this.setMinute = function setMinute (newMinute) {
		if (Number.isInteger (newMinute)) {
			minute = newMinute;
		}
	};

	this.setSecond = function setSecond (newSecond) {
		if (Number.isInteger (newSecond)) {
			second = newSecond;
		}
	};

}

NewTime.prototype.setTime = function setTime (hour, minute, second) {

	this.setHour (hour);
	this.setMinute (minute);
	this.setSecond (second);
};

NewTime.prototype.toString = function toString () {

	if (this.getHour () < 10) {
		hour = '0' + this.getHour ();
	} else {
		hour = this.getHour ();
	}
	if (this.getMinute () < 10) {
		minute = '0' + this.getMinute ();
	} else {
		minute = this.getMinute ();
	}
	if (this.getSecond () < 10) {
		second = '0' + this.getSecond ();
	} else {
		second = this.getSecond ();
	}

	return hour + ':' + minute + ':' + second;
};

NewTime.prototype.nextSecond = function nextSecond () {
	if (this.getSecond () < 59) {
		this.setSecond (this.getSecond () + 1);
	} else {
		this.setSecond (0);
		if (this.getMinute() < 59) {
			this.setMinute (this.getMinute () + 1)
		} else {
			this.setMinute (0);
			if (this.getHour () < 23) {
				this.setHour (this.getHour () + 1)
			} else {
				this.setHour (0);
			}
		}
	}
	return this;
};

NewTime.prototype.previousSecond = function previousSecond () {
	if (this.getSecond () > 0) {
		this.setSecond (this.getSecond () - 1);
	} else {
		this.setSecond (59);
		if (this.getMinute() > 0) {
			this.setMinute (this.getMinute () - 1)
		} else {
			this.setMinute (59);
			if (this.getHour () > 0) {
				this.setHour (this.getHour () - 1)
			} else {
				this.setHour (23);
			}
		}
	}
	return this;
};
module.exports = NewTime;

