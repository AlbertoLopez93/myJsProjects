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
    if(typeof newLength==='string'){
      length = newLength;
    }
  };
}
Rectangle.prototype={};
Rectangle.prototype.getArea=function(){
  width=this.getWidth();
  length=this.getLength();
  return width*length;
}
Rectangle.prototype.getPerimeter=function(){
  width=this.getWidth();
  length=this.getLength();
  return width*2+length*2;
}
Rectangle.prototype.toString=function(){
  width=this.getWidth();
  length=this.getLength();
  return "Rectangle[length="+length+", width="+width+"]";
}
var c=new Rectangle({width:5,length:6});
console.log(c.getArea());
console.log(c.getPerimeter());
console.log(c.toString());

module.exports = Rectangle;
