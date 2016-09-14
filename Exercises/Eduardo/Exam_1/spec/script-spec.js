function subtract(date,quantity,key) {
    if(!date instanceof Date||typeof quantity!=="number"||typeof key!=="string"){
        return false
    }else{
        if(key==="years"||key==="quarters"||key==="months"||key==="days"||key==="hours"||key==="minutes"||key==="seconds"||key==="milliseconds"){
        if(quantity<0){return false}
        if(!Number.isInteger(quantity)){return false}
        //let fechaderetorno=Date()

        var año=date.getFullYear()
        var mes=date.getMonth()
        var dia=date.getDate()
        var hora=date.getHours()
        var minuto=date.getMinutes()
        var segundo=date.getSeconds()
        var mili=date.getMilliseconds()
        //console.log(quarter);

        switch (key) {
            case "years":
            date=new Date(año-quantity,mes,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "quarters":
            date=new Date(año,mes-quantity-quantity-quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "months":
            date=new Date(año,mes-quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "days":
            date=new Date(año,mes,dia-quantity,hora,minuto,segundo,mili)
            return date
            break;
            case "hours":
            date=new Date(año,mes,dia,hora-quantity,minuto,segundo,mili)
            return date
            break;
            case "minutes":
            date=new Date(año,mes,dia,hora,minuto-quantity,segundo,mili)
            console.log(typeof fechaderetorno);
            return date
            break;
            case "seconds":
            date=new Date(año,mes,dia,hora,minuto,segundo-quantity,mili)
            return date
            break;
            case "milliseconds":
            date=new Date(año,mes,dia,hora,minuto,segundo,mili-quantity)
            return date
            break;
            default:

        }
    }else{return false}

    }
}

function add(date,quantity,key) {
    if(!date instanceof Date||typeof quantity!=="number"||typeof key!=="string"){
        return false
    }else{
        if(key==="years"||key==="quarters"||key==="months"||key==="days"||key==="hours"||key==="minutes"||key==="seconds"||key==="milliseconds"){
        if(quantity<0){return false}
        if(!Number.isInteger(quantity)){return false}
        let fechaderetorno=Date()

        var año=date.getFullYear()
        var mes=date.getMonth()
        var dia=date.getDate()
        var hora=date.getHours()
        var minuto=date.getMinutes()
        var segundo=date.getSeconds()
        var mili=date.getMilliseconds()
        //console.log(quarter);

        switch (key) {
            case "years":
            date=new Date(año+quantity,mes,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "quarters":
            date=new Date(año,mes+quantity+quantity+quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "months":
            date=new Date(año,mes+quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "days":
            date=new Date(año,mes,dia+quantity,hora,minuto,segundo,mili)
            return date
            break;
            case "hours":
            date=new Date(año,mes,dia,hora+quantity,minuto,segundo,mili)
            return date
            break;
            case "minutes":
            date=new Date(año,mes,dia,hora,minuto+quantity,segundo,mili)
            return date
            break;
            case "seconds":
            date=new Date(año,mes,dia,hora,minuto,segundo+quantity,mili)
            return date
            break;
            case "milliseconds":
            date=new Date(año,mes,dia,hora,minuto,segundo,mili+quantity)
            return date
            break;
            default:

        }
    }else{return false}

    }
}



function deepReverse(ary) {
    let aryr=[]
    if(typeof ary ==="object"&&ary instanceof Array){
            for (let i = 0; i < ary.length; i++) {
                //console.log(ary[i]);
                for (let j = ary[i].length; j < 0; j--) {
                    ary[i][j]=ary[j][i]
                }
                //console.log("que pedirri");
            }
            return ary;
    }else{
        return false
    }
}
