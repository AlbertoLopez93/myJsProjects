"use strict";
function Author(object){
  var email=object.email;
  var name=object.name;
  var gender=object.gender;
  this.getName=function getName(){
    return name;
  }
  this.getEmail=function getEmail(){
    return email;
  }
  this.setEmail=function setEmail(newEmail){
    email=newEmail;
  }
  this.getGender=function getGender(){
    return gender;
  }
}
var c=new Author({email:"saraarrobaalgo",name:"sara",gender:"m"});
Author.prototype.toString=function(){
  var name=this.getName();
  var email=this.getEmail();
  var gender=this.getGender();
  return "Author[name="+name+", email="+email+", gender="+gender+"]";
}
module.exports=Author;
