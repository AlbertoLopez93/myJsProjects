"use strict"
function tribonnaci(ary,n){
  if (seq instanceof Array && (typeof n === 'number' || n instanceof Number)){
    let x = [];
    if( n === 0 ){
      return x;
    }else if(n<=ary.length) {
      return ary;
    } else {

      if(ary.length <2){
        let r = [];
        r[0] = ary[0];s
        r[n-1] = ary[n-1];
        n--;

        if(n>0){
          r[n-1] = ary[n-1];
        } return r;
      } else {

        for(let i=3;i<n;i++){
          ary[ary.length] = ary[i-3]+ary[i-2]+ary[i-1];
        }return ary;
      }

    }
  }

  function isValidIpAddress(str1){
  if (typeof str1 === 'string' || str1 instanceof String){
    let temp1 = [];
    let temp2 = "";
      for (let i = 0; i < str1.length ; i++) {
          temp1[i] = str1[i];

        if ((str1[i]===".")  {
          temp2=temp1(temp1.length);

        for (let i = 0; i < str1.length; i++) {
          t+=temp2 += temp1[i];

        }else {

        }
        }console.log(parseInt(temp2));
          return temp1;

      }
    }

  }


  function countTwos(n) {
    if (typeof n === 'number' || n instanceof Number) {
      let cont = 0;
      for (let i = 0, str; i <= n; i++) {
        str = "" + i;
        for (let c = 0, len = str.length; c < len; c++) {
          if (str[c] === '2') {
            cont++;
          }
        }
      }
      return cont;
    }
    return false;
  }

  function largestSum(numbers) {
    if (numbers instanceof Array) {
      var len = numbers.length,
      m = null,
      a, b, cont, i, j;
      for (i = 0; i < len - 1; i++) {
        cont = numbers[i];
        for (j = i + 1; j < len; j++) {
          cont += numbers[j];
          if (m === null || cont > m) {
            m = cont;
            a = i;
            b = j;
          }
        }
      }
      return m;
    }
    return false;
  }

  describe("tribonacci fucntion", function () {

    it("tribonacci", function () {
        expect(tribonacci).toBeDefined();
    });
    it("no funciona con string", function () {
        expect(tribonacci([1, 2, 3], '2')).toEqual([]);
        expect(tribonacci('a', 'a')).toEqual([]);
        expect(tribonacci('a', 1)).toEqual([]);

    });
    it("no funciona con null", function () {
        expect(tribonacci([1, 2, 3], null)).toEqual([]);
        expect(tribonacci(null, 1)).toEqual([]);
        expect(tribonacci(null, null)).toEqual([]);
    });
    it("no funciona con booleans", function () {
        expect(tribonacci([1, 2, 3], true)).toEqual([]);
        expect(tribonacci(false, 1)).toEqual([]);
        expect(tribonacci(false, true)).toEqual([]);
    });
    it("no funciona con undefineds", function () {
        expect(tribonacci([1, 2, 3], undefined)).toEqual([]);
        expect(tribonacci(undefined, 1)).toEqual([]);
        expect(tribonacci(undefined, undefined)).toEqual([]);
    });
    it("no funciona con functions", function () {
        expect(tribonacci([1, 2, 3], function () {})).toEqual([]);
        expect(tribonacci(function () {}, 1)).toEqual([]);
        expect(tribonacci(function () {}, function () {})).toEqual([]);
    });

  });

  describe("test isValidIPAddress ", function () {
    it("no funciona con booleans", function () {
      expect(isValidIPAddress(true)).toBe(false);
  });

  it("no funciona con nulls", function () {
      expect(isValidIPAddress(null)).toBe(false);
  });

  it("no funciona con undefineds", function () {
      expect(isValidIPAddress(undefined)).toBe(false);
  });
  it("no funciona con arrays", function () {
      expect(isValidIPAddress([])).toBe(false);
  });
  it("no funciona con functions", function () {
      expect(isValidIPAddress(function () {})).toBe(false);
  });
  it("should return true", function () {
      expect(isValidIPAddress('255.255.255.255')).toBe(true);
      expect(isValidIPAddress('0.0.0.0')).toBe(true);
  });
  });



      describe("countTwos", function () {
        it("no funciona con objects", function () {
            expect(countTwos({})).toBe(false);
        });
        it("no funciona con undefineds", function () {
            expect(countTwos(undefined)).toBe(false);
        });
        it("no funciona con arrays", function () {
            expect(countTwos([])).toBe(false);
        });
        it("no funciona con functions", function () {
            expect(countTwos(function () {})).toBe(false);
        });
        it("no funciona con booleans", function () {
            expect(countTwos(true)).toBe(false);
        });

        it("no funciona con nulls", function () {
            expect(countTwos(null)).toBe(false);
        });
        it("no funciona con strings", function () {
            expect(countTwos('a')).toBe(false);
        });
        it("regresa la suma de dos", function () {
            expect(countTwos(1)).toBe(0);
            expect(countTwos(11)).toBe(1);
            expect(countTwos(12)).toBe(2);
      });



      });

    });
