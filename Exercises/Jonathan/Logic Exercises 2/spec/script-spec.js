"use strict"

//tribonacci

function tribonacci(ary, n){
  var x=0, y=0, zero=0, ary2=[], temp=0, cont=0, z=0, w=0, d=0;
        //console.log(ary)

if(Array.isArray(ary)!==true){
    return false;
  }else{
    while(ary[x]>=0){
        x++;
    };
    for(let x=0; x<ary.length; x++){
        if(typeof(ary[x])!=='number'){
            return false;
        }
    }
    if(x===3){
        if(n>3){
            ary2=ary;
            for(y=x; y<n; y++){
                w=0;
                while(ary2[w]>=0){
                  w++;
                  };
                for(z=w-3 ; z<w; z++){
                    temp+=ary[z];
                }
                ary[y]=temp;
                temp=0;
            }
            return ary2;
        }
        else{
          for(y=0; y<n; y++){
                      ary2[y]=ary[y];
          }
          return ary2;
        }
    }else{
      console.log("aqui");
      return ary;
    }
  }
}
console.log(tribonacci([1,1,1], 5));

//valid IP Address

function isValidIPAddress(str1){
var ary=[], lngth=0, ary1=[], ary2=[], ary3=[], ary4=[], cont=0;
var x1=0, x2=0, x3=0, x4=0;

if(typeof str1 !== 'string'){
   return "INVALID IP";
}else{
  lngth=dimension(str1);

  for(var x=0; x<lngth; x++){
      ary[x]=str1[x];
      if((ary[x]==='.')&&(ary[x-1]==='.')||ary[x]===' ')
          cont++;
      if(ary[0]==='.'||ary[0]===' ' )
      cont++;
      }
      if(validNum(ary, lngth))
          cont++;

  if(cont>0){
    return "INVALID IP";
  }else{
    var y=0;
    for(var x=0; x<lngth; x++){
      if(ary[x]==="."){
          y++;
      }
        if((y===0)&&ary[x]!=="."){
            ary1[x1]=ary[x];
            x1++;
        }
        if((y===1)&&ary[x]!=="."){
          ary2[x2]=ary[x];
          x2++;
        }
        if((y===2)&&ary[x]!=="."){
          ary3[x3]=ary[x];
          x3++;
        }
        if((y===3)&&ary[x]!=="."){
          ary4[x4]=ary[x];
          x4++;
        }
    }
    if((convEnt(ary1, x1)<=255)&&(convEnt(ary2, x2)<=255)&&(convEnt(ary3, x3)<=255)&&(convEnt(ary4, x4)<=255)){
        return "VALID IP";
    }
    else{
      return "INVALID IP";
    }// llave cierre else
   }
  }
  function convEnt(ary6, v1){
  var cont1=1, temp=0 ;
    for( var y=0; y<v1-1; y++){
        cont1*=10;
    }
    for(var y=0; y<v1; y++){
        temp+=ary6[y]*cont1;
        cont1/=10;
    }
    return temp;
  }
  function dimension(str2){
  var x=0;
  while(str2[x])
  x++;
  return x;
}
}

console.log(isValidIPAddress("0000000255.255.255.9"));
console.log(isValidIPAddress(Infinity));

function validNum(str5, lngth3){

  for(var x=0; x<lngth3; x++){
      switch (str5[x]) {
        case "A": return true;
          break;
        case "B": return true;
          break;
        case "C": return true;
          break;
        case "D": return true;
          break;
        case "E": return true;
          break;
        case "F": return true;
          break;
        case "G": return true;
          break;
        case "H": return true;
          break;
        case "I": return true;
          break;
        case "J": return true;
          break;
        case "K": return true;
          break;
        case "L": return true;
          break;
        case "M": return true;
          break;
        case "N": return true;
          break;
        case "O": return true;
          break;
        case "P": return true;
          break;
        case "Q": return true;
          break;
        case "R": return true;
          break;
        case "S": return true;
          break;
        case "T": return true;
          break;
        case "U": return true;
          break;
        case "V": return true;
          break;
        case "W": return true;
          break;
        case "X": return true;
          break;
        case "Y": return true;
          break;
        case "Z": return true;
          break;
          case "a": return true;
            break;
          case "b": return true;
            break;
          case "c": return true;
            break;
          case "d": return true;
            break;
          case "e": return true;
            break;
          case "f": return true;
            break;
          case "g": return true;
            break;
          case "h": return true;
            break;
          case "i": return true;
            break;
          case "j": return true;
            break;
          case "k": return true;
            break;
          case "l": return true;
            break;
          case "m": return true;
            break;
          case "n": return true;
            break;
          case "p": return true;
            break;
          case "p": return true;
            break;
          case "q": return true;
            break;
          case "r": return true;
            break;
          case "s": return true;
            break;
          case "t": return true;
            break;
          case "u": return true;
            break;
          case "v": return true;
            break;
          case "w": return true;
            break;
          case "x": return true;
            break;
          case "y": return true;
            break;
          case "z": return true;
            break;
      }
  }
}


//countTwos

function countTwos(n){
var x=0, ary=[], str="", lngt=0, cont2=0;

if(typeof n !== 'number' || Number.isInteger(n) !== true){
    return false;
}else{
  if(n === Infinity){
     return Infinity;
  }else{
      for(x=1; x<=n; x++){
          ary[x]=x;
          str+=ary[x];
      }
      lngt=lngth(str);
      for(x=0; x<lngt; x++){
          if(str[x]=='2'){
            cont2++;
          }
      }
      return cont2;
  }
 }
}

function lngth(str1){
var y=0;
while(str1[y]){
  y++;
}
return y;
}

//ticTacToe

function didSomeoneWon(matrix){
var x=0, y=0, wonH=0, wonV=0, wonD=0;

if(Array.isArray(matrix)!==true){
    return false;
}else{
  while(matrix[x]){
    x++;
  }
  while(matrix[0][y]){
    y++;
  }

  if((x!==3)||(y!==3)){
    return "THE MATRIX IS NOT 3X3 FOR TIC-TAC-TOE GAME";
  }else{
    if((x===3)&&(y===3)){
        //console.log(matrix, x, y);
        matrix=convMin(matrix, x, y);

          if(validEntrys(matrix, x, y)){
            //console.log(matrix);
            wonH=(winH(matrix, x, y));
            wonV=winV(matrix, x, y);
            wonD=winD(matrix, x, y);
            //wonV=(winV(matrix, x, y));
              if(wonH){
                  return "TRUE";
              }if(wonV){
                  return "TRUE"
              }if(wonD){
                  return "TRUE";
              }else{
                return "FALSE";
              }

          }else{
            return "MATRIX CONTAIN INVALID CHARACTER"
          }
    }
  }
 }
}

console.log(didSomeoneWon([['x','X','x'],['o','X','x'],['o','x','O']]));

console.log(didSomeoneWon([['x','X','o'],['o','o','o'],['o','x','x']]));

console.log(didSomeoneWon([['x','x','o'],['x','O','x'],['o','o','o']]));

console.log(didSomeoneWon([['x','x','o'],['x','o','x'],['X','o','o']]));

console.log(didSomeoneWon([['O','O','x'],['x','o','x'],['X','o','o']]));

console.log(didSomeoneWon([['O','x','x'],['x','o','x'],['X','o','X']]));

console.log(didSomeoneWon([['O','x','x'],['x','o','x'],['X','o','o']]));

console.log(didSomeoneWon([['O','x','x'],['o','x','x'],['X','o','o']]));

console.log(didSomeoneWon([['x','O','o'],['o','x','x'],['o','x','O']]));

console.log(didSomeoneWon([['x','O','o'],['o','x','x'],['o',' ','O']]));

console.log(didSomeoneWon([['x','O','o'],['o','X','x'],[1,'x','O']]));

console.log(didSomeoneWon([[1,2,3],[3,4,5,6]]));

console.log(didSomeoneWon([[1,2],[8,9]]));

console.log(didSomeoneWon([[3,4,5,6],[1,2,3]]));

function validEntrys(matrix1, x1, y1){
  var cont=0;
  //console.log(matrix1, y1, x1);
    for(var x=0; x<x1; x++){
      for(var y=0; y<y1; y++){
          if((matrix1[x][y]!=='x')&&(matrix1[x][y]!=='o')&&(matrix1[x][y]!==' ')&&(matrix1[x][y]!=='')){
              cont++;
              //console.log(cont);
          }
      }
    }
if(cont>0){
  return false;
}else{
  return true;
}

}// fin funcion validEntrys

function convMin(matrix2, x2, y2){
  var cont=0;
    for(var x=0; x<x2; x++){
      for(var y=0; y<y2; y++){
          if(matrix2[x][y]==="X"){
              matrix2[x][y]="x";
              //console.log(matrix2[x][y]);
          }
          if(matrix2[x][y]==="O"){
              matrix2[x][y]="o";
              //console.log(matrix2[x][y]);
          }
      }
    }
return matrix2;
}// end of function convMin



function winH(matrix3, x3, y3){
  var cont3=0, cont4=0;

  for(var x=0; x<x3; x++){
    for(var y=0; y<y3; y++){
        if (matrix3[x][y]==='o'){
          cont3++;
        }
        if (matrix3[x][y]==='x'){
            cont4++;
        }
    }
    if (cont3===3){
        return true;
    }else{
      cont3=0;
    }
    if (cont4===3){
        return true;
    }else{
      cont4=0;
    }
  }
}//end of function winV

function winV(matrix4, x4, y4){
  var cont3=0, cont4=0;

  for(var x=0; x<x4; x++){
    for(var y=0; y<y4; y++){
        if (matrix4[y][x]==='o'){
          cont3++;
        }

        if (matrix4[y][x]==='x'){
            cont4++;
        }
    }
    if (cont3===3){
        return true;
    }else{
      cont3=0;
    }
    if (cont4===3){
        return true;
    }else{
      cont4=0;
    }
    //console.log("cont3 v",cont3);
  }
}//end of function winV

function winD(matrix5, x5, y5){
  var contD=0, z=0, d0=0, dx=0, d01=0, dx1=0;
  for(var x=0; x<x5; x++){
      if(matrix5[x][x]==='o'){
          contD++;
      }
  }
  d0=contD;
  contD=0;
  for(var x=0; x<x5; x++){
      if(matrix5[x][x]==='x'){
          contD++;
      }
  }
  dx=contD;
  z=y5;
  contD=0;

  for(var x=0; x<x5; x++){
      if(matrix5[x][z-1]==='x'){
          contD++;
      }
      z--;
  }
  d01=contD;
if((dx||d0||dx1||d01)===3){
  return true;
}else{
  return false;
}
}

//largestSum
function largestSum(ary){
  var temp=0, temp1=0, temp2=0;

  if(Array.isArray(ary) !== true ){
      return false;
  }else{
    for(let x=0; x<ary.length; x++){
        if(typeof(ary[x])!=='number'){
            return false;
        }
    }
      var ary2=[];
      for(let x=0; x<ary.length; x++){
        temp=0;
          for(let y=x; y<ary.length; y++){
              temp+=ary[y];
              if(temp>temp2){
                  temp2=temp;
              }
          }
      }
    return temp1
  }
}

console.log(largestSum([4,-3,1,5,-75,8,-3,-9,7,-5,-15]));
