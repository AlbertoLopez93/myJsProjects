function transformToUnicode(str1) {
  var str1, ary=[],ary2=[];
  ary=str1.split("");
  for (var i = 0; i < ary.length; i++) {
    ary2[i]=ary[i].codePointAt();
  }
  return ary2;
}

function capitalize(cadena) {
var ary=[],ary2=[],aux,s1,s2,str="";

ary=cadena.split(" ");
for (var i = 0; i < ary.length; i++) {
    ary2[i]=ary[i].toUpperCase();
}
for (var i = 0; i < ary.length; i++) {
    s1=ary[i];
    s2=ary2[i];
    aux=s1.substring(1)
    s1=s2[0]+aux;
    ary[i]=s1;
    
}
for (var i = 0; i < ary.length; i++) {
    str=str+" "+ary[i];
}

return str;
}

function convertSpaces(str1) {
  var string1= str1.split("");
   string2="";
  for (var i = 0; i < string1.length; i++) {
    if(string1[i]==="1"){
      string1[i]="ONE";
     }
    if(string1[i]==="2"){
   string1[i]="TWO";
     }
     if(string1[i]==="3"){
    string1[i]="TREE";
      }
      if(string1[i]==="4"){
     string1[i]="FOUR";
       }
       if(string1[i]==="5"){
      string1[i]="FIVE";
        }
        if(string1[i]==="6"){
       string1[i]="SIX";
         }
         if(string1[i]==="7"){
        string1[i]="SEVEN";
          }
          if(string1[i]==="8"){
         string1[i]="EIGHT";}
         if(string1[i]==="9"){

        string1[i]="NINE";
           }
           if(string1[i]==="0"){

          string1[i]="ZERO";
             }

      string2=string2+string1[i];
  }

  return string2;

}
function  reverseWords (cadena) {
  var cadena,cadena2="",str="";
  for (var i = cadena.length-1; i >= 0; i--) {
    cadena2+=cadena[i]
  }
  convertSpaces(cadena2);
  return string2;
}



module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
