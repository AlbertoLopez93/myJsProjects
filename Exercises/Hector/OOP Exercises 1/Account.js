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
    this.transferTo = function(account, amount){
        if(this.getBalance() >= amount){
            this.debit(amount);
            account.credit(amount);
            return this.getBalance();
        } else {
            console.log("Amount exceeded balance");
            return balance;
        }
    }
}

Account.prototype.toString = function(){
    return "Account[id=" + this.getID() + ", name=" + this.getName() + ", balance=" + this.getBalance() + "]";
}
//
// var account1 = new Account({id : "axel00001", name : "Axel Nolasco", balance : 1000});
// var account2 = new Account({id : "dylan00001", name : "Dylan Nolasco", balance : 1000});
// console.log(account1.toString());
// console.log(account2.toString());
// account1.transferTo(account2, 500);
// console.log(account1.toString());
// console.log(account2.toString());
// console.log("\n");
// console.log(account1.getBalance());
// console.log(account2.getBalance());

module.exports = Account;
