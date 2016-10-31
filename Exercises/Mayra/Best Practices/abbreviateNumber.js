"use strict";
function abbreviateNumber(number){

    if (number>=0&&number<1000) {
        return number+"";
    }

    if (number>=1000&&number<10000) {
        number+="";
        let aux=number.split("");
        aux.reverse();
            for (let i = 2; i <= aux.length; i++) {
                let index=i+=1;
                    if (index%3===0) {
                    aux[i]=aux[i]+",";
                    }

            }
            aux.reverse();
            let auxiliar=aux.join("");
            return auxiliar;
    }

    if (number>=10000&&number<99999) {
        let auxiliar=number/1000;
        auxiliar=auxiliar.toFixed(1)+"K";
        return auxiliar;
    }
    if (number>=100000&&number<=999999) {
        if (number<999500) {
            let auxiliar=number/1000;
            auxiliar+="";
            auxiliar=auxiliar[0]+auxiliar[1]+auxiliar[2]+"K";
            return auxiliar;
        }
        if (number>=999500) {
            number=1000000;
            let auxiliar=number/1000000;
            auxiliar+="";
            auxiliar=auxiliar[0]+auxiliar[1]+auxiliar[2];
            auxiliar=Number.parseInt(auxiliar);
            console.log(auxiliar);
            auxiliar=auxiliar.toFixed(2)+"M";
            return auxiliar;
            }

    }
    if (number>=1000000&&number<=999999999) {
        if (number<999999500) {
            let auxiliar=number/1000000;
            auxiliar=auxiliar.toFixed(2)+"M";
            return auxiliar;
        }
        if (number>=999999500) {
            number=1000000000;
            let auxiliar=number/1000000000;
            auxiliar+="";
            auxiliar=auxiliar[0]+auxiliar[1]+auxiliar[2];
            auxiliar=Number.parseInt(auxiliar);
            console.log(auxiliar);
            auxiliar=auxiliar.toFixed(2)+"M";
            return auxiliar;
        }
    }
    if (number>=1000000000) {
        let auxiliar=number/1000000;
        auxiliar+="M";
        return auxiliar;
    }



    return number;
}

module.exports= abbreviateNumber;
