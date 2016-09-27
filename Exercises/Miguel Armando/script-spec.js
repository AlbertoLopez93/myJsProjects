"use strict"
function add(fecha,num,str){
if (typeof num === 'number' || num instanceof Number  ){
  if (typeof str === 'string' || str instanceof String){

  var fecha = new Date();

  var annio = fecha.setFullYear();
  var mes = fecha.setMonth();
  var dia = fecha.setDate();
  var hora = fecha.setHours();
  var min = fecha.setMinutes();
  var seg = fecha.setSeconds();
  var mil = fecha.setMilliseconds();

  if (typeof(fecha) === "object") {
    if(fecha instanceof Date){
      return fecha;
      if (str === "years") {
          return annio;
      } else if (str === "months") {
        return mes;
      }else if (str === "days") {
        return dia;
      }else if (str === "hours") {
        return hora;
      }else if (str === "minutes") {
        return min;
      } else if (str === "seconds") {
        return seg;
      }else if (str === "milliseconds") {
        return mil;
      }

    }

  }
  }
}
}
console.log(add(new Date(2016, 8, 28, 14, 39), 2, "minutes").toString());


function substract(fecha,num,str){
  if (typeof num === 'number' || num instanceof Number  ){
    if (typeof str === 'string' || str instanceof String){

  var fecha = new Date();
  var annio = fecha.setFullYear();
  var mes = fecha.setMonth();
  var dia = fecha.setDate();
  var hora = fecha.setHours();
  var min = fecha.setMinutes();
  var seg = fecha.setSeconds();
  var mil = fecha.setMilliseconds();

  if (typeof(fecha) === "object") {
    if(fecha instanceof Date){
      return fecha;
    }
  }
}
}
}

console.log(add(new Date(2016, 8, 28, 14, 39), 2, "minutes").toString());
