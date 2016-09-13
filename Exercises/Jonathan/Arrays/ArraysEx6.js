/****

timestamp: 1473190637000

****/

var strMorse=".--. .- - ---     -- .--. .- - ---     -- "
var strMorse2=['.','-','-','.',' ','.','-',' ','-',' ','-','-',' ']


var res=[], temp="", temp1="", espace, cont, cont2=0, res2=[], z=0;
var reStr="", a;

function morseDec(str){

if(typeof(str)==="string"){
  console.log(str);
  var strM2= str.split(" ");
    res = strM2.map(function(obj){
      if(obj!==""){
          temp=obj;
          temp1=MORSE.find(compMr);
            return temp1.char;
        }if(obj===" "){
          return " ";
        }else{
          return "";
        }
      });

res.forEach(space, cont);

res2.forEach(conct, cont);

return reStr;
  }
if(typeof(str)==="object"){
    console.log(str);
    var strM2= str.join('');
    strM2=strM2.split(" ");
    res = strM2.map(function(obj){
        if(obj!==""){
          temp=obj;
          temp1=MORSE.find(compMr);
            return temp1.char;
        }if(obj===" "){
          return " ";
        }else{
          return "";
        }
      });

//console.log(res);

res.forEach(space, cont);

res2.forEach(conct, cont);

return reStr;
  }

}

console.log(morseDec(strMorse2));

function compMr(o){

    return temp===o.morse;
}

function space(a, i){
    if(a!==''){
        res2[res2.length]=a;
    }
    if(a===''){
        cont2++;
        if(cont2===4){
          res2[res2.length]=" ";
            //z++;
            cont2=0;
        }
        if(cont2>4){
          cont2=0;
        }
    }
}

function conct(a, i){
    reStr+=a;
}
