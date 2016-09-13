/****

timestamp: 1472843305000

****/

function createCoords(n){
  var a=[],temp,x=[];

  for(var i=0;i<n;i++){
    a[i]=[];
    temp=Math.floor(Math.random()*100);
    if(i!==0){
        a[i]=temp+a[i-1]+1;
    }
    else{
      a[i]=temp;
    }
  }
  for(var i=0;i<n;i++){
    a[i]=a[i]+",";
    temp=Math.floor(Math.random()*100);
    a[i]=a[i]+temp;
  }

return a;
}
console.log(createCoords(6));
