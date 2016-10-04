function NewDate(data){
    var day = data.day;
    this.getDay = function(){
        return day;
    }
    var month = data.month;
    this.getMonth = function(){
        return month;
    }
    var year = data.year;
    this.getYear = function(){
        return year;
    }
    this.setDay = function(_day){
        return day = _day;
    }//:void sets a new day for the newDate instance.
    this.setMonth = function(_month){
        return month = _month;
    }//:void sets a new month for the newDate instance.
    this.setYear = function(_year){
        return year = _year;
    }//:void sets a new year for the newDate instance.
}
NewDate.prototype.setDate = function(_day, _month, _year){
    return this.setDay(_day), this.setMonth(_month), this.setYear(_year);
}
NewDate.prototype.toString = function(){
    var day = this.getDay().toString();
    month = this.getMonth();
    if (day < 10 && month < 10 ) {
        return "0" + day + "/0" + month + "/" + this.getYear();
    }
    // if (month < 10) {
    //     return day + "/0" + month + "/" + this.getYear();
    // }
    return day + "/" + month + "/" + this.getYear();
}//:string returns a string that will follow
//the pattern: “dd/mm/yyyy”,
//with leading zeros (if day is 1, month is 5 and year is 2016,
//then the string should be: “01/05/2016”).

var date = new NewDate({day:28,month:9, year:2016});
console.log(date.toString());
date.setDate(10,10,1993);
console.log(date.toString());

module.exports = NewDate;
