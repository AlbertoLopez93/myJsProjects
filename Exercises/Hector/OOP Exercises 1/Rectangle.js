function Rectangle(data){
    var width = data.width;
    this.getWidth = function() {
        return width;
    };
    var lenght = data.lenght;
    this.getLenght = function() {
        return lenght;
    };
    this.setWidth = function(newWidth) {
        return width = newWidth;
    }
    this.setLenght = function(newLenght){
        return lenght = newLenght;
    }
}

Rectangle.prototype.getArea = function(){
    return this.getWidth() * this.getLenght();
}
Rectangle.prototype.getPerimeter = function(){
    return (this.getWidth() * 2) + (this.getLenght() * 2);
}
Rectangle.prototype.toString = function(){
    return "Rectangle[lenght = " + this.getLenght() + ", width = " + this.getWidth() + " ]"
}

var rectangle = new Rectangle({width: 10, lenght: 5});
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());
console.log("\n");
rectangle.setLenght(20);
rectangle.setWidth(30);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

module.exports = Rectangle;
