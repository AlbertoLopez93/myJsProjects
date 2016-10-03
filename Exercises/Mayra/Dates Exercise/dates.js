function isToday(date) {
    if(typeof(date)!=="object"){
        return false;
    }
    var today=new Date;
    today=today.toDateString();
    date=date.toDateString();
    if(today===date){
        return true;
    }else{
        return false;
    }
}

function isBeerTime(date) {
    if(typeof(date)!=="object"){
        return false;
    }
    switch (date.getDay()) {
        case 0:
        return true;
            break;
        case 1:

        if(date.getHours()>=0&&date.getHours()<=20&&date.getMilliseconds()<=0){
            return false;
        }
        if(date.getHours()>=20&&date.getHours()<24&&date.getMilliseconds()>=0001){
            return true;
        }

            break;
        case 2:

        if(date.getHours()>=0&&date.getHours()<=19&&date.getMilliseconds()<=0){
            return false;
        }
        if(date.getHours()>=19&&date.getHours()<24&&date.getMilliseconds()>=0001){
            return true;
        }
        case 3:

        if(date.getHours()>=0&&date.getHours()<=18&&date.getMilliseconds()<=0){
            return false;
        }
        if(date.getHours()>=18&&date.getHours()<24&&date.getMilliseconds()>=0001){
            return true;
        }
        case 4:

        if(date.getHours()>=0&&date.getHours()<=17&&date.getMinutes()>59&&date.getMilliseconds()<=0){
            return false;
        }
        if(date.getHours()>=17&&date.getHours()<24&&date.getMinutes()<=59&&date.getMilliseconds()>=0001){
            return true;
        }
        case 5:

        if(date.getHours()>=0&&date.getHours()<=16&&date.getMilliseconds()<=0){
            return false;
        }
        if(date.getHours()>=16&&date.getHours()<24&&date.getMilliseconds()>=0001){
            return true;
        }

            break;
        case 5:

        if(date.getHours()>=0&&date.getHours()<=10&&date.getMilliseconds()<=0){
            return false;
        }
        if(date.getHours()>=1&&date.getHours()<24&&date.getMilliseconds()>=0001){
            return true;
        }

            break;
            var error ="no existe ese día"
        default:return error;

    }


}

function whenIsNextFriday13(date) {
    if(typeof(date)!=="object"){
        return false;
    }
    var aux,year=date.getFullYear(),mes=date.getMonth();
    if (date.getDate()<=13) {
        mes++;
    }

    for (var i = mes;; i++) {
        aux=new Date(year,i,13);
        if (aux.getDay()===5) {
            return aux;
        }
    }

}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}