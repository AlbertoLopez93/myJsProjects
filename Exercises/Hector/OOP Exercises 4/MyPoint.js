/*Create a class called MyPoint, the constructor of
this class can receive 0 parameters or 2 parameters.
The parameters it could receive are: x:int, y:int.
For this exercise, the constructor will not receive
the parameters as one object, it will be as 2 different
parameters instead. The constructor will contain two
private properties:
x:int will hold the x parameter
y:int will hold the y parameter
If the constructor receives 0 parameters, then the
properties will be set to: zero.
It will also have the following methods:
getX():int will return the x value of the instance.
setX(x:int) will set a new x to the instance.
getY():int will return the y value of the instance.
setY():int will set a new y to the instance.
getXY():int[2] will return an array with the x and y property as [x, y].
setXY(x:int, y:int):void will set a new value for x and a new value for y.
toString():string will return a string following
    the pattern: “(x, y)” where x represents the value of
    the property x and y represents the value of y.
distance():number will return the distance between the instance and (0, 0).
distance(x:int, y:int):number will return the distance
    between the instance and the point given by x, y.
distance(another:Point):number will return the distance between
    the instance and the received point.*/
function  MyPoint(){
    var x, y;
    if (arguments.length === 0) {
        x = 0;
        y = 0;
    } else {
        if (arguments.length === 1) {
            if (typeof arguments[0] === "number"){
                x = arguments[0];
            }
            y = 0;
        } else {
            if (typeof arguments[0] === "number" && typeof arguments[1] === "number"){
                x = arguments[0];
                y = arguments[1];
            }
        }
    }
    this.getX = function() {
        return x;
    };
    this.setX = function(newX){
        x = newX;
    };
    this.getY = function(newY) {
        return y;
    };
    this.setY = function(newY) {
        y = newY;
    };
    this.getXY = function() {
        return [x, y];
    };
    this.setXY = function(newX, newY){
        x = newX;
        y = newY;
    };
    this.toString = function(){
        return "(" + x + ", " + y +")";
    };
}

MyPoint.prototype.distance = function () {
    var x1, x2, y1, y2, result1, result2, distance;
    if (arguments.length === 0) {
        x1 = this.getX();
        y1 = this.getY();
        x2 = 0;
        y2 = 0;
        result1 = Math.pow((x2 - x1), 2);
        result2 = Math.pow((y2 - y1), 2);
        distance = Math.sqrt(result1 + result2);
        return distance;
    } else {
        if (typeof arguments[0] === "object" && arguments.length === 1) {
            var aux = arguments[0];
            x1 = this.getX();
            y1 = this.getY();
            x2 = aux.getX();
            y2 = aux.getY();
            result1 = Math.pow((x2 - x1), 2);
            result2 = Math.pow((y2 - y1), 2);
            distance = Math.sqrt(result1 + result2);
            return distance;
        } else {
            if (arguments.length === 2) {
                x1 = this.getX();
                y1 = this.getY();
                x2 = arguments[0];
                y2 = arguments[1];
                result1 = Math.pow((x2 - x1), 2);
                result2 = Math.pow((y2 - y1), 2);
                distance = Math.sqrt(result1 + result2);
                return distance;
            }
        }
    }
};
//:number will return the distance between the instance and (0, 0)
//distance():number will return the distance between the instance and (0, 0).
//distance(x:int, y:int):number will return the distance
    //between the instance and the point given by x, y.
//distance(another:Point):number will return the distance between
    //the instance and the received point.*/



module.exports = MyPoint;
