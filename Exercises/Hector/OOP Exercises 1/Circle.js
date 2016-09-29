function Circle(data){
    var radius = data.radius;
    this.getRadius = function() {
        return radius;
    };
    var color = data.color;
    this.getColor = function() {
        return color;
    };
    this.setRadius = function(newRadius) {
        if(typeof newRadius !== "number"){
            return radius;
        } else {
            return radius = newRadius;
        }
    }
    this.setColor = function(newColor){
        if(typeof newColor !== "string"){
            return color;
        } else {
            return color = newColor;
        }
    }
}

Circle.prototype.getArea = function(){
    var radiusPow = Math.pow(this.getRadius(), 2);
    return Math.PI * radiusPow;
}
Circle.prototype.getCircumference = function() {
    var radius = this.getRadius() * 2;
    return Math.PI * radius;
}

// var circulo = new Circle({radius:3, color:"Green"});
// console.log(circulo.getArea());
// circulo.setRadius(10);
// console.log(circulo.getColor());
// console.log(circulo.getArea());
// circulo.setColor("Red");
// console.log(circulo.getColor());
// console.log(circulo.getCircumference());

module.exports = Circle;
