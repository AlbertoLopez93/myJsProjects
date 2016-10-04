function unicode(str) {
  let val="A";
  let aux=[];
  for (let i = 0; i < str.length; i++) {
      aux[aux.length]= str.codePointAt(i);
  }

return aux;
}

function returnAllIndex(str1, str2) {
let band=str1.indexOf(str2);
  if (band>=0) {
    if (str1.indexOf(str2,band+1)>=0) {
      let aux=[],x=0;
       while (str1.indexOf(str2,x)>=0){
               x=str1.indexOf(str2,x);
               aux[aux.length]=x;
               x++;
           }
       band=aux;
      }
    else
       band=1;
  }

return band;
}

function capitalize(str) {
let str1=str.trim();
let cad=str1.split(" ");
let aux="";
for (let i = 0; i < cad.length; i++) {
     cad[i]=cad[i].split("");
   }
for (let i = 0; i < cad.length; i++) {
     cad[i][0]=cad[i][0].toUpperCase();
     cad[i][cad[i].length-1]=cad[i][cad[i].length-1].toLowerCase();
  }
  str1="";
for (let i = 0; i < cad.length; i++) {
    for (let j = 0; j < cad[i].length; j++) {
         str1+=cad[i][j];
       }
    if (i<cad.length-1) {
         str1+=" ";
       }
 }
 cad=str1;
return cad;

}

function closerIndex(str1, str2) {
let pos= str1.indexOf(str2);
let pos2=str1.lastIndexOf(str2);
let result;
if (pos===str1.length-pos2-1) {
    result=0;
  }
else {
   if (pos<str1.length-pos2-1) {
       result=1;
     }
   if (pos>str1.length-pos2-1) {
         result=-1;
       }
  }

return result;
}

function reverseWords(str) {
  let dictionary=["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"];
  let str1=str.trim();
  let cad=str1.split(" ");
  let aux="",result="";
  for (let i = 0; i < cad.length; i++) {
       cad[i]=cad[i].split("");
     }
  for (let i = 0; i < cad.length; i++) {
       let k=cad[i].length-1;
       aux="";
       for (let j = k; j >=0; j--) {
           aux+=cad[i][j];
          }
       cad[i]=aux;
     }
result+=cad[0];
for (let i = 1; i < cad.length; i++) {
    result+=" "+cad[i];
}

for (var i = 0; i < 10; i++) {
  result = result.replace(""+i, dictionary[i]);
}

return result;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
