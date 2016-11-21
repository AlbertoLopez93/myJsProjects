"use strict";

let Main = require("./MainFirst");

function Pirate() {}

Pirate.prototype = Object.create(Main.prototype);
Pirate.prototype = Object.defineProperty(
  Pirate.prototype, "constructor",
  {
    value: Pirate
  });

  Object.defineProperty( Pirate.prototype, "sail", {
    value: function() {
      console.log("We sail. Ahoy!");
    },
    enumerable: true
  });
  Object.defineProperty( Pirate.prototype, "plunder", {
    value: function() {
      console.log("Grab the gold!");
    },
    enumerable: true
  });

module.exports = Pirate;

let Morgan = new Pirate();
Morgan.talk();
Morgan.say();
Morgan.plunder();
