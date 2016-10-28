"use strict";


const Character = require("../Character.js");
const Animal = require("../Animal.js");
const Human = require("../Human.js");
const Player = require("../Player.js");
const NPC = require("../NPC.js");
const Item = require("../Item.js");
const Armor = require("../Armor.js");
const Potion = require("../Potion.js");
const Weapon = require("../Weapon.js");

describe("Testing exam2 v2", function () {
    let character = new Character(22,"sara",99,2);
    let animal = new Animal(22,"sara",99,2,true,1,2,3);
    let armor = new Armor(1,2,"description", 1, "armor",2002,66,1,2,true,1,2,3,4,5);
    let item1 = new Armor(1,2,"description", 1, "casco",2002,66,1,2,true,1,2,3,4,5);
    let item2 = new Armor(1,2,"description", 1, "casco2",2002,66,1,2,true,1,2,3,4,5);
    let item3 = new Armor(1,2,"description", 1, "casco3",2002,66,1,2,true,1,2,3,4,5);
    let human = new Human(22,"human",1,2,3,[item1],4,"fuerza",5,6,false,99,7,8,9,[]);
    let item = new Item(1,2,"description", 1, "casco",2002,66);
    describe("Character function", function () {
        it("should be defined", function () {
            expect(character.getID()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.getName()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.getCurrentHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.setCurrentHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.getMaxHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.setMaxHP()).toBeDefined();
        });

    });

    describe("Character function return ", function () {
        it("should be int", function () {
            expect(typeof character.getID()).toBe("number");
        });
        it("should be string", function () {
            expect(typeof character.getName()).toBe("string");
        });
        it("should be the number", function () {
            expect(typeof character.getCurrentHP()).toBe("number");;
        });
        // it("should be the instace", function () {
        //     expect(typeof character.setCurrentHP()).toBe(character);;
        // });
        it("should be the int", function () {
            expect(typeof character.getMaxHP()).toBe("number");;
        });
        // it("should be the instace", function () {
        //     expect(typeof character.setMaxHP()).toBe(character);
        // });

    });

    describe("Character function gets", function () {
        it("should be 22", function () {
            expect(character.getID()).toBe(22);
        });
        it("should be sara", function () {
            expect(character.getName()).toBe("sara");
        });
        it("should be sara", function () {
            expect(character.getCurrentHP()).toBe(2);
        });
        it("should be sara", function () {
            expect(character.getMaxHP()).toBe(99);
        });

        describe("Character function sets", function () {

            it("should be 9", function () {
                character.setCurrentHP(9)
                expect(character.getCurrentHP()).toBe(9);
            });
            it("should be 9", function () {
                character.setCurrentHP(-9)
                expect(character.getCurrentHP()).toBe(9);
            });
            it("should be 9", function () {
                character.setCurrentHP("hola")
                expect(character.getCurrentHP()).toBe(9);
            });
            it("should be 99", function () {
                character.setCurrentHP(100)
                expect(character.getCurrentHP()).toBe(99);
            });
            it("should be 9", function () {
                character.setMaxHP(11)
                expect(character.getMaxHP()).toBe(11);
            });
            it("should be 9", function () {
                character.setMaxHP("hola")
                expect(character.getMaxHP()).toBe(11);
            });
            it("should be 99", function () {
                character.setMaxHP(103)
                expect(character.getMaxHP()).toBe(103);
            });

        });
    });


    describe("Animal function", function () {
        it("should be defined", function () {
            expect(animal.getID()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.getName()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.getCurrentHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.setCurrentHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.getMaxHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.setMaxHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.isItHostileToPlayer()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.getLootDropped()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.getMaxDmg()).toBeDefined();
        });
        it("should be defined", function () {
            expect(animal.getMinDmg()).toBeDefined();
        });

    });

    describe("Human function", function () {
        it("should be defined", function () {
            expect(character.getID()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.getName()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.getCurrentHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.setCurrentHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.getMaxHP()).toBeDefined();
        });
        it("should be defined", function () {
            expect(character.setMaxHP()).toBeDefined();
        });

    });

    describe("Player function", function () {

    });

    describe("NPC function", function () {

    });

    describe("Item function", function () {
        it("should be defined", function () {
            expect(item.getBuyPrice()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.getCount()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.setCount()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.getDescription()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.getID()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.getName()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.getSellPrice()).toBeDefined();
        });
        it("should be defined", function () {
            expect(item.getWeight()).toBeDefined();
        });
    });
    describe("Armor function", function () {
        it("should be defined", function () {
            expect(armor.getBuyPrice()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getCount()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.setCount()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getDescription()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getID()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getName()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getSellPrice()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getWeight()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getAgiBonus()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getIntBonus()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.isItHeavy()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getPhysDR()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getSpellDR()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getSpiBonus()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getStaBonus()).toBeDefined();
        });
        it("should be defined", function () {
            expect(armor.getStrBonus()).toBeDefined();
        });
    });
    describe("Potion function", function () {

    });
    describe("Weapon function", function () {

    });

});
