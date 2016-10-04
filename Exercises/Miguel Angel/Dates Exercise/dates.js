"use strict"

function isToday (date){
	var dateToday = new Date;
	var dayDate = date.getDate();
	var monthDate = date.getMonth();
	var yearDate = date.getFullYear();
	var dayDateToday = dateToday.getDate();
	var monthDateToday = dateToday.getMonth();
	var yearDateToday = dateToday.getFullYear();
	if(dayDate === dayDateToday && monthDate === monthDateToday && yearDate === yearDateToday){
		return true;
	} else {
		return false;
	}
}

function isBeerTime(date){
	var day = date.getDay();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var secs = date.getSeconds();
	var millisecs = date.getMilliseconds();
	switch (true){
		case day === 0:
			return true;
		case day === 1:
			if(hours > 20){
				return true;
			} else if(hours === 20){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 2:
			if(hours > 19){
				return true;
			} else if(hours === 19){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 3:
			if(hours > 18){
				return true;
			} else if(hours === 18){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 4:
			if(hours > 17){
				return true;
			} else if(hours === 17){
				if(minutes > 59){
					return true;
				} else if(minutes === 59){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 5:
			if(hours > 16){
				return true;
			} else if(hours === 16){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 6:
			if(hours > 10){
				return true;
			} else if(hours === 10){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
	}
}

function whenIsNextFriday13 (date){
	var flag = false;
	var day = date.getDay();
	var dayDate = date.getDate();
	if (dayDate === 13 && day === 5){
		date.setMonth((date.getMonth+1));
	} else if(dayDate < 13){
		date.setDate(13);
	} else {
		date.setDate(13);
		date.setMonth(date.getMonth()+1);
	}
	while (!flag){
		day = date.getDay();
		if(day === 5){
			flag = true;
		} else {
			date.setMonth(date.getMonth()+1);
		}
	}
	return date;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}