/**
 * Created by jazielsama on 2/10/16.
 */
/*
* Create a class called MyRectangle. This class will used the MyPoint class, so don’t start this unless you have finished the exercise #1. The instances will have 2 private properties:
 topLeft:MyPoint
 bottomRight:MyPoint
 The constructor of this class can receive 2 or 6 parameters.
 MyRectangle(topLeft:MyPoint, bottomRight:MyPoint) if the constructor receives 2 parameters, both parameters will be instances of MyPoint object. Each parameter will set the according property of the  MyRectangle instance.
 MyRectangle(x1:int, y1:int, x2:int, y2:int) if the constructor receives 4 parameters, all of those will be integers. It will use the first pair of parameters to create a MyPoint object that will be use to set the topLeft property. The last pair of parameters will be used to create another MyPoint object that will be use to set the bottomRight property.
 The class will also have the following methods:
 getArea():number returns the area of the instance.
 getPerimeter():number returns the perimeter of the instance.
 toString():int returns a string following the pattern: “MyRectangle[topLeft=(x1, y1), bottomRight=(x2, y2)]”.

 * */