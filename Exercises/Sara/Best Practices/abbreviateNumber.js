"use strict";
function abbreviateNumber(number){
    let numberstr="",numberarray=[];
    if(number<=999){
      numberstr=number+"";
    }

    if(number>999 && number<=9999){
      numberstr=number+"";
      numberarray=numberstr.split("");
      numberarray.length=numberarray.length+1;
      for(let i=numberarray.length-1;i>1;i--){
        numberarray[i]=numberarray[i-1];
      }
      numberarray[1]=",";
      numberstr=numberarray.join("");
    }

    if(number>9999 && number<=99999){
      numberstr=number/1000;
      numberstr=numberstr.toFixed(1);
      numberstr=numberstr+"";
      numberarray=numberstr.split("");
      numberarray.length=5;
      numberarray[4]="K";
      numberstr=numberarray.join("");
    }

    if(number>99999 && number<=999499){
      numberstr=number/1000;
      numberstr=number.toFixed(1);
      numberstr=numberstr+"";
      numberarray=numberstr.split("");
      numberarray.length=4;
      numberarray[3]="K";
      numberstr=numberarray.join("");
    }

    if(number>999499 && number<=1009999){
      numberstr="1.00M";
    }

    if(number>1009999 && number<=99999999){
      numberstr=number/1000000;
      numberstr=numberstr+"";
      numberarray=numberstr.split("");
      numberarray.length=5;
      numberarray[4]="M";
      numberstr=numberarray.join("");
    }

    if(number>99999999){
      numberstr=number/1000000;
      numberstr=numberstr+"";
      numberarray=numberstr.split("");
      numberarray.length=5;
      numberarray[numberarray.length-1]="M";
      numberstr=numberarray.join("");
    }

    if(number%1!==0){
      if(number>=10000){
        numberstr=number/1000
        numberstr=numberstr+"";
        numberarray=numberstr.split("");
        numberarray.length=5;
        numberarray[numberarray.length-1]="K";
        numberstr=numberarray.join("");
      }
      if(number>=1000000){
          numberstr=number/1000000;
          numberstr=numberstr.toFixed(1);
          numberstr=numberstr+"";
          numberarray=numberstr.split("");
          numberarray[numberarray.length]="M";
          numberstr=numberarray.join("");
        }
      if(number>=100000000){
        numberstr=number/1000000;
        console.log(numberstr);
        numberstr=numberstr+"";
        numberarray=numberstr.split("");
        console.log(numberstr);
        numberarray.length=4;
        console.log(numberarray.length);
        numberarray[numberarray.length-1]="M";
        console.log(numberstr);
        numberstr=numberarray.join("");
        console.log(numberstr);
      }
      if(number>=1000000000){
        numberstr=number/1000000;
        numberstr=numberstr+"";
        numberarray=numberstr.split("");
        numberarray.length=5;
        numberarray[numberarray.length-1]="M";
        numberstr=numberarray.join("");
      }
      if(number<10000){
        numberstr=parseInt(number)
        numberstr=numberstr+"";
        numberarray=numberstr.split("");
        numberstr=numberarray.join("");
      }

    }
    return numberstr;
}
console.log(abbreviateNumber(9384259803));
module.exports=abbreviateNumber;
