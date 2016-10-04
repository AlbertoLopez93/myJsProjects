function transformToUnicode(str){
var x=0, ary=[];
for (x=0; x<str.length; x++){
      ary[x]=str.codePointAt( x );
}

return ary;
}

function returnAllIndex(str1, str2){
  var x=0, ary=[], val=0, ind=0, cont=0, indx=[];
  for(x=0; x<str1.length; x++){
    ary[x]=str1[x];
  }
val=str1.includes(str2);
if(val){
  //console.log(val);
      for(x=0; x<str1.length; x++){
        for(var y=0; y<str2.length;y++){
          if(str1[x]==str2[y]){
              indx[cont]=x;
              ind=x;
              cont++;
          }
        }
      }
      if(cont>0&&cont<2){
         return ind;
      }if(cont>1){
          return indx;
      }
}
if(val!==true){
      return -1;
}
}

function capitalize(str1){
  var sub="", slc="", all="" ;

      sub=str1[0];
      slc=str1.slice(1);

      sub=sub.toUpperCase();

      slc=slc.toLowerCase();

      all=sub.concat(slc);

      return all;
}


function closerIndex(str, str1){
var first=0, last=0, first1=0, last1=0, contL=0, ary=[];
first=str.indexOf(str1);
last=str.lastIndexOf(str1);
ary=str.split("","");

if(str.includes(str1)){
    if(first===last){
      first++;
      last++;
        if((str.length-last)>first){
            return 1;
      }if((str.length-last)===first){
        return "draw";
      }else{
        return -1;
      }
    }else{
      first++;
      last++;
      if((str.length-last)+1===first){
          return "draw";
    }if((str.length-last)<first){
      return -1
    }else{
      return 1;
    }
    }
}else{
  return undefined;
}//end if(str.includes(str1))
}

function reverseWords(str){
  var x=0, ary=[], str1="", ary2=[];
  ary=str.split(" ");
for(x=0; x<ary.length; x++){
    ary[x]=reverse(ary[x]);
  }
for(x=0; x<ary.length; x++){
    for(var y=0; y<ary[x].length; y++){
        str1+=ary[x][y];
    }
    str1+=" ";
}
for(x=0; x<str1.length; x++){
    ary[x]=str1[x];
}
  for(x=0; x<ary.length; x++){
      if(ary[x]===0){
        ary[x]="ZERO"
      }
      if(ary[x]==1){
        ary[x]="ONE"
      }
      if(ary[x]==2){
        ary[x]="TWO"
      }
      if(ary[x]==3){
        ary[x]="THREE"
      }
      if(ary[x]==4){
        ary[x]="FOUR"
      }
      if(ary[x]==5){
        ary[x]="FIVE"
      }
      if(ary[x]==6){
        ary[x]="SIX"
      }
      if(ary[x]==7){
        ary[x]="SEVEN"
      }
      if(ary[x]==8){
        ary[x]="EIGHT"
      }
      if(ary[x]==9){
        ary[x]="NINE"
      }
  }
str1="";
  for(var y=0; y<str.length; y++){
      str1+=ary[y];
  }
return str1;
}
console.log(reverseWords("anita2kmfk3 kjbkjhb mn7 675ngf"));
function reverse(str2){
  var str3="";
  for(var y=str2.length-1; y>=0; y--){
      str3+=str2[y];
  }
  return str3;
}

module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
