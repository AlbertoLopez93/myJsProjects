function Account(data) {
  var id = data.id;
  var name = data.name;
  var balance = data.balance;
  this.getID = function getID() {
    return id;
  }
  this.getName = function getName() {
    return name;
  }
  this.getBalance = function getBalance() {
    return balance;
  }
  this.credit = function credit(amount) {
    balance += amount;
    return balance;
  }
  this.debit = function debit(amount) {
    if(amount <= balance) {
      balance +- amount;
      return balance;
    } else {
      console.log("Amount exceeded balance");
      return balance;
    }
  }
  this.transferTo = function transferTo(another, amount) {  
  }
}
