"use strict"
function Rectangle(rectangle){
	var length = rectangle.length;
	var width = rectangle.width;
	this.getLength = function getLength(){
		return length;
	};
	this.getWidth = function getWidth(){
		return width;
	};
	this.setLength = function setLength(newLength){
		length = newLength;
	};
	this.setWidth = function setWidth(newWidth){
		width = newWidth;
	};
}

Rectangle.prototype.getArea = function getArea(){
	var length = this.getLength();
	var width = this.getWidth();
	var result = length * width;
	return result;
}

Rectangle.prototype.getPerimeter = function getPerimeter(){
	var length = this.getLength() * 2;
	var width = this.getWidth() * 2;
	var result = length + width;
	return result;
}

Rectangle.prototype.toString = function toString(){
	var result = "Rectangle[length=" + this.getLength() + ", width=" + this.getWidth() +"]";
	return result;
}
