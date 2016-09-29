/**
 * Created by jazielsama on 28/09/16.
 */

/*
 Create a class named Account, that will receive in the constructor:
 id:string
 name:string
 balance:int
 The Account class, will also have the following methods:
 getID():string returns the id of the account.
 getName():string return the name of the account.
 getBalance():int return the balance of the account.
 credit(amount:int):int add the given amount to the balance of the instance and returns the new balance.

 debit(amount:int):int this method will check the amount you wanna use is less than the balance you have in the account. If it is, then the amount will be subtracted from the balance and the new balance will be returned. If the amount you wanna subtract is greater than the balance, the method will print to the screen/console the message: “Amount exceeded balance”, will not subtract the amount and will return the balance.

 transferTo(another:Account, amount:int):int this method will receive another instance of Account and an amount. If the current account have a balance greater than the amount you wanna subtract, then the method should subtract the amount from the balance of the source account, and then add that amount to the target account. If the balance of the source account is not enough (amount is greater than the balance) then the method will print to the screen/console “Amount exceeded balance”. Either scenario should return the balance of the account.
 toString():string returns a string that will follow the pattern: “Account[id=?, name=?, balance=?]”.


 * */
var acc = {
	id: 'string123',
	name: 'stringty',
	balance: 10000
};
var acc2 = {
	id: 'other dude',
	name: 'dude',
	balance: 10000
};

function Account (data) {
	var id = data.id;
	var name = data.name;
	var balance = data.balance;

	this.getID = function getID () {
		return id;
	};

	this.getName = function getName () {
		return name;
	};

	this.getBalane = function getBalance () {
		return balance;
	};

	this.credit = function credit (amount) {
		return balance += amount;
	};

	this.debit = function debit (amount) {

		if (this.getBalane () < amount) {
			console.log ('Amount exceeded balance');
			return balance;

		} else {
			return balance -= amount;
		}
	};

	this.transferTo = function transferTo (account, amount) {
		this.debit(amount);
		account.credit(amount);
		return this.getBalane();
	};


}

Account.prototype.toString = function toString () {
	return 'Account[id=' + this.getID () + ', name=' + this.getName () + ', balance=' + this.getBalane () + ']'
};

var client = new Account (acc);
console.log (client.getID ());
console.log (client.getName ());
console.log (client.getBalane ());
console.log (client.credit (1000));
console.log (client.getBalane ());
console.log (client.debit (1000));
console.log (client.toString ());
var client2 = new Account (acc2);
console.log (client2.getBalane ()+' client2');
console.log (client.getBalane () +' client1');
console.log (client.transferTo (client2, 1000));
console.log (client.getBalane () +' client1');
console.log (client2.getBalane ()+' client2');




