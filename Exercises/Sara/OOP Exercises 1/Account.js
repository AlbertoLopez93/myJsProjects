"use strict";
function Account(object){
  var id=object.id;
  var name=object.name;
  var balance=object.balance;
  this.getID = function() {
   return id;
  };
  this.getName = function() {
    return name;
  };
  this.getBalance = function() {
    return balance;
  };
  this.credit=function credit(amount){
    balance=balance+amount;
    return balance;
  }
  this.debit=function debit(amount){
    if(amount<=this.getBalance()){
      balance=balance-amount;
    }
    else{
      console.log("Amount exceeded balance");
    }
    return this.getBalance();
  }
}
Account.prototype.transferTo=function(another,amount){
    if(amount<=this.getBalance()){
      this.debit(amount);
      another.credit(amount);
    }
    else{
      console.log("Amount exceeded balance");
    }
    return this.getBalance();
  }
Account.prototype.toString=function(){
  return "Account[id="+this.getID()+", name="+this.getName()+", balance="+this.getBalance()+"]";
}
module.exports=Account;
