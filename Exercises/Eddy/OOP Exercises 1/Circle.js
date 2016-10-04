/**
 * Created by jazielsama on 28/09/16.
 *
 */
/*
 1 .- Create a class named: Circle, that can have a radius, and a color. Circle also have one methods:
 getArea():number perform the calculations of the area of the instance and returns it.
 */

/*
 2.- The previous exercise, doesn’t have a way to prevent people changing the radius of an existing instance of Circle, rewrite your implementation, to have privacy for the radius and the color of each instance.
 */
/*
 3.- Now we will like to have a way to change the radius of an instance of Circle, but still keep the privacy that we get from the previous exercise. Implement a:
 setRadius(radius:number):void method that will receive a number and use it to change the radius of the instance. If the parameter received isn’t a number, then the radius won’t be changed.
 getLength():number method that we can use to retrieve the radius of the instance.
 setColor(color:string):void method that will receive a string as the new color and use it to change the color of the instance. If the parameter received isn’t a string, then the color won’t be changed.
 getColor():string method that we can use to retrieve the color of the instance.
 */
/*
 *Add a new method the to Circle class:
 getCircumference():number which will return the calculation of the circumference of the instance.
 */
var cir = {radius: 10, color: 'blue'};

function Circle (data) {
	var radius = data.radius;
	var color = data.color;
	this.getRadius = function getRadius () {
		return radius;
	};
	this.setRadius = function setRadius (newRadius) {
		if (typeof newRadius === 'number') {
			return radius = newRadius;
		}
	};
	this.getColor = function getColor () {
		return color;
	};
	this.setColor = function setColor (newColor) {
		if (typeof newColor === 'string') {
			return color = newColor
		}
	};

}

Circle.prototype.getArea = function getArea () {
	return Math.PI * Math.pow (this.getRadius (), 2);
};

Circle.prototype.getCircumference = function getCircumference () {
	return Math.PI * this.getRadius () * 2;
};

var circle1 = new Circle (cir);
console.log (circle1.getArea ());
console.log (circle1.getColor ());
console.log (circle1.getCircumference ());
circle1.setRadius (9);
circle1.setColor ('red');
console.log (circle1.getArea ());
console.log (circle1.getColor ());
console.log (circle1.getCircumference ());

module.exports = Circle;
