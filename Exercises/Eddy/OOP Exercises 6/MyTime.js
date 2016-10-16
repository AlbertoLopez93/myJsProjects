/**
 * Created by jazielsama on 6/10/16.
 *
 */

"use strict";
/*jshint esversion: 6 */

function MyTime (hour, minute, second) {

	let len = arguments.length;
	let fHour;
	let fMinute;
	let fSecond;

	if (len === 3 || len === 0) {
		if (len === 3) {
			if (Number.isInteger (hour)) {
				fHour = hour;
			}
			if (Number.isInteger (minute)) {
				fMinute = minute;
			}
			if (Number.isInteger (second)) {
				fSecond = second;
			}

		} else {
			fHour = 0;
			fMinute = 0;
			fSecond = 0;
		}

		Object.defineProperty (this, "getHour", {
			value: function getHour () {
				return fHour;
			}, enumerable: true
		});

		Object.defineProperty (this, "getMinute", {
			value: function getMinute () {
				return fMinute;
			}, enumerable: true
		});

		Object.defineProperty (this, "getSecond", {
			value: function getSecond () {
				return fSecond;
			}, enumerable: true
		});

		Object.defineProperty (this, "setHour", {
			value: function setHour (newHour) {
				if (newHour < 24 && newHour >= 0 && Number.isInteger (newHour)) {
					fHour = newHour;
				}
			}, enumerable: true
		});

		Object.defineProperty (this, "setMinute", {
			value: function setMinute (newMinute) {
				if (newMinute < 60 && newMinute >= 0 && Number.isInteger (newMinute)) {
					fMinute = newMinute;
				}
			}, enumerable: true
		});

		Object.defineProperty (this, "setSecond", {

			value: function setSecond (newSecond) {
				if (newSecond < 60 && newSecond >= 0 && Number.isInteger (newSecond)) {
					fSecond = newSecond;
				}
			}, enumerable: true
		});

	}
}

Object.defineProperty (MyTime.prototype, "toString", {
	value: function toString () {
		let hour, minute, second;
		if (this.getHour () < 10) {
			hour = "0" + this.getHour ();
		} else {
			hour = this.getHour ();
		}
		if (this.getMinute () < 10) {
			minute = "0" + this.getMinute ();
		} else {
			minute = this.getMinute ();
		}
		if (this.getSecond () < 10) {
			second = "0" + this.getSecond ();
		} else {
			second = this.getSecond ();
		}
		return hour + ":" + minute + ":" + second;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "nextSecond", {
	value: function nextSecond () {
		if (this.getSecond () < 59) {
			this.setSecond (this.getSecond () + 1);
		} else {
			this.setSecond (0);
			if (this.getMinute () < 59) {
				this.setMinute (this.getMinute () + 1);
			} else {
				this.setMinute (0);
				if (this.getHour () < 23) {
					this.setHour (this.getHour () + 1);
				} else {
					this.setHour (0);
				}
			}
		}
		return this;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "nextMinute", {
	value: function nextSecond () {
		if (this.getMinute () < 59) {
			this.setMinute (this.getMinute () + 1);
		} else {
			this.setMinute (0);
			if (this.getHour () < 23) {
				this.setHour (this.getHour () + 1);
			} else {
				this.setHour (0);
			}
		}
		return this;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "nextHour", {
	value: function nextHour () {
		if (this.getHour () < 23) {
			this.setHour (this.getHour () + 1);
		} else {
			this.setHour (0);
		}
		return this;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "previousSecond", {
	value: function nextSecond () {
		if (this.getSecond () > 0) {
			this.setSecond (this.getSecond () - 1);
		} else {
			this.setSecond (59);
			if (this.getMinute () > 0) {
				this.setMinute (this.getMinute () - 1);
			} else {
				this.setMinute (59);
				if (this.getHour () > 0) {
					this.setHour (this.getHour () - 1);
				} else {
					this.setHour (23);
				}
			}
		}
		return this;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "previousMinute", {
	value: function previousMinute () {
		if (this.getMinute () > 0) {
			this.setMinute (this.getMinute () - 1);
		} else {
			this.setMinute (59);
			if (this.getHour () > 0) {
				this.setHour (this.getHour () - 1);
			} else {
				this.setHour (23);
			}
		}
		return this;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "previousHour", {
	value: function previousHour () {
		if (this.getHour () > 0) {
			this.setHour (this.getHour () - 1);
		} else {
			this.setHour (23);
		}
		return this;
	}, enumerable: true
});

Object.defineProperty (MyTime.prototype, "setTime", {
	value: function setTime (newHour, newMinute, newSecond) {
		let len = arguments.length;
		if (len === 3) {
			if (newHour < 24 && newHour >= 0 && Number.isInteger (newHour)) {
				if (newMinute < 60 && newMinute >= 0 && Number.isInteger (newMinute)) {
					if (newSecond < 60 && newSecond >= 0 && Number.isInteger (newSecond)) {
						this.setSecond (newSecond);
						this.setMinute (newMinute);
						this.setHour (newHour);
					}
				}
			}
		}
	},enumerable:true
});

module.exports = MyTime;
