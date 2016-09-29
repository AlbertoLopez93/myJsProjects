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
        return radius = newRadius;
    }
    this.setColor = function(newColor){
        return color = newColor;
    }
}

Circle.prototype.getArea = function(){
    var radiusPow = Math.pow(this.getRadius(), 2);
    return Math.PI * radiusPow;
}
Circle.prototype.getCircunference = function() {
    var radius = this.getRadius() * 2;
    return Math.PI * radius;
}

var circulo = new Circle({radius:3, color:"Green"});
console.log(circulo.getArea());
circulo.setRadius(10);
console.log(circulo.getColor());
console.log(circulo.getArea());
circulo.setColor("Red");
console.log(circulo.getColor());
console.log(circulo.getCircunference());

module.exports = Circle;
