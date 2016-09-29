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

var account = new Account({
	id: 0,
	name: "mine",
	balance: 11000
});

var account2 = new Account({
	id: 1,
	name: "yours",
	balance: 1000
});

module.exports = Account;
