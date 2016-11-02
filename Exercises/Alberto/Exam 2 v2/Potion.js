"use strict"

let Item = require("./Item");

function Potion( buyPrice, count, description, ID, name, sellPrice, weight,
  HPR, MPR ) {

  Item.call( this, buyPrice, count, description, ID, name, sellPrice, weight )

  Object.defineProperty( this, "HPRestore", {
    value: function(value) { // get and set
      if(value !== undefined) { HPR = value; }
      return HPR;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "MPRestore", {
    value: function(value) { // get and set
      if(value !== undefined) { MPR = value; }
      return MPR;
    },
    enumerable: true,
  });

}

module.exports = Potion;
