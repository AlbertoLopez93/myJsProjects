"use strict";

function add(day,quantity,key) {
  if((typeof day!= 'object')||(isNaN(Date.parse(day)))) {
    return false; //parse in case receive object, but not Date()
  }
  if((isNaN(quantity))||(quantity<0)||(Number.isInteger(quantity)!=true)) {
    return false;
  }
  if(typeof key!= 'string') {
    return false;
  }

  if(key=='years') {
    var d=day.getDate();
    d+=(365*quantity);
    day.setDate(d);
  }
  if(key=='quarters') {
    var d=day.getDate();
    d+=(31*3*quantity);
    day.setDate(d);
  }
  if(key=='months') {
    var d=day.getDate();
    d+=(31*quantity);
    day.setDate(d);
  }
  if(key=='days') {
    var today=day.getDate();
    today+=quantity;
    day.setDate(today);
  }
  if(key=='hours') {
    var hour=day.getHours();
    hour+=quantity;
    day.setHours(hour);
  }
  if(key=='minutes') {
    var min=day.getMinutes();
    min+=quantity;
    day.setMinutes(min);
  }
  if(key=='seconds') {
    var sec=day.getSeconds();
    sec+=quantity;
    day.setSeconds(sec);
  }
  if(key=='milliseconds') {
    var ms=day.getMilliseconds();
    ms+=quantity;
    day.setMilliseconds(ms);
  }
  return day.toString();
}

function substract(day,quantity,key) {
  if((typeof day!= 'object')||(isNaN(Date.parse(day)))) {
    return false; //parse in case receive object, but not Date()
  }
  if((isNaN(quantity))||(quantity<0)||(Number.isInteger(quantity)!=true)) {
    return false;
  }
  if(typeof key!= 'string') {
    return false;
  }

  if(key=='years') {
    var d=day.getDate();
    d-=(365*quantity);
    day.setDate(d);
  }
  if(key=='quarters') {
    var d=day.getDate();
    d-=(31*3*quantity);
    day.setDate(d);
  }
  if(key=='months') {
    var d=day.getDate();
    d-=(31*quantity);
    day.setDate(d);
  }
  if(key=='days') {
    var today=day.getDate();
    today-=quantity;
    day.setDate(today);
  }
  if(key=='hours') {
    var hour=day.getHours();
    hour-=quantity;
    day.setHours(hour);
  }
  if(key=='minutes') {
    var min=day.getMinutes();
    min-=quantity;
    day.setMinutes(min);
  }
  if(key=='seconds') {
    var sec=day.getSeconds();
    sec-=quantity;
    day.setSeconds(sec);
  }
  if(key=='milliseconds') {
    var ms=day.getMilliseconds();
    ms-=quantity;
    day.setMilliseconds(ms);
  }
  return day.toString();
}

function deepReverse(e) {
  if(!Array.isArray(e)) {
    return false;
  }
  for(var k in e) {
    if(Array.isArray(e[k])) {
      e[k]=deepReverse(e[k]);
    }
  }
  e=e.reverse();
  return e;
}

var day=new Date('Sep 14, 16');

function every(aray,f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var bool=true;
  verifing: for(var x in aray) {
    bool=f(aray[x],x,aray);
    if(bool!=true) {
      break verifing;
    }
  }
  return bool;
}

function some(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var bool=false;
  verifing: for(var x in aray) {
    bool=f(aray[x],x,aray);
    if(bool!=false) {
      break verifing;
    }
  }
  return bool;
}

function find(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var bool=false;
  for(var x=0; x<aray.length; x++) {
    bool=f(aray[x],x,aray);
    if(bool==true) {
      return x;
    }
  }
  return undefined;
}

function map(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var elements=[];
  for(var u in aray) {
    elements.push(aray[u]);
  }
  for(var v in elements) {
    elements[v]=f(elements[v],v,aray);
  }
  return elements;
}

function filter(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var bool=false;
  var elements=[];
  for(var u in aray) {
    bool=f(aray[u],u,aray);
    if(bool!= false) {
      elements.push(aray[u]);
    }
  }
  return elements;
}

function foreach(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  for(var w in aray) {
    f(aray[w],w,aray);
  }
  return undefined;
}

function concat(aray) {
  if(!Array.isArray(aray)) {
    return false;
  }
  for(var i=1;i<arguments.length;i++) {
    if(!Array.isArray(arguments[i])) {
      aray[aray.length]=arguments[i];
    }
    else {
      var sub=arguments[i];
      for(var k=0;k<sub.length;k++) {
        aray[aray.length]=sub[k];
      }
    }
  }
  return aray;
}

function encrypt(word,n) {
  if(typeof word!='string') {
    return false;
  }
  if(isNaN(n) ||(n<0)||(!Number.isInteger(n))) {
    return false;
  }
  for(var q=1; q<=n; q++) {
    var word1='';
    var word2='';
    for(var h=0; h<word.length; h++) {
      if(h % 2!=0) {
        word1=word1.concat(word[h]);
      }
      else {
        word2=word2.concat(word[h]);
      }
    }
    word=word1.concat(word2);
  }
  return word;
}

describe("Testing every", function () {
  it("I expect [3,2,5,8], e<85", function () {
    var ans=every([3,2,5,8],function(e){return e<85});
    expect(ans).toBe(true);
  });
  it("I expect [3,2,5,8], e<5", function () {
    var ans=every([3,2,5,8],function(e){return e<5});
    expect(ans).toBe(false);
  });
  it("I expect 3, e<5", function () {
    var ans=every(3,function(e){return e<5});
    expect(ans).toBe(false);
  });
  it("I expect [3,2,5,8], 'bye'", function () {
    var ans=every([3,2,5,8],'bye');
    expect(ans).toBe(false);
  });
});

describe("Testing some", function () {
  it("I expect [3,2,5,8], e<5", function () {
    var ans=some([3,2,5,8],function(e){return e<5});
    expect(ans).toBe(true);
  });
  it("I expect [3,2,5,8], e<2", function () {
    var ans=some([3,2,5,8],function(e){return e<2});
    expect(ans).toBe(false);
  });
});

describe("Testing find", function () {
  it("I expect [3,2,5,8], e>4", function () {
    var ans=find([3,2,5,8],function(e){return e>4});
    expect(ans).toBe(2);
  });
  it("I expect [3,2,5,8], e>34", function () {
    var ans=find([3,2,5,8],function(e){return e>34});
    expect(ans).toBe(undefined);
  });
});

describe("Testing map", function () {
  it("I expect [3,2,5,8], e>4", function () {
    var ans=map([3,2,5,8],function(e){return 3*e});
    expect(ans).toEqual([9,6,15,24]);
  });
});

describe("Testing filter", function () {
  it("I expect [3,2,5,8], e>4", function () {
    var ans=filter([3,2,5,8],function(e,index,array){return e<4});
    expect(ans).toEqual([3,2]);
  });
});
