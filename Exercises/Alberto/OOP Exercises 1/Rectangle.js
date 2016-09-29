"use strict"

function Rectangle(obj) {
  var length = obj.length;
  var width = obj.width;
  this.setLength = function(newLength) {
    length=newLength;
  }
  this.setWidth = function(newWidth) {
    width=newWidth;
  }
  this.getLength = function() {
    return length;
  }
  this.getWidth = function() {
    return width;
  }
}

Rectangle.prototype ={};
Rectangle.prototype.getArea = function() {
  return this.getLength()*this.getWidth();
}
Rectangle.prototype.getPerimeter = function() {
  return 2*(this.getLength()+this.getWidth());
}
Rectangle.prototype.toString = function() {
  return "Rectangle[length="+this.getLength()+", width="+this.getWidth()+"]";
}

/*var figure = new Rectangle({length:6,width:9});
console.log(figure.getArea());
console.log(figure.getPerimeter());
console.log(figure.toString());*/
