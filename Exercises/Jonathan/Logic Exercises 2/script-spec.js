function flatten(){
  var res=[];
  if (ary.length<1) {
      return res;
  }
  for(var x = 0; x<ary.length; x++){
      if(Array.isArray(ary[x])){
        res = res.concat(flatten(ary[x]));
      }else {
        res = res.concat(ary[x]);
      }
  }
  return res;
}


console.log(flatten([1,2,3]));
