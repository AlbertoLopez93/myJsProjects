function isToday(date){
    var date = date;
    if(!date instanceof Date || typeof date !== "object" ){
        return false;
    }
    date = date.toLocaleDateString();
    var today = new Date;
    today = today.toLocaleDateString();
    if(today === date){
        return true;
    }
    else{
        return false;
    }
}

function isBeerTime(time){
    var time = time;
    if(!time instanceof Date || typeof time !== "object" ){
        return false;
    }
    var day = time.getDay();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    seconds = seconds.toString();
    if(seconds.length === 1){
        seconds = "0" + seconds;
    }
    var mill = time.getMilliseconds();
    mill = mill.toString();
    if(mill.length == 1){
        mill = "00" + mill;
    }
    if( mill.length == 2){
        mill = "0" + mill;
    }
    var fullHour = "";
    fullHour += hours +""+ minutes +""+seconds+""+mill;
    fullHour = Number(fullHour);
    //console.log(fullHour);
    switch (day) {
        case 0://sunday
            return true;
            break;
        case 1://Monday
            if(fullHour > 200000000 && fullHour <= 235959999){
                return true;
            }else{
                return false;
            }
            break;
        case 2://Tuesday
            if(fullHour > 190000000 && fullHour <= 235959999){
                return true;
            }else{
                return false;
            }
            break;
        case 3://Wednesday
            if(fullHour > 180000000 && fullHour <= 235959999){
                return true;
            }else{
                return false;
            }
            break;
        case 4://Thursday
            if(fullHour > 175900000 && fullHour <= 235959999){
                return true;
            }else{
                return false;
            }
            break;
        case 5://Friday
            if(fullHour > 160000000 && fullHour <= 235959999){
                return true;
            }else{
                return false;
            }
            break;
        case 6://Saturday
            if(fullHour > 100000000 && fullHour <= 235959999){
                return true;
            }else{
                return false;
            }
            break;
        default:
            return false;
            break;
    }
}

function whenIsNextFriday13(date){
    var x = date.toLocaleDateString();
    //console.log(x );
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    year = Number(year);
    month = Number(month);
    var look = 13
    //console.log(day +" " +  month +" "+ year);
    var search;
    var wDay;

    for(var i=year; ; i++){
        a:for(var j = month+1; j < 12; j++){
            search = new Date(j+"-"+look+"-"+i);
            //console.log(search.toLocaleDateString());
            wDay = search.getDay();
            if(x == search.toLocaleDateString()){
                continue a;
            }
            if(wDay == "5"){

                return search;
            }
            if(j == 11){
                month=0;
            }
        }

    }
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}