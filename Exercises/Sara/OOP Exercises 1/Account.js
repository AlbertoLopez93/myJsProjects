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
}
Account.prototype.credit=function(){
  return ;
}
Account.prototype.debit=function(){
  return ;
}
InvoiceItem.prototype.transferTo=function(){
  return ;
}
InvoiceItem.prototype.toString=function(){
  return "Account[id=?, name=?, balance=?]";
}
var c=new Account({id:"38438743",name:"posi",balance:20});
console.log(c.getID());

module.exports = Account;
