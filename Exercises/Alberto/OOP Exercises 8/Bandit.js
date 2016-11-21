"use strict";

let Main = require("./MainFirst");

function Bandit() {}

Bandit.prototype = Object.create(Main.prototype);
Bandit.prototype = Object.defineProperty(
  Bandit.prototype, "constructor",
  {
    value: Bandit
  });

Object.defineProperty( Bandit.prototype, "run", {
  value: function() {
    console.log("Run Forrest, run!");
  },
  enumerable: true
});

module.exports = Bandit;
