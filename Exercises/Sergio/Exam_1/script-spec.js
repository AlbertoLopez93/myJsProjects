///////// PRIMER EJERCICI  ///////
"use strict"
function add(date, quantity, key){
  let r;
  if(typeof(date)==="object"){
    if(typeof(quantity) !== "number" || typeof(key) !== "string"){
      return false;
    }
    console.log(date);
  }
  if( quantity <  0 ){
     return false;
   }
  if(key === 'year'){
    date.setHours(date.getHours()+(quantity*8760));
    return date
  }
  if(key === 'months'){
    date.setMonth(date.getMonth()+quantity);
    return date;
  }
  if(key === 'hours'){
    date.setHours(date.getHours()+quantity);
    return date;
  }
  if(key === 'minutes'){
    date.setMinutes(parseInt(date.getMinutes())+quantity);
    return date;
  }
  if(key === 'seconds'){
    date.setSeconds(date.getSeconds()+quantity);
    return date;
  }
  if(key === 'milliseconds'){
    date.setMilliseconds(date.getMilliseconds()+quantity);
    return date;
  }
  if(key === 'quarter'){
    date.setMonth(date.getMonth()+(quantity*3));
    console.log();
    return date;
  }
  return false;
}

console.log(add(new Date(2016, 8, 14, 1, 30),1,'year'));


////////////// SEGUNDO EJERCICIO ////////
"use strict"
function subtract(date, quantity, key){
  let r;
  if(typeof(date)==="object"){
    if(typeof(quantity) !== "number" || typeof(key) !== "string"){
      return false;
    }
  if( quantity <  0 ){ return false}

    console.log(date);
  }
  if(key === 'year'){
    date.setHours(date.getHours()-(quantity*8760));
    return date
  }
  if(key === 'months'){
    date.setMonth(date.getMonth()-quantity);
    return date;
  }
  if(key === 'hours'){
    date.setHours(date.getHours()-quantity);
    return date;
  }
  if(key === 'minutes'){
    date.setMinutes(parseInt(date.getMinutes())-quantity);
    return date;
  }
  if(key === 'seconds'){
    date.setSeconds(date.getSeconds()-quantity);
    return date;
  }
  if(key === 'milliseconds'){
    date.setMilliseconds(date.getMilliseconds()-quantity);
    return date;
  }
  if(key === 'quarter'){
    date.setMonth(date.getMonth()-(quantity*3));
    console.log();
    return date;
  }
  return false;

}

console.log(subtract(new Date(2016, 8, 14, 1, 30),5,'hours'));

////////////// TERCER EJERCICIO ////////



"use strict"
function deepReverse(arry){
  let r;
  let r1;
  let res = [];
  let resTotal = [];

  r =  Array.from(arry);

  for (let i = arry.length; i >= 0; i--) {
    if(Array.isArray(arry[i])){
      for (let ii = arry[i].length-1; ii >= 0; ii--) {
        r1 =  arry[i][ii];
        res.push(r1);
      }
    }
    resTotal.push([res]);
  }
  return resTotal;
}
console.log(deepReverse([[1,2],[3,4]]));
