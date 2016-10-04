function calc(no1,no2,oper)
{
  var value1=parseFloat(no1); //also +no1
  var value2=parseFloat(no2); //also +no2
  if(oper=='+')
    return no1+no2;
  if(oper=='-')
    return no1-no2;
  if(oper=='*'||oper=='x')
    return no1*no2;
  if(oper=='/')
    return no1/no2;
  if(oper=='%'||oper=='mod')
    return no1%no2;

  return "Invalid operation";
}

function howBigNumberIs(n1,n2,n3)
{
  var v=[];
  v[0]=parseFloat(n1);
  v[1]=parseFloat(n2);
  v[2]=parseFloat(n3);

  if(v[0]==NaN || v[1]==NaN || v[2]==NaN)
  {
    return NaN;
  }

  for(var i=1; i<3; i++) //order numbers
  {
    for(var j=1; j<3; j++)
    {
      if(v[j]<v[j-1])
      {
        var helper=v[j];
        v[j]=v[j-1];
        v[j-1]=helper;
      }
    }
  }
  var ans=Math.pow(v[2],v[0]);
  ans=Math.pow(ans,v[1]);

  if(ans<Number.MAX_SAFE_INTEGER)
    return "OK";
  else if(ans==Number.POSITIVE_INFINITY)
    return "To much";
  else
    return "WARNING";
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs
}
