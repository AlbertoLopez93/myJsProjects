function isToday (date) {
	if (!isNaN (Date.parse (date))) {
		var todayHere = new Date ();
		var dateThere = new Date (date);
		if (todayHere.getUTCFullYear () === dateThere.getUTCFullYear ()) {
			if (todayHere.getUTCMonth () === dateThere.getUTCMonth ()) {
				if (todayHere.getUTCDate () === dateThere.getUTCDate ()) {
					return true;
				}
			}
		}
		return false;
	}
	return false;
}

function isBeerTime (date) {
	var check = new Date (date);
	var mon = [20, 0, 0, 0, 'Mon'];
	var tue = [19, 0, 0, 0, 'Tue'];
	var wed = [18, 0, 0, 0, 'Wed'];
	var thu = [17, 59, 0, 0, 'Thu'];
	var fri = [16, 0, 0, 0, 'Fri'];
	var sat = [10, 0, 0, 0, 'Sat'];
	var sun = [0, 0, 0, 0, 'Sun'];
	var week = [mon, tue, wed, thu, fri, sat, sun];
	check = check.toString ().split (' ');
	console.log (check[0]);
	for (var i = 0; i < week.length; i++) {
		if (check[0] === week[i][4]) {
			if (date.getHours () >= week[i][0]) {
				if (date.getMinutes () >= week[i][1]) {
					if (date.getSeconds () >= week[i][2]) {
						if (date.getMilliseconds () > 0) {
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime
}