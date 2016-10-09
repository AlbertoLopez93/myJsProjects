"use strict";
function verifica(value) {
  let abreviatura, valueToArray = "", size, negativo = false;

  if (Number.isInteger(value)) {

    if (value < 0) {
      value    = value * (-1);
      negativo = true;
    }

    if (value <= 999) {
      abreviatura = "" + value;
    }

    if ((value >= 1000) && (value <= 9999)) {
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 2).join("") + "," + valueToArray.slice(-3).join("");
    }

    if ((value >= 10000) && (value <= 99999)) {
      value        =  value / 100;
      value        =  value.toFixed(1);
      value        =  value * 100;
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 2).join("") + "." + valueToArray.slice(size - 2, size - 1).join("") + "K";
    }

    if ((value >= 100000) && (value <= 999499)) {
      value        =  value / 1000;
      value        =  value.toFixed(3);
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
      value        =  value / 10000;
      value        =  value.toFixed(2);
      value        =  value * 10000;
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 5).join("") + "." + valueToArray.slice(size - 5, size - 3).join("") + "M";
    }

    if (value >= 1010000000) {
      value        =  value / 100000;
      value        =  value.toFixed(2);
      value        =  value * 100000;
      valueToArray += value;
      size         =  valueToArray.length - 1;
      valueToArray =  valueToArray.split("");
      abreviatura  =  valueToArray.slice(0, size - 5).join("") + "M";
    }

    abreviatura = (negativo) ? "-" + abreviatura : abreviatura;
  }

  return abreviatura;
}

module.exports = verifica;
