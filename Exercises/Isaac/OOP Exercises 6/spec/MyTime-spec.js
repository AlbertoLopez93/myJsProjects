(function() {
    'use strict';

    let MyTime = require('../MyTime');

    describe('MyTime class', function() {
        let myTime1,
            myTime2,
            myTime3,
            data2 = {
                hour: 23,
                minute: 59,
                second: 59
            },
            data3 = {
                hour: 12,
                minute: 0,
                second: 0
            };

        beforeEach(function() {
            myTime1 = new MyTime();
            myTime2 = new MyTime(data2.hour, data2.minute, data2.second);
            myTime3 = new MyTime(data3.hour, data3.minute, data3.second);
        });

        it('should be defined', function() {
            expect(MyTime).toBeDefined();
        });

        describe('Prototype', function() {
            describe('Descriptors', function() {
                let descriptors;
                it('should have descriptors', function() {
                    descriptors = Object.getOwnPropertyDescriptor(MyTime, 'prototype');
                    //console.log(descriptors);
                    expect(descriptors).toBeDefined();
                });
                it('should NOT be writable', function() {
                    expect(descriptors.writable).toBeDefined();
                    expect(descriptors.writable).not.toBe(true);
                });
                it('should NOT be enumerable', function() {
                    expect(descriptors.enumerable).toBeDefined();
                    expect(descriptors.enumerable).not.toBe(true);
                });
                it('should NOT be configurable', function() {
                    expect(descriptors.configurable).toBeDefined();
                    expect(descriptors.configurable).not.toBe(true);
                });
            });
        });

        describe('Private properties', function() {
            it('should have "hour" as private property', function() {
                expect(myTime1.hour).toBeUndefined();
            });

            it('should have "minute" as private property', function() {
                expect(myTime1.minute).toBeUndefined();
            });

            it('should have "second" as private property', function() {
                expect(myTime1.second).toBeUndefined();
            });
        });

        describe('Methods', function() {
            describe('getHour()', function() {
                it('should be defined', function() {
                    expect(myTime1.getHour).toBeDefined();
                    expect(typeof myTime1.getHour).toBe('function');
                });
                describe('Descriptors', function() {
                    let descriptors;
                    it('should have descriptors', function() {
                        descriptors = Object.getOwnPropertyDescriptor(myTime1, 'getHour');
                        //console.log(descriptors);
                        expect(descriptors).toBeDefined();
                    });
                    it('should NOT be writable', function() {
                        expect(descriptors.writable).toBeDefined();
                        expect(descriptors.writable).not.toBe(true);
                    });
                    it('should NOT be enumerable', function() {
                        expect(descriptors.enumerable).toBeDefined();
                        expect(descriptors.enumerable).not.toBe(true);
                    });
                    it('should NOT be configurable', function() {
                        expect(descriptors.configurable).toBeDefined();
                        expect(descriptors.configurable).not.toBe(true);
                    });
                });
                describe('Function', function() {
                    it('should return the hour', function() {
                        expect(myTime1.getHour()).toBe(0);
                        expect(myTime2.getHour()).toBe(23);
                        expect(myTime3.getHour()).toBe(12);
                    });
                });
            });

            describe('getMinute()', function() {
                it('should be defined', function() {
                    expect(myTime1.getMinute).toBeDefined();
                    expect(typeof myTime1.getMinute).toBe('function');
                });
                it('should return the minute', function() {
                    expect(myTime1.getMinute()).toBe(0);
                    expect(myTime2.getMinute()).toBe(59);
                    expect(myTime3.getMinute()).toBe(0);
                });
            });

            describe('getSecond()', function() {
                it('should be defined', function() {
                    expect(myTime1.getSecond).toBeDefined();
                    expect(typeof myTime1.getSecond).toBe('function');
                });
                it('should return the second', function() {
                    expect(myTime1.getSecond()).toBe(0);
                    expect(myTime2.getSecond()).toBe(59);
                    expect(myTime3.getSecond()).toBe(0);
                });
            });

            describe('setHour(newHour)', function() {
                it('should be defined', function() {
                    expect(myTime1.setHour).toBeDefined();
                    expect(typeof myTime1.setHour).toBe('function');
                });
                it('should update the "hour" value', function() {
                    expect(myTime1.setHour(1)).toBeUndefined();
                    expect(myTime1.getHour()).toBe(1);

                    expect(myTime2.setHour(0)).toBeUndefined();
                    expect(myTime2.getHour()).toBe(0);

                    expect(myTime3.setHour(19)).toBeUndefined();
                    expect(myTime3.getHour()).toBe(19);
                });
                it('should NOT update the "hour" value', function() {
                    expect(myTime1.setHour(-1)).toBeUndefined();
                    expect(myTime1.getHour()).toBe(0);

                    expect(myTime2.setHour(24)).toBeUndefined();
                    expect(myTime2.getHour()).toBe(23);

                    expect(myTime3.setHour(30)).toBeUndefined();
                    expect(myTime3.getHour()).toBe(12);
                });
            });

            describe('setMinute(newMinute)', function() {
                it('should be defined', function() {
                    expect(myTime1.setMinute).toBeDefined();
                    expect(typeof myTime1.setMinute).toBe('function');
                });
                it('should update the "minute" value', function() {
                    expect(myTime1.setMinute(1)).toBeUndefined();
                    expect(myTime1.getMinute()).toBe(1);

                    expect(myTime2.setMinute(0)).toBeUndefined();
                    expect(myTime2.getMinute()).toBe(0);

                    expect(myTime3.setMinute(19)).toBeUndefined();
                    expect(myTime3.getMinute()).toBe(19);
                });
                it('should NOT update the "second" value', function() {
                    expect(myTime1.setMinute(-1)).toBeUndefined();
                    expect(myTime1.getMinute()).toBe(0);

                    expect(myTime2.setMinute(60)).toBeUndefined();
                    expect(myTime2.getMinute()).toBe(59);

                    expect(myTime3.setMinute(59.1)).toBeUndefined();
                    expect(myTime3.getMinute()).toBe(0);
                });
            });

            describe('setSecond(newSecond)', function() {
                it('should be defined', function() {
                    expect(myTime1.setSecond).toBeDefined();
                    expect(typeof myTime1.setSecond).toBe('function');
                });
                it('should update the "second" value', function() {
                    expect(myTime1.setSecond(1)).toBeUndefined();
                    expect(myTime1.getSecond()).toBe(1);

                    expect(myTime2.setSecond(0)).toBeUndefined();
                    expect(myTime2.getSecond()).toBe(0);

                    expect(myTime3.setSecond(19)).toBeUndefined();
                    expect(myTime3.getSecond()).toBe(19);
                });
                it('should NOT update the "second" value', function() {
                    expect(myTime1.setSecond(-1)).toBeUndefined();
                    expect(myTime1.getSecond()).toBe(0);

                    expect(myTime2.setSecond(60)).toBeUndefined();
                    expect(myTime2.getSecond()).toBe(59);

                    expect(myTime3.setSecond(59.1)).toBeUndefined();
                    expect(myTime3.getSecond()).toBe(0);
                });
            });

            describe('toString()', function() {
                it('should be defined', function() {
                    expect(myTime1.toString).toBeDefined();
                    expect(typeof myTime1.toString).toBe('function');
                });
                it('should return the instance as a string', function() {
                    expect(myTime1.toString()).toBe("00:00:00");
                    expect(myTime2.toString()).toBe("23:59:59");
                    expect(myTime3.toString()).toBe("12:00:00");
                });
            });

            describe('nextSecond()', function() {
                it('should be defined', function() {
                    expect(myTime1.nextSecond).toBeDefined();
                    expect(typeof myTime1.nextSecond).toBe('function');
                });
                it('should increment the instance by 1 second', function() {
                    expect(myTime1.nextSecond().toString()).toBe("00:00:01");
                    expect(myTime2.nextSecond().toString()).toBe("00:00:00");
                    expect(myTime3.nextSecond().toString()).toBe("12:00:01");
                });
            });

            describe('previousSecond()', function() {
                it('should be defined', function() {
                    expect(myTime1.previousSecond).toBeDefined();
                    expect(typeof myTime1.previousSecond).toBe('function');
                });
                it('should decrement the instance by 1 second', function() {
                    expect(myTime1.previousSecond().toString()).toBe("23:59:59");
                    expect(myTime2.previousSecond().toString()).toBe("23:59:58");
                    expect(myTime3.previousSecond().toString()).toBe("11:59:59");
                });
            });

            describe('nextMinute()', function() {
                it('should be defined', function() {
                    expect(myTime1.nextMinute).toBeDefined();
                    expect(typeof myTime1.nextMinute).toBe('function');
                });
                it('should increment the instance by 1 minute', function() {
                    expect(myTime1.nextMinute().toString()).toBe("00:01:00");
                    expect(myTime2.nextMinute().toString()).toBe("00:00:59");
                    expect(myTime3.nextMinute().toString()).toBe("12:01:00");
                });
            });

            describe('previousMinute()', function() {
                it('should be defined', function() {
                    expect(myTime1.previousMinute).toBeDefined();
                    expect(typeof myTime1.previousMinute).toBe('function');
                });
                it('should decrement the instance by 1 minute', function() {
                    expect(myTime1.previousMinute().toString()).toBe("23:59:00");
                    expect(myTime2.previousMinute().toString()).toBe("23:58:59");
                    expect(myTime3.previousMinute().toString()).toBe("11:59:00");
                });
            });

            describe('nextHour()', function() {
                it('should be defined', function() {
                    expect(myTime1.nextHour).toBeDefined();
                    expect(typeof myTime1.nextHour).toBe('function');
                });
                it('should increment the instance by 1 hour', function() {
                    expect(myTime1.nextHour().toString()).toBe("01:00:00");
                    expect(myTime2.nextHour().toString()).toBe("00:59:59");
                    expect(myTime3.nextHour().toString()).toBe("13:00:00");
                });
            });

            describe('previousHour()', function() {
                it('should be defined', function() {
                    expect(myTime1.previousHour).toBeDefined();
                    expect(typeof myTime1.previousHour).toBe('function');
                });
                it('should decrement the instance by 1 hour', function() {
                    expect(myTime1.previousHour().toString()).toBe("23:00:00");
                    expect(myTime2.previousHour().toString()).toBe("22:59:59");
                    expect(myTime3.previousHour().toString()).toBe("11:00:00");
                });
            });
        });
    });
}());
