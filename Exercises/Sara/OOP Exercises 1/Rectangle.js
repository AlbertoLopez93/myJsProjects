"use strict";
function Rectangle(object){
  var length=object.length;
  var width=object.width;
  this.getWidth = function() {
    return width;
  };
  this.setWidth = function(newWidth){
    if(typeof newWidth==='number'){
      width = newWidth;
    }
  };
  this.getLength = function() {
    return length;
  };
  this.setLength = function(newLength){
    if(typeof newLength==='number'){
      length = newLength;
    }
  };
}
Rectangle.prototype={};
Rectangle.prototype.getArea=function(){
  var width=this.getWidth();
  var length=this.getLength();
  return width*length;
}
Rectangle.prototype.getPerimeter=function(){
  var width=this.getWidth();
  var length=this.getLength();
  return width*2+length*2;
}
Rectangle.prototype.toString=function(){
  var width=this.getWidth();
  var length=this.getLength();
  return "Rectangle[length="+length+", width="+width+"]";
}
var c=new Rectangle({width:5,length:6});
module.exports = Rectangle;
