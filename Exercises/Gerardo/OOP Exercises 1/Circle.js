function Circle(data) {
  var radius = data.radius;
  var color = data.color;
  this.getArea = function getArea() {
    return Math.PI * radius * radius;
  }
  this.getRadius = function getRadius() {
    return radius;
  }
  this.getColor = function getcolor() {
    return color;
  }
  this.setRadius = function setRadius(newRadius) {
    if(typeof newRadius === 'number' && !isNaN(newRadius)) {
      radius = newRadius;
    }
  }
  this.setColor = function setColor(newColor) {
    if(typeof newColor === 'string') {
      color = newColor;
    }
  }
  this.getCircumference = function getCircumference() {
    return Math.PI * radius * 2;
  }
}
