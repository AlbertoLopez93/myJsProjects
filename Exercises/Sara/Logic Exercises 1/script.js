"use strict";

function isAnagram(str1,str2){
  var astr1=[],astr2=[],c=0;
  if((str1.length!==str2.length) || typeof str1!=='string' || typeof str2!=='string'){
    return false;
  }
  else{
    astr1=isUpperCase(str1);
    astr2=isUpperCase(str2);
    astr1=astr1.sort();
    astr2=astr2.sort();
  }
  for(i=0;i<astr1.length;i++){
    if(astr1[i]===astr2[i]){
      c++;
    }
  }
  if(c===astr1.length){
    return true;
  }
  else{
    return false;
  }

  function isUpperCase(str){
    a=str.split("");
    may=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    min=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(j=0;j<a.length;j++){
      for(var i=0;i<min.length;i++){
        if(a[j]===may[i]){
          a[j]=min[i];
        }
      }
    }
    return a;
  }

}

function rounded(num){
  if(isNaN(num)===true || num===null || typeof num==='boolean'){
    return false;
  }
  if(num===Infinity){
    return Infinity;
  }
  if(num===-Infinity){
    return -Infinity;
  }
  function redondea(num){
    num=num*1000;
    str=num+"a",ent="",dec1="",dec2="";
    var punto,num2,final;
      for(i=0;i<str.length-1;i++){
        if(str[i]==="."){
          punto=i;
          break;
        }
        else{
          ent=ent+str[i];
        }
      }
      ent=parseInt(ent);
      dec1=str[punto+1];
      if(dec1>=5){
        ent++;
        dec1="0"
      }
      num2=ent;
      num2=num2*10;
      num2=num2/100;
      str=num2;
      str=str+"a";
      ent="";
      for(i=0;i<str.length-1;i++){
        if(str[i]==="."){
          punto=i;
          break;
        }
        else{
          ent=ent+str[i];
        }
      }
      ent=parseInt(ent);
      dec2=str[punto+1];
      if(dec2>=5){
        ent++;
        dec2="0"
      }
      else {
        dec2=0;
      }
      ent=parseInt(ent);
      dec2=parseInt(dec2);
      final=ent+"."+dec2;
      final=parseFloat(final);
      final=final/100;
      return final;
    }
  if(num>=0){
     final=redondea(num);
  }
  else{
    num=num*-1;
    final=redondea(num);
    final=final*-1;
  }
  return final;
}

function convertSpace(str){
  if(typeof str!=='string'){
    return false;
  }
  var a=str.split("");
  for(var i=0;i<a.length;i++){
    if(a[i]===" "){
      a[i]="%20"
    }
  }
  a=a.join("");
  return a;
}

function getTotal(days){
  if(Number.isInteger(days)===false){
    return false;
  }
  var tot=0;
  if(days>=7){
    tot=(days*40)-50;
  }
  else{
    if(days>=3){
      tot=(days*40)-20;
    }
    else{
      tot=days*40;
    }
  }
  return tot;
}

module.exports = {
    isAnagram: isAnagram,
    convertSpaces: convertSpace,
    rounded: rounded,
    getTotal: getTotal,
    squareSum: function() {},
    isRotation: function() {},
    convertMatrix: function() {},
    rotate: function() {}
};
