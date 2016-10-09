"use strict";

function MyTime(hour,minute,second) {
  hour = hour ||0;
  minute = minute ||0;
  second = second ||0;

  Object.defineProperty(this,'getHour', {value:function(){return hour;} ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'setHour',
  {value:function(h){
    if(!Number.isInteger(h)){console.log('Invalid hour!');}
    else if(h<0 || h>23){console.log('Invalid hour!');}
    else{hour=h}
  } ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'getMinute', {value:function(){return minute;} ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'setMinute',
  {value:function(m){
    if(!Number.isInteger(m)){console.log('Invalid minute!');}
    else if(m<0 || m>59){console.log('Invalid minute!');}
    else{minute=m}
  } ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'getSecond', {value:function(){return second;} ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'setSecond',
  {value:function(sec){
    if(!Number.isInteger(sec)){console.log('Invalid second!');}
    else if(sec<0 || sec>59){console.log('Invalid second!');}
    else{second=sec}
  } ,
  enumerable:true, configurable:true, writable:false});
}

Object.defineProperty(MyTime.prototype,'setTime',
  {value:function(hour,min,sec){
    if(!Number.isInteger(hour) || !Number.isInteger(min) || !Number.isInteger(sec)){
      console.log('Invalid hour, minute, or second!')
    }
    else if(hour<0 || hour>23){console.log('Invalid hour, minute, or second!');}
    else if(min<0 || min>59){console.log('Invalid hour, minute, or second!');}
    else if(sec<0 || sec>59){console.log('Invalid hour, minute, or second!');}
    else{
      this.setHour(hour);this.setMinute(min);
      this.setSecond(sec);
    }
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'toString',
  {value:function(){
    let h = this.getHour();
    if(h<10){h= '0'+h;}
    let min = this.getMinute();
    if(min<10){min= '0'+min;}
    let sec = this.getSecond();
    if(sec<10){sec= '0'+sec;}
    return h+':'+min+':'+sec;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'nextHour',
  {value:function(){
    let hour= this.getHour();
    if(hour<23){this.setHour(hour+1);}
    else{this.setHour(0);}
    return this;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'nextMinute',
  {value:function(){
    let min= this.getMinute();
    if(min<59){this.setMinute(min+1);}
    else{
      this.setMinute(0);
      this.nextHour();
    }
    return this;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'nextSecond',
  {value:function(){
    let sec= this.getSecond();
    if(sec<59){this.setSecond(sec+1);}
    else{
      this.setSecond(0);
      this.nextMinute();
    }
    return this;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'previousHour',
  {value:function(){
    let hour= this.getHour();
    if(hour>0){this.setHour(hour-1);}
    else{this.setHour(23);}
    return this;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'previousMinute',
  {value:function(){
    let min= this.getMinute();
    if(min>0){this.setMinute(min-1);}
    else{
      this.setMinute(59);
      this.previousHour();
    }
    return this;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyTime.prototype,'previousSecond',
  {value:function(){
    let sec= this.getSecond();
    if(sec>0){this.setSecond(sec-1);}
    else{
      this.setSecond(59);
      this.previousMinute();
    }
    return this;
  },
  enumerable:true, configurable:true, writable:false});

module.exports = MyTime;

/*var clock=new MyTime(4,8,6);
console.log(clock.toString());
clock.setTime(9,23,42);
console.log(clock.toString());
clock.setTime(23,59,59);
console.log(clock.nextSecond().toString());
console.log(clock.prevSecond().toString());*/
