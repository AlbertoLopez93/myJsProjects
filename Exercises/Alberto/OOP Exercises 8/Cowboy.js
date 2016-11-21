"use strict";

let Main = require("./MainFirst");

function Cowboy() {}

Cowboy.prototype = Object.create(Main.prototype);
Cowboy.prototype = Object.defineProperty(
  Cowboy.prototype, "constructor",
  {
    value: Cowboy
  });

Object.defineProperty( Cowboy.prototype, "lasso", {
  value: function() {
    console.log("Who’s your daddy now?");
  },
  enumerable: true
});
Object.defineProperty( Cowboy.prototype, "rideHorses", {
  value: function() {
    console.log("Hi-Yo, Silver! Away!");
  },
  enumerable: true
});

module.exports = Cowboy;
