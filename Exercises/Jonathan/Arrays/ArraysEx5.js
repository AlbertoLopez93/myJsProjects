/****

timestamp: 1473110056000

****/


function morseEnc(str2){

  "use strict";
var str=["h","o","l","a"," ","m"];
var str1="jonathan montalvo varela";
var temp="", temp1="", temp2="";
  var ary=[], ary1=[], str4="", i=0, res=[], res1=[];


var nMorse = MORSE.map(function(obj){
    let nObj = {};
    nObj[obj.char] = obj.morse;
    return nObj;
  })

 if(typeof(str2)==="object"){
   var nObj="";
   ary = str2.map(function(obj){
     if(obj===" "){
           nObj=1;
           return nObj;
     }
     else{
        obj=obj.toUpperCase();
         return obj;
     }
   });
    res=ary.map(function(obj){
        if(obj!==1){
          temp=obj;
          temp1=MORSE.find(compM);
          return temp1.morse;
        }else{
            temp1="   ";
          return temp1;
        }
    });
    res.forEach(function(onj){
       temp2+=onj+" ";
    });
  //  console.log(temp2);
    return temp2;
 }

 if(typeof(str2)==="string"){
    str2=str2.toUpperCase();
    ary1= Array.from(str2);
    //console.log(ary1);
    ary = ary1.map(function(obj){
      let nObj='';
      if(obj===" "){
            nObj=1;
            return nObj;
      }
      else{
          obj=obj.toUpperCase();
          return obj;
      }
   });
   //console.log(ary);
   res1=ary.map(function(obj){
       if(obj!==1){
         temp=obj;
         temp1=MORSE.find(compM);
         return temp1.morse;
       }else{
           temp1="   ";
         return temp1;
       }
   });
   res1.forEach(function(onj){
      temp2+=onj+" ";
   });
   //console.log(temp2);
    return temp2;
 }

function compM(bar){
  "use strict";
let tempM="";
  if(temp===bar.char){
      tempM=bar.morse;
  }
  return tempM;
}
}

// console.log(morseEnc(str1));

