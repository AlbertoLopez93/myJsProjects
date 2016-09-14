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


//////////////////////////////////
//////////////////////////////////
//////////////////////////////////////
//REGRESANDO DE LA COMIDA ////////
///////////////////////////////////
//////////////////////////REGRESANDO DE LA COMIDA/////////
///////////

/////////////////PRIMER EJERCICIO REGRESANDO DE COMER /////////////////

"use strict"
function every(arry, callback){
  if(Array.isArray(arry)&&(callback!=='string')||(callback!=='number')){
    let r;
    let bandera = true;
    for (var i = 0; i < arry.length; i++) {
      r  = callback(arry[i], i, arry);
      if(r!==true){
        bandera = false;
        return bandera;
      }
    }
    return false;
  }
  else{
    return false;
  }
}
console.log(every([1,6,3], function(element){
  return element < 5;
}));


////////////// SEGUNDO EJERCICIO DESPUES DE COMER ///////
///////////////////////////////////////////////////////
"use strict"
function some(arry, callback){
  if(Array.isArray(arry)&&(callback!=='string')||(callback!=='number')){
    let r;
    let bandera = false;
    let contador = 0;
    for (var i = 0; i < arry.length; i++) {
      r  = callback(arry[i], i, arry);
      if(r==true){
        contador++;
      }
      if(contador > 0){
        bandera = true;
      }
    }
    return bandera;
  }
  else{
    return false;
  }
}
console.log(
some([false, false, false, true], function(element, index, arry){
  if(element===true){ return true}
  if(element===false){ return false;
  }})
);
///////////////////////TERCER EJERCICIO ///////////
///////////////////////////////////////////
function find(arry, callback){
  if(Array.isArray(arry)&&(callback!=='string')||(callback!=='number')){
    let r;
    let bandera = true;
    for (var i = 0; i < arry.length; i++) {
      r  = callback(arry[i], i, arry);
      if(r===true){
        return arry[i];
      }
    }
    return r;
  }
  else{
    return false;
  }
}

console.log(find([1,4,3,5],function(element){
  return element === 4;
}
));

/////////////////////////////////////////////
//////////CUARTO EJERCICIO/////////////////////
////////////////////////////////////////////

function map(arry, callback){
  if(Array.isArray(arry)&&(callback!=='string')||(callback!=='number')){
    let r;
    let n = [];
    for (var i = 0; i < arry.length; i++) {
      r  = callback(arry[i], i, arry);
      n[n.length] = r;
    }
    return n;
  }else {
    return false;
  }
}
console.log(map([1,3,4],function(element){
  return element + 3 ;
}));

/////////////////////////////////////////////777
/////////QUINTO EJERCICIO//////////////////7777
///////////////////////////////////////////////
function forEach(arry, callback) {
    if(Array.isArray(arry)&&(callback!=='string')||(callback!=='number')){
  let r;
  for (var i = 0; i < arry.length; i++) {
    r  = callback(arry[i], i, arry);
    }
    return;
  }else {
    return false;
  }
  }
console.log(forEach([1,6,3], function(element){
  return element < 5;
}));

//////////////////////////////////////////////////////
/////////////////////SEXTO EJERCICIO/////////////7////
////////////////////////////////////////////////
"use strict"
function filter(arry, callback){
  if(Array.isArray(arry)&&(callback!=='string')||(callback!=='number')){
    let r;
    let r2 = [];
    let r1;
    for (let i = 0; i < arry.length; i++) {
      r  = callback(arry[i], i, arry);
      r1 = arry[i];
      if(r===true){
        r2.push(r1);
      }
    }
    return r2;
  }
  else{
    return false;
  }
}
console.log(filter([1,5,3,6,3,1,3,4,2,5], function(element){
  return element < 5;
}));

////////////////////////////////////////////////////////
//////////////////  SEPTIMO  ///////////////////////////
//////////////////////////////////////////////////////

"use strict"
function concat(arry){
  if(Array.isArray(arry)){

  let r = [];
  let r1;
  let keys;
  r1  = arguments;
  for(let i = 0; i < r1.length; i++){
    r= r.concat(r1[i]);
  }
  console.log(r.length);

  return r;

}else {
  return false;
}
}
console.log(concat([1,2,3],[4,5,6,[7]]));


//////////////////////////////////////////////
/////////////////OCTAVO EJERCICIO ////////////
//////////////////////////////////////////////

"use strict"
function encrypt(str, n){
  let str2 = "";
  for (var i = 0; i < n ; i++) {
    str2+=str;

  }
  let contador = 0;
  let palabra = "";
  console.log(str2);
    for (let i = 1; i < str2.length ; i++) {
    palabra += str2.slice(i,i+1)
      console.log(palabra);
    }

return palabra;

}
console.log(encrypt("sergio River A",2));
