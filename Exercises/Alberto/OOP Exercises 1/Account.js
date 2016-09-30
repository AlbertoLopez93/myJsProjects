"use strict"

function Account(data) {
  var id = data.id;
  var name = data.name;
  var balance = data.balance;

  this.getID = function() {
    return id;
  }
  this.getName = function() {
    return name;
  }
  this.getBalance = function() {
    return balance;
  }
  this.credit = function(money) {
    balance += money;
    return balance;
  }
  this.debit = function(money) {
    if(money<=balance) {
      balance -= money;
    }
    else {
      console.log("Amount exceeded balance");
    }
    return balance;
  }
}

Account.prototype ={};
Account.prototype.toString = function() {
  return 'Account[id='+this.getID()+', name='+this.getName()+', balance='+this.getBalance()+']';
}
Account.prototype.transferTo = function(another,amount) {
  if(typeof another!='object'||typeof amount!='number') {
    console.log("Internal Error");
    return ;
  }
  if(amount<=this.debit(0)) {
    this.debit(amount);
    another.credit(amount);
  }
  else {
    console.log("Amount exceeded balance");
  }
  return this.debit(0);
}

var user = new Account({id:'',name:'John',balance:870});
var cobrar = new Account({id:'',name:'Peter',balance:870});
console.log(user.credit(40));
console.log(user.debit(520));
console.log(user.debit(520));
console.log(user.toString());
console.log(user.transferTo(cobrar,1560));
console.log(user.credit(0));
console.log(cobrar.credit(0));

module.exports = Account;
