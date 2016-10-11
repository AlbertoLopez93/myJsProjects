"use strict";
function verifica(value) {
  let abreviatura, valueToArray = "", size, float = false;

  if (typeof(value) === "number") {

    if ((value % 1) !== 0) {
      value = "" + Math.round(value);
      valueToArray = value.split(".");
      value = parseInt(valueToArray[0]);
      valueToArray = "";
      console.log(value);
      float = true;
    }

    if (value <= 999) {
      abreviatura = "" + value;
    }

    if ((value >= 1000) && (value <= 9999)) {
      valueToArray += value;
      valueToArray =  valueToArray.split("");
      size         = (float) ? valueToArray.indexOf(".") : valueToArray.length -1;
      console.log(valueToArray);
      abreviatura  =  valueToArray.slice(0, size - 2).join("") + "," + valueToArray.slice(-3).join("");
    }

    if ((value >= 10000) && (value <= 99999)) {
      value        =  value / 100;
      value        =  Math.round(value);
      value        =  value * 100;
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 2).join("") + "." + valueToArray.slice(size - 2, size - 1).join("") + "K";
    }

    if ((value >= 100000) && (value <= 999499)) {
      value        =  value / 1000;
      value        =  Math.round(value);
      value        =  value * 1000;
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 2).join("") + "K";
    }

    if ((value >= 999500) && (value <= 1009999)) {
      abreviatura  =  "1.00M";
    }

    if ((value >= 1010000) && (value <= 999999999)) {
      if (value > 99999999) {
        console.log("entre");
        console.log(value);
        value        =  value / 1000000;
        value        =  Math.round(value);
        value        =  value * 1000000;
        valueToArray += value;
        valueToArray =  valueToArray.split("");
        size         =  valueToArray.length - 1;
        abreviatura  =  valueToArray.slice(0, 3).join("") + "M";
      }else {
          value        =  value / 100;
          value        =  value.toPrecision(3);
          value        =  value * 100;
          valueToArray += value;
          valueToArray =  valueToArray.split("");
          size         =  valueToArray.length - 1;
          if (value > 9999999) {
            abreviatura  =  valueToArray.slice(0, size - 5).join("") + "." + valueToArray.slice(size - 5, size - 4).join("") + "M";
          } else {
            abreviatura  =  valueToArray.slice(0, size - 5).join("") + "." + valueToArray.slice(size - 5, size - 3).join("") + "M";
          }

      }

    }

    if (value >= 1010000000) {
      value        =  value / 1000000;
      value        =  Math.round(value);
      value        =  value * 1000000;
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 5).join("") + "M";
    }

  }

  return abreviatura;
}


console.log(verifica(878840842.28));
module.exports = verifica;
