"use strict";
let MyPoint = require("./MyPoint.js");
function MyCircle() {
    var center,radius;
    var argumentos=Array.prototype.slice.call(arguments);
    if(argumentos.length===0){
    center=new MyPoint(0,0),radius=0;
    }
    if(argumentos.length===2){
    center=argumentos[0],radius=argumentos[1];
    }
    if(argumentos.length===3){
        center=new MyPoint(argumentos[0],argumentos[1]),radius=argumentos[2];

    }

    this.getRadius=function getRadius() {
        return radius;
    }
    this.setRadius=function setRadius(newRadius) {
        if (typeof newRadius==="number") {
            radius=newRadius;
        }
    }
    this.getCenter=function getCenter() {
        return center;
    }
    this.setCenter=function setRadius(newCenter) {
        if (typeof newCenter==="object") {
            center=newCenter;
        }
    }
    this.getCenterX=function getCenterX() {
        return this.setCenter().getX();;
    }
    this.setCenterX=function setCenterX(newCenterX) {
        if (typeof newCenterX==="number") {
            Centerx=newCenterX;
        }
    }
    this.getCenterY=function getCenterY() {
        return this.setCenter().getY();
    }
    this.setCenterY=function setCenterY(newCenterY) {
        if (typeof newCenterY==="number") {
            y=newCenterY;
        }
    }
}
