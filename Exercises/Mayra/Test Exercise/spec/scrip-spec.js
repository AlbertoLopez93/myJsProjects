function suma(a,b){
return a+b;
}
function resta(a,b){
return a-b;
}
function multiplicacion(a,b){
return a*b;
}
function divicion(a,b){
return a/b;
}
describe("testing suma",function(){
it ("Espero que 2+2 sea 4",function(){
var res=suma(2,2);
expect(res).toBe(4);
});
it ("Espero que 3-2 sea 1",function(){
var res=suma(3,-2);
expect(res).toBe(1);
});
it ("Espero que 3-2 sea 1",function(){
var res=suma("hola","Lorenzo");
expect(res).toBe(NaN);
});
});
describe("testing divicion",function(){
it ("Espero que 2/2 sea 1",function(){
var res=suma(2,2);
expect(res).toBe(0);
});
it ("Espero que 2/0 sea infinity",function(){
var res=suma(2,0);
expect(res).toBe(infinity);
});
});
describe("testing resta",function(){
it ("Espero que 2-2 sea 0",function(){
var res=suma(2,2);
expect(res).toBe(0);
});
it ("Espero que 3-"L" sea NaN",function(){
var res=suma(3,"L");
expect(res).toBe(NaN);
});
});
describe("testing multiplicacion",function(){
it ("Espero que 2*2 sea 4",function(){
var res=suma(2,2);
expect(res).toBe(4);
});
it ("Espero que 2+"S" sea NaN",function(){
var res=suma(3,"S");
expect(res).toBe(NaN);
});
});
