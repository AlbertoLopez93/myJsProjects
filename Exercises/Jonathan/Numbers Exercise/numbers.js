function calc(a,b,c){

var val="", result=0;


a=+a;
b=+b;


if((c==='*')||(c==='/')||(c==='+')||(c==='-')){
 if((Number.isInteger(a)===false)||(Number.isInteger(b)===false)){
  console.log("THERE IS A INVALID PARAMETER");
 }

 switch(c){
  case "+": result=a+b; break;
  case "-": result=a-b; break;
  case "*": result=a*b; break;
  case "/": result=a/b; break;
 }

 return result;
}else{
 return "INVALID PARAMETER";
}

}



function howBigNumberIs(a,b,c){

var ary=[], pow1=0, pow2=0, result=0;

a=+a;
b=+b;
c=+c;

if((Number.isInteger(a)===false)||(Number.isInteger(b)===false)||(Number.isInteger(c)===false)){
 console.log("THERE IS A INVALID PARAMETER");
 return NaN;
}

if((a>b)&&(a>c)){
 if(b>c){
  pow1=Math.pow(a,c);
  pow2=Math.pow(pow1,b);
 }else{
  pow1=Math.pow(a,b);
  pow2=Math.pow(pow1,c);
 }

 if(isFinite(pow2)){
  if(Number.isSafeInteger(pow2)){
   return "ok";
  }else{
   return "warning";
  }
 }else{
  return pow2;
  }
 }

if((b>a)&&(b>c)){
 if(b>c){
  pow1=Math.pow(b,c);
  pow2=Math.pow(pow1,a);
 }else{
  pow1=Math.pow(b,a);
  pow2=Math.pow(pow1,c);
 }

 if(isFinite(pow2)){
  if(Number.isSafeInteger(pow2)){
   return "ok";
  }else{
   return "warning";
  }
 }else{
  return pow2;
  } 
 }

if((c>a)&&(c>b)){
 if(c>a){
  pow1=Math.pow(c,b);
  pow2=Math.pow(pow1,a);
 }else{
  pow1=Math.pow(c,a);
  pow2=Math.pow(pow1,b);
 }
 
 if(isFinite(pow2)){
  if(Number.isSafeInteger(pow2)){
   return "ok";
  }else{
   return "warning";
  }
 }else{
  return pow2;
  } 
 }
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs
}
