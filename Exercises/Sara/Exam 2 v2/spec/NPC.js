"use strict";
let Human=require("./Human");
let Animal=require("./Animal");
function NPC(){
  Human.call(this);
}
module.exports=NPC;
