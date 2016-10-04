"use strict";
function Circle(object){
  var color=object.color;
  var radius=object.radius;
  this.getRadius = function() {
    return radius;
  }
  this.setRadius = function(newRadio){
    if(typeof newRadio==='number'){
      radius = newRadio;
    }
  }
  this.getColor = function() {
    return color;
  }
  this.setColor = function(newColor){
    if(typeof newColor==='string'){
      color = newColor;
    }
  }
}
Circle.prototype.getArea=function(){
  var radius=this.getRadius();
  return Math.PI*(radius*radius);
}
Circle.prototype.getCircumference=function(){
  var radius=this.getRadius();
  return Math.PI*(radius+radius);
}
var c=new Circle({radius:5,color:"green"});
module.exports = Circle;
