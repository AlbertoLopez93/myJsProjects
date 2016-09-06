function suma (numero1, numero2){
  if (numero1&&numero2) {
    return numero1+numero2;
  }


}



describe("Testing suma", function(){
  it("Espero que 1.2 + 1.1 sea 2.3", function(){
      var res = suma(0.2,0.1);
      expect(res).toBe(0.3);
  });


    it("Espero que 2+2 sea 4", function(){
        var res = suma(2,2);
        expect(res).toBe(4);
    });
    it("Espero que 2+2 sea 4", function(){
        var res = suma(2,2);
        expect(res).toBe(4);
    });


});
