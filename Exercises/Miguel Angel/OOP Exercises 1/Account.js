"use strict"
function Account (account){
	var id = account.id;
	var name = account.name;
	var balance = account.balance;
	this.getID = function getID(){
		return id;
	}
	this.getName = function getName(){
		return name;
	}
	this.getBalance = function getBalance(){
		return balance;
	}
	this.credit = function credit(amount){
		balance += amount;
		return balance;
	}
	this.debit = function debit(amount){
		if(amount <= balance){
			balance -= amount;
		} else {
			console.log("Amount exceeded balance")
		}
		return balance;
	}
	this.transferTo = function transferTo(another, amount){
		if(amount <= balance){
			balance -= amount;
			another.credit(amount);
		} else {
			console.log("Amount exceeded balance")
		}
		return balance;
	}
}

Account.prototype.toString = function toString(){
	var result = "Account[id=" + this.getID() + ", name=" + this.getName() + ", balance=" + this.getBalance() + "]";
	return result;
};

module.exports = Account;
