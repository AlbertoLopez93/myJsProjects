"use strict";
function MyTime(hour,minute,second){
  if(hour===undefined){
    hour=0;
  }
  if(minute===undefined){
    minute=0;
  }
  if(second===undefined){
    second=0;
  }
  Object.defineProperty(this, "getHour", {
    value: function() {
      return hour;
    },
    enumerable:true
  });
  Object.defineProperty(this, "setHour", {
    value: function(newHour){
      if(newHour>=0 && newHour<=23 && Number.isInteger(newHour)===true){
        hour=newHour;
      }
      else{
        console.log("Invalid hour, minute, or second!");
      }
    },
    enumerable:true
  });
  Object.defineProperty(this, "getMinute", {
    value: function() {
      return minute;
    },
    enumerable:true
  });
  Object.defineProperty(this, "setMinute", {
   value: function(newMinute) {
      if(newMinute>=0 && newMinute<=59 && Number.isInteger(newMinute)===true){
       minute = newMinute;
      }
      else{
        console.log("Invalid hour, minute, or second!");
      }
    },
    enumerable:true
  });
  Object.defineProperty(this, "getSecond", {
    value: function() {
      return second;
    },
    enumerable:true
  });
  Object.defineProperty(this, "setSecond", {
    value: function(newSecond) {
      if(newSecond>=0 && newSecond<=59 && Number.isInteger(newSecond)===true){
       second = newSecond;
      }
      else{
        console.log("Invalid hour, minute, or second!");
      }
    },
    enumerable:true
  });
}
Object.defineProperty(MyTime.prototype, "setTime", {
  value: function(newHour,newMinute,newSecond) {
    if((newHour>=0 && newHour<=23)&&(newMinute>=0 && newMinute<=59)&&(newSecond>=0 && newSecond<=59)
        && Number.isInteger(newHour)===true && Number.isInteger(newMinute)===true
        && Number.isInteger(newSecond)===true){
      this.setHour(newHour);
      this.setMinute(newMinute);
      this.setSecond(newSecond);
    }
    else{
      console.log("Invalid hour, minute, or second!");
    }
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"toString",{
  value: function(){
    var hour=this.getHour();
    var minute=this.getMinute();
    var second=this.getSecond();
    var str="";
    if(hour<10){
      str=str+"0"+hour+":";
    }
    else{
      str=str+hour+":";
    }
    if(minute<10){
      str=str+"0"+minute+":";
    }
    else{
      str=str+minute+":";
    }
    if(second<10){
      str=str+"0"+second;
    }
    else{
      str=str+second;
    }
    return str;
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"nextSecond",{
  value: function(){
    if(this.getHour()===23 && this.getMinute()===59 && this.getSecond()===59){
      this.setHour(0);
      this.setMinute(0);
      this.setSecond(0);
      return this;
    }
    if(this.getMinute()===59 && this.getSecond()===59){
      this.setHour(this.getHour()+1);
      this.setMinute(0);
      this.setSecond(0);
      return this;
    }
    if(this.getSecond()===59){
      this.setMinute(this.getMinute()+1);
      this.setSecond(0);
      return this;
    }
    this.setSecond(this.getSecond()+1);
    return this;
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"previousSecond",{
  value: function(){
    if(this.getHour()===0 && this.getMinute()===0 && this.getSecond()===0){
      this.setHour(23);
      this.setMinute(59);
      this.setSecond(59);
      return this;
    }
    if(this.getMinute()===0 && this.getSecond()===0){
      this.setHour(this.getHour()-1);
      this.setMinute(59);
      this.setSecond(59);
      return this;
    }
    if(this.getSecond()===0){
      this.setMinute(this.getMinute()-1);
      this.setSecond(59);
      return this;
    }
    this.setSecond(this.getSecond()-1);
    return this;
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"nextMinute",{
  value: function(){
    if(this.getHour()===23 && this.getMinute()===59){
      this.setHour(0);
      this.setMinute(0);
      return this;
    }
    if(this.getMinute()===59){
      this.setHour(this.getHour()+1);
      this.setMinute(0);
      return this;
    }
    this.setMinute(this.getMinute()+1);
    return this;
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"previousMinute",{
  value: function(){
    if(this.getHour()===0 && this.getMinute()===0){
      this.setHour(23);
      this.setMinute(59);
      return this;
    }
    if(this.getMinute()===0){
      this.setHour(this.getHour()-1);
      this.setMinute(59);
      return this;
    }
    this.setMinute(this.getMinute()-1);
    return this;
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"nextHour",{
  value: function(){
    if(this.getHour()===23){
        this.setHour(0);
    }
    else{
      this.setHour(this.getHour()+1);
    }
    return this;
  },
  enumerable:true
});
Object.defineProperty(MyTime.prototype,"previousHour",{
  value: function(){
    if(this.getHour()===0){
        this.setHour(23);
    }
    else{
      this.setHour(this.getHour()-1);
    }
    return this;
  },
  enumerable:true
});
var c=new MyTime(22,56,0);
c.previousHour();
console.log(c.toString());
module.exports=MyTime;
