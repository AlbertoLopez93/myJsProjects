"use strict";
var Author=require("./Author.js");
function NewBook(object){
  var name=object.name;
  var authors=object.authors;
  var price=object.price;
  var qty=object.qty;
  this.getName=function (){
    return name;
  }
  this.getAuthors=function (){
    return authors;
    }
  this.getPrice=function (){
    return price;
  }
  this.setPrice=function (newPrice){
    price=newPrice;
  }
  this.setQty=function (newQty){
    qty=newQty;
  }
  this.getQty=function getQty(){
    if(qty!==undefined){
      return qty;
    }
    else{
      return 0;
    }
  }
}
NewBook.prototype.getAuthorNames=function(){
  var array=this.getAuthors();
  var autor=array.map(function(elemento){
    return elemento.getName();
  });
  autor=autor.join(", ");
  return autor;
}
NewBook.prototype.toString = function toString() {
return "Newbook[name="+this.getName()+", authors={"
  +this.getAuthors().reduce(function(anterior,actual) {
  return anterior.toString()+", "+actual.toString();
})+"}"+",price="+this.getPrice()+", qty="+this.getQty()+"]";
}
var autor1=new Author({email:"saraarrobaalgo",name:"sara",gender:"f"});
var autor2=new Author({email:"mayraarrobaalgo",name:"mayra",gender:"f"});
var c=new NewBook({name:"shine on you",authors:[autor1,autor2],price:40,qty:2});
console.log(c.getAuthorNames());
