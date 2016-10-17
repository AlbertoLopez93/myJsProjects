var MyTime = require("../MyTime");
//"use strict";
describe("MyTime Class", function () {
    var time = new MyTime(1, 2, 3);
    var almosttime = new MyTime(23,59,59);
    var prueba =  new MyTime(10,10,10);

    it("MyTime class should be defined", function () {
        expect(MyTime).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an hour property as private", function () {
            expect(time.hour).toBe(undefined);
        });
        it("should have a minute property as private", function () {
            expect(time.minute).toBe(undefined);
        });
        it("should have a second property as private", function () {
            expect(time.second).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("setTime method", function () {
            it("should have a method called setTime", function () {
                expect(time.setTime).toBeDefined();
                expect(typeof time.setTime).toBe('function');
            });
            // it("should set a new hour at the instance", function () {
            //     expect(account1.getID()).toBe(1);
            // });
        });
        describe("getHour method", function () {
          it("should be defined", function () {
            expect(time.getHour).toBeDefined();
            expect(typeof time.getHour).toBe("function");
          });
          it("should return the hour of the instance", function () {
            expect(time.getHour()).toBe(1);   //HERE++++++++++++++++++++++++++++++++++++++++++++++
          });
        });
        describe("getMinute method", function () {
          it("should be defined", function () {
            expect(time.getMinute).toBeDefined();
            expect(typeof time.getMinute).toBe("function");
          });
          it("should return the minutes of the instance", function () {
            expect(time.getMinute()).toBe(2);
          });
        });
        describe("getSecond method", function () {
          it("should be defined", function () {
            expect(time.getSecond).toBeDefined();
            expect(typeof time.getSecond).toBe("function");
          });
          it("should return the seconds of the instance", function () {
            expect(time.getSecond()).toBe(3);
          });
        });
        describe("setHour method", function () {
          it("should be defined", function() {
            expect(time.setHour).toBeDefined();
            expect(typeof time.setHour).toBe("function");
          });
          it("should set a new hour to the instance", function() {
            time.setHour(5);
            expect(time.getHour()).toBe(5);
          });
        });
        describe("setMinute method", function() {
          it("should be defined", function() {
            expect(time.getMinute).toBeDefined();
            expect(typeof time.getMinute).toBe("function");
          });
          it("shuold set a new minute to the instance", function() {
            time.setMinute(40);
            expect(time.getMinute()).toBe(40);
          });
        });
        describe("setSecond method", function() {
          it("should be defined", function() {
            expect(time.getSecond).toBeDefined();
            expect(typeof time.getSecond).toBe("function");
          });
          it("should set a new second to the instance", function() {
            time.setSecond(15);
            expect(time.getSecond()).toBe(15);
          });
        });
        describe("toString method", function() {
          it("should be defined", function() {
            expect(time.toString).toBeDefined();
            expect(typeof time.toString).toBe("function");
          });
          it("should return a string following the pattern hh:mm:ss, with leading zeros", function() {
            expect(time.toString()).toBe("05:40:15");
          });
        });
        describe("nextSecond method", function() {
          it("should be defined", function() {
            expect(time.nextSecond).toBeDefined();
            expect(typeof time.nextSecond).toBe("function");
          });
          it("should increase one second the time of the instance", function() {
            time.nextSecond();
            expect(time.getSecond()).toBe(16);
          });
          it("should increase the minute and hour, if needed when one second is increased", function() {
            almosttime.nextSecond();
            expect(almosttime.getHour()).toBe(0);
            expect(almosttime.getMinute()).toBe(0);
            expect(almosttime.getSecond()).toBe(0);
          });
        });
        describe("previousSecond method", function() {
            it("should be defined", function() {
            expect(time.previousSecond).toBeDefined();
            expect(typeof time.previousSecond).toBe("function");
            });
            it("should decrease the number of seconds of the instance", function() {
            time.previousSecond();
            expect(time.getSecond()).toBe(15);
            });
            it("should decrease the minute and hour if needed when one second is decreased", function() {
            time.previousSecond();
            expect(time.getHour()).toBe(5);
            expect(time.getMinute()).toBe(40);
            expect(time.getSecond()).toBe(14);
            });
            it("should decrease the number of seconds of the instance", function() {
            almosttime.previousSecond();
            almosttime.previousSecond();
            expect(almosttime.getSecond()).toBe(58);
            });
            it("should decrease the minute and hour if needed when one second is decreased", function() {
            time.previousSecond();
            expect(almosttime.getHour()).toBe(23);
            expect(almosttime.getMinute()).toBe(59);
            expect(almosttime.getSecond()).toBe(58);
            });
        });
        describe("previousMinute method", function() {
            it("should decrease the number of minutes of the instance", function() {
            almosttime.previousMinute();
            expect(almosttime.getMinute()).toBe(58);
            });
            it("should decrease the minute and hour if needed when one second is decreased", function() {
            almosttime.previousMinute();
            expect(almosttime.getHour()).toBe(23);
            expect(almosttime.getMinute()).toBe(57);
            expect(almosttime.getSecond()).toBe(58);
            });
        });
        describe("nextMinute method", function() {
            it("should increase the number of minutes of the instance", function() {
            almosttime.nextMinute();
            almosttime.nextMinute();
            expect(almosttime.getMinute()).toBe(59);
            });
            it("should increase the minute and hour if needed when one second is decreased", function() {
            almosttime.nextMinute();
            expect(almosttime.getHour()).toBe(0);
            expect(almosttime.getMinute()).toBe(0);
            expect(almosttime.getSecond()).toBe(58);
            });
        });
        describe("previousHour method", function() {
            it("should decrease the number of hours of the instance", function() {
            almosttime.previousHour();
            expect(almosttime.getHour()).toBe(23);
            });
            it("should decrease the minute and hour if needed when one second is decreased", function() {
            almosttime.previousHour();
            expect(almosttime.getHour()).toBe(22);
            expect(almosttime.getMinute()).toBe(0);
            expect(almosttime.getSecond()).toBe(58);
            });
        });
        describe("nextMinute method", function() {
            it("should increase the number of minutes of the instance", function() {
            almosttime.nextHour();
            almosttime.nextHour();
            expect(almosttime.getHour()).toBe(0);
            });
            it("should increase the minute and hour if needed when one second is decreased", function() {
            almosttime.nextHour();
            expect(almosttime.getHour()).toBe(1);
            expect(almosttime.getMinute()).toBe(0);
            expect(almosttime.getSecond()).toBe(58);
            });
        });
    });
});
