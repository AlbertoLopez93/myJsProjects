function isToday(date) {
    let newDate = new Date();
    if(
        newDate.getDate() === date.getDate()
        && newDate.getMonth() === date.getMonth()
        && newDate.getFullYear() === date.getFullYear()
    ) {
        return true;
    } else {
        return false;
    }
}

function isBeerTime(date) {
    let newDate = new Date(date.getTime())
    switch(date.getDay()) {
        case 0:
            return true;
        case 1:
            newDate.setHours(20);
            newDate.setMinutes(0);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
            if(date > newDate) {
                return true;
            } else {
                return false;
            }
        case 2:
            newDate.setHours(19);
            newDate.setMinutes(0);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
            if(date > newDate) {
                return true;
            } else {
                return false;
            }
        case 3:
            newDate.setHours(18);
            newDate.setMinutes(0);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
            if(date > newDate) {
                return true;
            } else {
                return false;
            }
        case 4:
            newDate.setHours(17);
            newDate.setMinutes(59);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
            if(date > newDate) {
                return true;
            } else {
                return false;
            }
        case 5:
            newDate.setHours(16);
            newDate.setMinutes(0);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
            if(date > newDate) {
                return true;
            } else {
                return false;
            }
        case 6:
            newDate.setHours(10);
            newDate.setMinutes(0);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
            if(date > newDate) {
                return true;
            } else {
                return false;
            }
    }
}

function whenIsNextFriday13(date) {
    let newDate = new Date(date.getTime());
    console.log()
    if(newDate.getDate() < 13) {
        newDate.setDate(13);
    } else {
        if(newDate.getMonth() === 11) {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }
        newDate.setDate(13);
    }

    while(newDate.getDay() !== 5) {
        if(newDate.getMonth() === 11) {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }
    }
    return newDate;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}