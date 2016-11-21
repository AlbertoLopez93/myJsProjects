"use strict";

let Main = require("./MainFirst");

function Alien() {}

Alien.prototype = Object.create(Main.prototype);
Alien.prototype = Object.defineProperty(
  Alien.prototype, "constructor",
  {
    value:Alien
});

Object.defineProperty( Alien.prototype, "teleport", {
  value: function() {
    console.log("Now you see me, now you dont!");
  },
  enumerable: true
});
Object.defineProperty( Alien.prototype, "hide", {
  value: function() {
    console.log("On’ta bebé");
  },
  enumerable: true
});

module.exports = Alien;

let ET = new Alien();
ET.walk();
ET.hide();
