/**
 * Created by jazielsama on 28/09/16.
 */
/*
 Create a class Rectangle, that can have a length and a width, both will be numbers. This properties will be private therefore you must create a method that allow the user to set a new width and a new height. Also methods to get both properties, width and height.
 */
/*
 Add 3 new methods to the Rectangle class:
 getArea():number will return back the area of the instance.
 getPerimeter():number will return back the perimeter of the instance
 toString():string will return back a string that will follow the pattern: “Rectangle[length=?, width=?]”
 */
var ren = {length: 10, width: 5};

function Rectangle (data) {
	var length = data.length;
	var width = data.width;
	this.getLength = function getLength () {
		return length;
	};

	this.setLength = function setLength (newLengh) {
		return length = newLengh;
	};

	this.getWidth = function getWidth () {
		return width;
	};

	this.setWidth = function setWidth (newWidth) {
		return width = newWidth;
	};

}

Rectangle.prototype.getArea = function getArea () {
	return this.getLength () * this.getWidth ();
};

Rectangle.prototype.getPerimeter = function getPerimeter () {
	return (this.getLength () * 2) + (this.getWidth () * 2);
};

Rectangle.prototype.toString = function toString () {
	return 'Rectangle[length=' + this.getLength () + ',width=' + this.getWidth () + ']'
};

var rectangle1 = new Rectangle (ren);
console.log (rectangle1.getLength ());
console.log (rectangle1.getWidth ());
console.log (rectangle1.getArea ());
console.log (rectangle1.getPerimeter ());
console.log (rectangle1.toString ());
rectangle1.setLength (100);
rectangle1.setWidth (50);
console.log (rectangle1.getLength ());
console.log (rectangle1.getWidth ());
console.log (rectangle1.getArea ());
console.log (rectangle1.getPerimeter ());
console.log (rectangle1.toString ());

module.exports = Rectangle;
