function Account(_id, _customer, _balance){
    var ID = _id;
    this.getID = function() {
        return ID;
    };
    var customer = _customer;
    this.getCustomer = function() {
        return customer;
    };
    var balance;
    if (!_balance) {
        balance = 0;
    } else {
        balance = _balance;
    }
    this.getBalance = function() {
        return balance;
    };
    this.setBalance = function(newBalance) {
        balance = newBalance;
    };
}
Account.prototype.toString = function (){
    var customer = this.getCustomer();
    var balance = this.getBalance();
    return customer.getName() + "(" + customer.getID() + ") balance=$" + balance.toFixed(2);
};
Account.prototype.getCustomerName = function (){
    var customer = this.getCustomer();
    var customerName = customer.getName();
    return customerName;
};
Account.prototype.deposit = function (qty) {
    var balance = this.getBalance();
    var newBalance = balance + qty;
    this.setBalance(newBalance);
    return this;
};
Account.prototype.withdraw = function (qty) {
    var current = this.getBalance();
    if (qty <= current) {
        var newB = current - qty;
        this.setBalance(newB);
        return this;
    } else {
        return "Saldo Insuficiente";
    }
};

module.exports = Account;
