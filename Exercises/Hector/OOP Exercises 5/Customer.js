function Customer(id, nam, dis) {
    var ID = id;
    this.getID = function() {
        return ID;
    }
    var name = nam;
    this.getName = function() {
        return name;
    }
    var discount = dis;
    this.getDiscount = function() {
        return discount;
    }
    this.setDiscount = function(newDiscount) {
        discount = newDiscount;

    }
}
Customer.prototype.toString = function() {
    return this.getName() + "(" + this.getID() + ")";
};

module.exports = Customer;
