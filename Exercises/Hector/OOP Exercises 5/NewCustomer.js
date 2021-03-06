function NewCustomer(_id, _name, _gender){
    var ID = _id;
    this.getID = function() {
        return ID;
    }
    var name = _name;
    this.getName = function() {
        return name;
    }
    var gender = _gender;
    this.getGender = function() {
        return gender;
    }
}
NewCustomer.prototype.toString = function() {
    return this.getName() + "(" + this.getID() + ")";
};

module.exports = NewCustomer;
