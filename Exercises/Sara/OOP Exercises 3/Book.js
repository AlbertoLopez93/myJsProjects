"use strict";
var Author=require("./Author.js");
function Book(object){
  var name=object.name;//string
  var author=object.author;//Author
  var price=object.price;//float
  var qty=object.qty;//int (optional)
  this.getName=function getName(){
   return name;
  }
  this.getAuthor=function getAuthor(){
    return author;
  }
  this.getPrice=function getPrice(){
    return price;
  }
  this.setPrice=function setPrice(newPrice){
    price=newPrice;
  }
  this.getQty=function getQty(){
    if(qty!==undefined){
      return qty;
    }
    else{
      return 0;
    }
  }
  this.setQty=function setQty(newQty){
      qty=newQty;
  }
}
Book.prototype.toString=function(){
  var name=this.getName();
  var author=this.getAuthor();
  var price=this.getPrice();
  var qty=this.getQty();
  return "Book[name="+name+", Author[name="+author.getName()+", email="+author.getEmail()+", gender="+author.getGender()+"], price="+price+", qty="+qty+"]";
}
var b=new Author({email:"saraarrobaalgo",name:"sara",gender:"m"});
var c=new Book({name:"Alice in wonderland",author:b,price:80});
console.log(c.getName());
console.log(c.getAuthor());
console.log(c.getPrice());
console.log(c.getQty());
c.setPrice(50);
console.log(c.getPrice());
c.setQty(6);
console.log(c.getQty());
console.log(c.toString());
