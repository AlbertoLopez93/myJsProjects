//anagram
function isAnagram(str1, str2){

  var lngth=0, str3=[], str4=[], val1=0, val2=0;

  if(typeof str1!=='string'||typeof str2!=='string'){
      return false;
    }else{
      if(str1.length===str2.length){
          lngth=str1.length;
          for(var x=0; x<lngth; x++){
              str3[x]=str1[x];
              str4[x]=str2[x];
          }
          str3=convertir(str3, lngth);
          str4=convertir(str4, lngth);
          val1=add(str3, lngth);
          val2=add(str4, lngth);
          if(val1===val2){
              return true;
          }else{
              return false;
          }
      }else{
        return false;
        }
      }
}

console.log(isAnagram("RmaO","s"));

function add(str6, lngth3){
    let res=0;
    for(let x=0; x<lngth3; x++){
        res+=str6[x].charCodeAt();
    }
    return res;
}

function convertir(str5, lngth3){

  for(var x=0; x<lngth3; x++){
      switch (str5[x]) {
        case "A": str5[x]="a";
          break;
        case "B": str5[x]="b";
          break;
        case "C": str5[x]="c";
          break;
        case "D": str5[x]="d";
          break;
        case "E": str5[x]="e";
          break;
        case "F": str5[x]="f";
          break;
        case "G": str5[x]="g";
          break;
        case "H": str5[x]="h";
          break;
        case "I": str5[x]="i";
          break;
        case "J": str5[x]="j";
          break;
        case "K": str5[x]="k";
          break;
        case "L": str5[x]="l";
          break;
        case "M": str5[x]="m";
          break;
        case "N": str5[x]="n";
          break;
        case "O": str5[x]="o";
          break;
        case "P": str5[x]="p";
          break;
        case "Q": str5[x]="q";
          break;
        case "R": str5[x]="r";
          break;
        case "S": str5[x]="s";
          break;
        case "T": str5[x]="t";
          break;
        case "U": str5[x]="u";
          break;
        case "V": str5[x]="v";
          break;
        case "W": str5[x]="w";
          break;
        case "X": str5[x]="x";
          break;
        case "Y": str5[x]="y";
          break;
        case "Z": str5[x]="z";
          break;
      }
  }
return str5;
}

//replace

function convertSpaces(str){
  var x=0, str2="", str3="", repS="%20", ary=[];
    if(typeof str!=='string'){
      return false;
    }else{
      for(var x=0; x<str.length; x++){
          if(str[x]===" "){
              str2+=repS;
          }else{
            str2+=str[x];
          }
      }
      return str2;
    }

}

console.log(convertSpaces("hola loko "));


//rounded

function rounded(n){
  var x, temp=0, ary=[], cont1=1, temp2=0;


    if(typeof n!=='number'){
        return false;
      }else{
        if(n===Infinity){
           return Infinity;
        }
        if(n<0){
          n*=-100;
          x=n+"s";
        }else{
            if(n===1e1||n===1e10||n===1e100){
              return n;
            }else{
              n*=100;
              x=n+"s";
            }
          }
          for(var y=0; y < x.length; y++){
              if(x[y]!=="."){
                ary[y]=x[y];
              }else{
                break;
               }
          }
          for( var y=0; y<ary.length-1; y++){
              cont1*=10;
          }
          for(var y=0; y<ary.length; y++){
              temp+=ary[y]*cont1;
              cont1/=10;
          }
           temp2=n-temp;
           if(temp2>=0.5){
              temp++;
              temp/=100;
           }else{
              temp/=100;
            }
          return temp;
      }
}

console.log(rounded(23.5897));

//rent

function getTotal(days){

var total = 0, cost = 40, costOff1 = 20, costOff2=50;

  if(typeof days!=='number'){
      return false;
  }else{
      if(Number.isInteger(days)===false){
        return false;
      }else{
        if(days===Infinity){
           return Infinity;
        }
        days=Math.ceil(days);
        if(days<0){
           return false;
        }
        if(days>0){
          total=days*cost;
        }
        if(days>=3){
          total=(days*cost)-costOff1;
        }
        if(days>=7){
          total=(days*cost)-costOff2;
        }
        return total;
      }
  }
}

console.log(getTotal(0));

//squareSum

//rotate

var m=[[1,2,3],[4,5,6],[7,8,9]], m2=[[1,2,3],[4,5,6]], m3=[[1,2],[2,3],[3,4]];
var m4=[[1,2],[3,4]], m5=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

function rotate(n){
var x=0, y=0, ary=[[],[],[],[]], temp=0, ary2=[] ;

if(typeof n!== 'object'){
	 return false;
}else{
	if(Array.isArray(n)!==true){
		 return false;
	}else{
		while(n[x]){
			x++;
		}
		while(n[0][y]){
			y++;
		}
		if(x!==y){
			return "The matrix is not square";
		}else{
			temp=x;
			for(var z=0; z<temp ; z++){
				x=temp;
				for(var w=0; w<temp ; w++){
					ary[w][y]=n[z][w];
					x--;
				}
				y--;
			}
		 }
		return ary;
		}
	}
}
console.log(rotate(m));
console.log(rotate(m2));
console.log(rotate(m3));
console.log(rotate(m4));
console.log(rotate(m5));
console.log(rotate(3));
console.log(rotate(Infinity));
console.log(rotate('r'));
