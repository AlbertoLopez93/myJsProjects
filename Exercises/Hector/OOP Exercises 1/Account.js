function Account(data){
    var id = data.id;
    this.getID = function(){
        return id;
    }
    var name = data.name;
    this.getName = function(){
        return name;
    }
    var balance = data.balance;
    this.getBalance = function(){
        return balance;
    }
    this.credit = function(add){
        return balance = balance + add;
    }
    this.debit = function(qty){
        if( qty <= balance ){
            return balance = balance - qty;
        } else {
            console.log("Amount exceeded balance");
            return balance;
        }
    }
    this.transfer = function(account, amount){
        if(balance > amount){
            balance = balance - amount;
            return account.credit(amount);
        } else {
            console.log("Amount exceeded balance");
            return balance;
        }
    }
}

Account.prototype.toString = function(){
    return "Account[id=" + this.getID() + ", name=" + this.getName() + ", balance=" + this.getBalance() + "]";
}

var account1 = new Account({id : "axel00001", name : "Axel Nolasco", balance : 1000});
var account2 = new Account({id : "dylan00001", name : "Dylan Nolasco", balance : 1000});
console.log(account1.toString());
console.log(account2.toString());
account1.transfer(account2, 500);
console.log(account1.toString());
console.log(account2.toString());
console.log("\n");
console.log(account1.getBalance());
console.log(account2.getBalance());
