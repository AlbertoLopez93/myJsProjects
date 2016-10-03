function isToday(date) {
    let today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}

function isBeerTime(date) {
    let weekDay = date.getDay(),
        fullYear = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate();
    switch (weekDay) {
    case 0: // Sunday
        return true;
    case 1: // Monday
        return date >= new Date(fullYear, month, day, 20, 0, 0, 1);
    case 2: // Tuesday
        return date >= new Date(fullYear, month, day, 19, 0, 0, 1);
    case 3: // Wednesday
        return date >= new Date(fullYear, month, day, 18, 0, 0, 1);
    case 4: // Thursday
        return date > new Date(fullYear, month, day, 17, 59, 59, 999);
    case 5: // Friday
        return date >= new Date(fullYear, month, day, 16, 0, 0, 1);
    case 6: // Saturday
        return date >= new Date(fullYear, month, day, 10, 0, 0, 1);
    }
    return false;
}

function whenIsNextFriday13(date) {
    let next = new Date(date.getFullYear(), date.getMonth(), date.getDate()),
        miliseconds = 24 * 60 * 60 * 1000,
        day;
    while (true) {
        next = new Date(next.getTime() + miliseconds);
        day = next.getDate();
        if (day === 13 && next.getDay() === 5) {
            break;
        }
    }
    return next;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}