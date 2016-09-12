/****

timestamp: 1472838899000

****/

function createCoords(n)
{
  var ans=[];
  for(var i=0; i<n; i++)
  {
    var coords=[];
    var nex=100*i; //declared for having array always ordered
    coords[0]=(Math.random()*100); //random between 0 and 100
    coords[0]=parseInt(coords[0]);
    coords[0]+=nex;

    coords[1]=(Math.random())*100; //random between 0 and 100
    coords[1]=parseInt(coords[1]);

    ans[i]=coords;
  }
  return ans;
}

