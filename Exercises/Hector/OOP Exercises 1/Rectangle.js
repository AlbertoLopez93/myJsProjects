function Rectangle(data){
    var width = data.width;
    this.getWidth = function() {
        return width;
    };
    var length = data.length;
    this.getLength = function() {
        return length;
    };
    this.setWidth = function(newWidth) {
        return width = newWidth;
    }
    this.setLength = function(newLength){
        return length = newLength;
    }
}

Rectangle.prototype.getArea = function(){
    return this.getWidth() * this.getLength();
}
Rectangle.prototype.getPerimeter = function(){
    return (this.getWidth() * 2) + (this.getLength() * 2);
}
Rectangle.prototype.toString = function(){
    return "Rectangle[length=" + this.getLength() + ", width=" + this.getWidth() + "]"
}

// var rectangle = new Rectangle({width: 10, lenght: 5});
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());
// console.log(rectangle.toString());
// console.log("\n");
// rectangle.setLenght(20);
// rectangle.setWidth(30);
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());
// console.log(rectangle.toString());

module.exports = Rectangle;
