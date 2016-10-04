function NewDate(obj) {
        var day=obj.day,month=obj.month,year=obj.year;

        this.getDay=function getDay() {
            return day;
        }
        this.setDay=function setDay(newDay) {
            day=newDay;
            return this;
        }
        this.getMonth=function getMonth() {
            return month;
        }
        this.setMonth=function setMonth(newMonth) {
            month=newMonth;
            return this;
        }
        this.getYear=function getYear() {
            return year;
        }
        this.setYear=function setYear(newYear) {
            year=newYear;
            return this;
        }
        this.setYear=function setYear(newYear) {
            year=newYear;
            return this;
        }
        this.setDate=function setDate(newDay,newMonth,newYear) {
            this.setDay(newDay);
            this.setMonth(newMonth);
            this.setYear(newYear);
            return this;
        }
        this.toString=function toString() {

            var dayZero,monthZero;
            if(this.getDay() < 10){
                dayZero= "0" + this.getDay() + "/";
            } else {
		        dayZero=this.getDay() + "/";
	           }
	        if(this.getMonth() < 10){
		        monthZero= "0" + this.getMonth() + "/";
	        } else {
		        monthZero= this.getMonth() + "/";
	           }
            return dayZero+monthZero+this.getYear();
        }

}

module.exports = NewDate;
