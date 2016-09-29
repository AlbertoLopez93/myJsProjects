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

var user = new Account({id:'',name:'Happy Bank',balance:870});
console.log(user.credit(40));
console.log(user.debit(520));
console.log(user.debit(520));
console.log(user.toString());

module.exports = Account;
