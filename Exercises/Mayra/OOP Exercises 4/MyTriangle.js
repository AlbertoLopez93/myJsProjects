"use strict";
var MyPoint=require("./MyPoint.js");
function MyTriangle() {
    var v1,v2,v3;
    var argumentos=Array.prototype.slice.call(arguments);
    if(argumentos.length===6){
        v1=new MyPoint(argumentos[0],args[1]);
        v2=new MyPoint(argumentos[2],args[3]);
        v3=new MyPoint(argumentos[4],args[5]);
    }
    if(argumentos.length===3){
        v1=argumentos[0];
        v2=argumentos[1];
        v3=argumentos[2];
    }
    this.toString = function toString(){
        let str="MyTriangle[v1=("+v1.getX()+", "+v1.getY()+"), v2=("+v2.getX()+", "+v2.getY()+"), v3=("+v3.getX()+", "+v3.getY()+")]";
        return str;
    }
    this.getPerimeter = function getPerimeter() {
        let distance1,distance2,distance3,distance;
        distance1=v1.distance(v2);
        distance2=v2.distance(v3);
        distance3=v3.distance(v1);
        distance=distance1+distance2+distance3;
        return distance;
    }
    this.getType= function getType() {
        var distance1,distance2,distance3;
        distance1=v1.distance(v2);
        distance2=v2.distance(v3);
        distance3=v3.distance(v1);
        if(distance1===distance2&&distance2===distance3){
            return "equilateral";
        }
        else{
            if((distance1===distance2 && distance2!==distance3) || (distance2===distance3 && distance3!==distance1) || (distance3===distance1 && distance1!==distance2)){
                return "isosceles";
            }
            else{
                return "scalene";
            }
        }
    }
}

module.exports= MyTriangle;
