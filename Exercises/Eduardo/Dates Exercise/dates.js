function isToday(fecha) {
    if(fecha instanceof Date){
    var y=new Date()
    var año1=fecha.getFullYear()
    var mes1=fecha.getMonth()
    var dia1=fecha.getDate()
    console.log(año1);
    console.log(mes1);
    console.log(dia1);
    console.log(y);
    var año2=y.getFullYear()
    var mes2=y.getMonth()
    var dia2=y.getDate()
    console.log(año2);
    console.log(mes2);
    console.log(dia2);



        if((año1===año2)&&(mes1===mes2)&&(dia1===dia2))
        {
            return true
        }
        else{
            return false
        }

    }else{return false}
}

function isBeerTime(fec) {
    if(fec instanceof Date){
        dia=fec.getDay()
        hora=fec.getHours()
        min=fec.getMinutes()
        sec=fec.getSeconds()
        mil=fec.getMilliseconds();
        console.log(dia);
        console.log(hora);
        console.log(min);
        console.log("hay "+sec+"segundos");
        console.log(mil);
        switch (dia) {
            case 1:
            if((hora>=20)&&(min>=0)&&(sec>=0)&&(mil>0)){
            return true
            }else{return false}
            break;
            case 2:
            if((hora>=19)&&(min>=0)&&(sec>=0)&&(mil>0)){
            return true
            }else{return false}
            break;
            case 3:
            if((hora>=16)&&(min>=0)&&(sec>=0)&&(mil>0)){
            return true
            }else{return false}
            break;
            case 4:
            if(hora>=17&&min>=59&&sec>=0&&(mil>0)){
                 return true
            }else{return false}
            break;
            case 5:
            if((hora>=16)&&(min>=0)&&(sec>=0)&&(mil>0)){
                return true
            }else{return false}
            break;
            case 6:
            if(hora>=10&&min>=59&&sec>=0&&mil>0){
                return true
             }else{return false}
            break;
            case 0:
                return true
            break;
            default:

        }

    }else{return false}
}

function whenIsNextFriday13(fec) {
    next=Date()
    dia=fec.getDay()
    numero=fec.getDate()
    año=fec.getFullYear()
    mes=fec.getMonth()
    var cero=0
    var bandera=true
    var fechar=new Date()
    //console.log(mes);
    if(fec instanceof Date){

        console.log(fechar);
        while(bandera){
            fechar=new Date(año,mes,dia+cero)
            if(fechar.getDay()===5&&fechar.getDate()===13)
            {
                bandera=false
            }cero++;

        }
        return fechar;
    }else{return false}
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}