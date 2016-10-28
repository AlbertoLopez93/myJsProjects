(function() {
    'use strict';

    const Human = require('../Human');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let prototypeMethods;
    let inheritedPrototypeMethods;
    let descriptor;
    //let proto;
    let human;
    let humanData;
    let human2;
    let human2Data;

    properties = [
        'id',
        'name',
        'maxHP',
        'currentHP',
        'agility',
        'armorEquipped',
        'currentMP',
        'faction',
        'gold',
        'intellect',
        'isMale',
        'maxMP',
        'spirit',
        'stamina',
        'strength',
        'weaponEquipped'
    ];
    inheritedMethods = ['getID', 'getName', 'getCurrentHP', 'setCurrentHP', 'getMaxHP', 'setMaxHP'];
    publicMethods = [
        'getAgility',
        'setAgility',
        'getArmorEquipped',
        'addArmorEquipped',
        'removeArmorEquipped',
        'switchArmorEquipped',
        'getCurrentMP',
        'setCurrentMP',
        'getFaction',
        'getGold',
        'setGold',
        'getIntellect',
        'setIntellect',
        'isItMale',
        'getMaxMP',
        'setMaxMP',
        'getSpirit',
        'setSpirit',
        'getStamina',
        'setStamina',
        'getStrength',
        'setStrength',
        'getWeaponEquipped',
        'addWeaponEquipped',
        'removeWeaponEquipped',
        'switchWeaponEquipped'
    ];
    inheritedPrototypeMethods = [];
    prototypeMethods = [];

    humanData = {
        id: 1,
        name: "Steve",
        maxHP: 1000,
        currentHP: 100,
        agility: 1500,
        armorEquipped: [{
            name: 'boots'
        }, {
            name: 'shield'
        }],
        currentMP: 5,
        faction: 'Blue',
        gold: 100,
        intellect: 200,
        isMale: true,
        maxMP: 10000,
        spirit: 50,
        stamina: 30,
        strength: 800,
        weaponEquipped: [{
            name: 'gun'
        }, {
            name: 'granate'
        }]
    };

    human2Data = {
        id: 2,
        name: "Roxanna",
        maxHP: 2000,
        currentHP: 200,
        agility: 1700,
        armorEquipped: [{
            name: 'shoes'
        }, {
            name: 'purse'
        }],
        currentMP: 6,
        faction: 'Red',
        gold: 150,
        intellect: 250,
        isMale: false,
        maxMP: 20000,
        spirit: 100,
        stamina: 60,
        strength: 600,
        weaponEquipped: [{
            name: 'lipstick'
        }, {
            name: 'highhills'
        }]
    };

    beforeEach(function() {
        human = new Human(
            humanData.id,
            humanData.name,
            humanData.maxHP,
            humanData.currentHP,
            humanData.agility,
            humanData.armorEquipped,
            humanData.currentMP,
            humanData.faction,
            humanData.gold,
            humanData.intellect,
            humanData.isMale,
            humanData.maxMP,
            humanData.spirit,
            humanData.stamina,
            humanData.strength,
            humanData.weaponEquipped
        );

        human2 = new Human(
            human2Data.id,
            human2Data.name,
            human2Data.maxHP,
            human2Data.currentHP,
            human2Data.agility,
            human2Data.armorEquipped,
            human2Data.currentMP,
            human2Data.faction,
            human2Data.gold,
            human2Data.intellect,
            human2Data.isMale,
            human2Data.maxMP,
            human2Data.spirit,
            human2Data.stamina,
            human2Data.strength,
            human2Data.weaponEquipped
        );
    });

    describe('Human Class', function() {

        it('should be defined', function() {
            expect(Human).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(human instanceof Human).toBe(true);
                expect(human2 instanceof Human).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(human[property]).toBeUndefined();
                    expect(human2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(human, method);
                        });
                        it("should be defined", () => {
                            expect(human[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof human[method]).toBe("function");
                        });
                        it("should not be configurable", () => {
                            expect(descriptor.configurable).toBe(false);
                        });
                        it("should not be writable", () => {
                            expect(descriptor.writable).toBe(false);
                        });
                        it("should be enumerable", () => {
                            expect(descriptor.enumerable).toBe(true);
                        });
                    });
                });
            });

            describe('Behavior', function() {

                describe('getID', function() {
                    it('should return the ID of the instance', function() {
                        expect(human.getID()).toBe(humanData.id);
                        expect(human2.getID()).toBe(human2Data.id);
                    });
                });

                describe('getName', function() {
                    it('should return the name of the instance', function() {
                        expect(human.getName()).toBe(humanData.name);
                        expect(human2.getName()).toBe(human2Data.name);
                    });
                });

                describe('getCurrentHP', function() {
                    it('should return the currentHP of the instance', function() {
                        expect(human.getCurrentHP()).toBe(humanData.currentHP);
                        expect(human2.getCurrentHP()).toBe(human2Data.currentHP);
                    });
                });

                describe('setCurrentHP', function() {
                    it('should update the currentHP of the instance', function() {
                        expect(human.setCurrentHP(10)).toBe(human);
                        expect(human.getCurrentHP()).toBe(10);

                        expect(human2.setCurrentHP(20)).toBe(human2);
                        expect(human2.getCurrentHP()).toBe(20);
                    });

                    it('should update the currentHP to the maxHP if is greater than maxHP of the instance', function() {
                        expect(human.setCurrentHP(humanData.maxHP + 50)).toBe(human);
                        expect(human.getCurrentHP()).toBe(humanData.maxHP);

                        expect(human2.setCurrentHP(human2Data.maxHP + 50)).toBe(human2);
                        expect(human2.getCurrentHP()).toBe(human2Data.maxHP);
                    });
                });

                describe('getMaxHP', function() {
                    it('should return the maxHP of the instance', function() {
                        expect(human.getMaxHP()).toBe(humanData.maxHP);
                        expect(human2.getMaxHP()).toBe(human2Data.maxHP);
                    });
                });

                describe('setMaxHP', function() {
                    it('should update the maxHP of the instance', function() {
                        expect(human.setMaxHP(3000)).toBe(human);
                        expect(human.getMaxHP()).toBe(3000);

                        expect(human2.setMaxHP(4000)).toBe(human2);
                        expect(human2.getMaxHP()).toBe(4000);
                    });

                    it('should NOT update the maxHP of the instance if less or equal to 0', function() {
                        expect(human.setMaxHP(0)).toBe(human);
                        expect(human.getMaxHP()).toBe(humanData.maxHP);

                        expect(human2.setMaxHP(-50)).toBe(human2);
                        expect(human2.getMaxHP()).toBe(human2Data.maxHP);
                    });
                });

            });
        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(human, method);
                        });
                        it("should be defined", () => {
                            expect(human[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof human[method]).toBe("function");
                        });
                        it("should not be configurable", () => {
                            expect(descriptor.configurable).toBe(false);
                        });
                        it("should not be writable", () => {
                            expect(descriptor.writable).toBe(false);
                        });
                        it("should be enumerable", () => {
                            expect(descriptor.enumerable).toBe(true);
                        });
                    });
                });
            });

            describe('Behavior', function() {
                // 'getAgility',
                describe('getAgility', function() {
                    it('should return the agility of the instance', function() {
                        expect(human.getAgility()).toBe(humanData.agility);
                        expect(human2.getAgility()).toBe(human2Data.agility);
                    });
                });
                // 'setAgility',
                describe('setAgility', function() {
                    it('should update the agility of the instance', function() {
                        expect(human.setAgility(5)).toBe(human);
                        expect(human.getAgility()).toBe(5);
                        expect(human2.setAgility(0)).toBe(human2);
                        expect(human2.getAgility()).toBe(0);
                    });
                    it('should NOT update the agility of the instance if is less than 0', function() {
                        expect(human.setAgility(-1)).toBe(human);
                        expect(human.getAgility()).toBe(humanData.agility);
                        expect(human2.setAgility(-50)).toBe(human2);
                        expect(human2.getAgility()).toBe(human2Data.agility);
                    });
                });
                // 'getArmorEquipped',
                describe('getArmorEquipped', function() {
                    it('should return the armorEquipped of the instance', function() {
                        expect(human.getArmorEquipped()).toEqual(humanData.armorEquipped);
                        expect(human2.getArmorEquipped()).toEqual(human2Data.armorEquipped);
                    });
                });
                // 'addArmorEquipped',
                describe('addArmorEquipped', function() {
                    it('should add an item to the armorEquipped of the instance and return the new length', function() {
                        expect(human.addArmorEquipped({
                            name: 'mega-shield'
                        })).toBe(3);
                        expect(human2.addArmorEquipped({
                            name: 'mirror'
                        })).toBe(3);
                    });
                });
                // 'removeArmorEquipped',
                describe('removeArmorEquipped', function() {
                    it('should remove an item from the armorEquipped of the instance by name and return it', function() {
                        expect(human.removeArmorEquipped('boots')).toEqual({
                            name: 'boots'
                        });
                        expect(human2.removeArmorEquipped('shoes')).toEqual({
                            name: 'shoes'
                        });
                    });
                    it('should return false when removing an item from the armorEquipped if it does not have it', function() {
                        expect(human.removeArmorEquipped('any')).toBe(false);
                        expect(human2.removeArmorEquipped('some')).toBe(false);
                    });
                });
                // 'switchArmorEquipped',
                describe('switchArmorEquipped', function() {
                    let newArmor = [{
                        name: 'fire-armor'
                    }];
                    it('should change the armorEquipped and return the old one', function() {
                        expect(human.switchArmorEquipped(newArmor)).toEqual(humanData.armorEquipped);
                        expect(human.getArmorEquipped()).toEqual(newArmor);

                        expect(human2.switchArmorEquipped(newArmor)).toEqual(human2Data.armorEquipped);
                        expect(human2.getArmorEquipped()).toEqual(newArmor);
                    });
                });
                // 'getCurrentMP',
                describe('getCurrentMP', function() {
                    it('should return the currentMP of the instance', function() {
                        expect(human.getCurrentMP()).toBe(humanData.currentMP);
                        expect(human2.getCurrentMP()).toBe(human2Data.currentMP);
                    });
                });
                // 'setCurrentMP',
                describe('setCurrentMP', function() {
                    it('should update the currentMP of the instance', function() {
                        expect(human.setCurrentMP(20)).toBe(human);
                        expect(human.getCurrentMP()).toBe(20);
                        expect(human2.setCurrentMP(30)).toBe(human2);
                        expect(human2.getCurrentMP()).toBe(30);
                    });
                    it('should update the currentMP of the instance to the maxMP if is greater than maxMP', function() {
                        expect(human.setCurrentMP(human.getMaxMP() + 1)).toBe(human);
                        expect(human.getCurrentMP()).toBe(human.getMaxMP());
                        expect(human2.setCurrentMP(human2.getMaxMP() + 50)).toBe(human2);
                        expect(human2.getCurrentMP()).toBe(human2.getMaxMP());
                    });
                });
                // 'getFaction',
                describe('getFaction', function() {
                    it('should return the faction of the instance', function() {
                        expect(human.getFaction()).toBe(humanData.faction);
                        expect(human2.getFaction()).toBe(human2Data.faction);
                    });
                });
                // 'getGold',
                describe('getGold', function() {
                    it('should return the gold of the instance', function() {
                        expect(human.getGold()).toBe(humanData.gold);
                        expect(human2.getGold()).toBe(human2Data.gold);
                    });
                });
                // 'setGold',
                describe('setGold', function() {
                    it('should update the gold of the instance', function() {
                        expect(human.setGold(999999999)).toBe(human);
                        expect(human.getGold()).toBe(999999999);
                        expect(human2.setGold(0)).toBe(human2);
                        expect(human2.getGold()).toBe(0);
                    });
                    it('should NOT update the gold of the instance if is less than 0 or greater than 999,999,999', function() {
                        expect(human.setGold(999999999 + 1)).toBe(human);
                        expect(human.getGold()).toBe(humanData.gold);
                        expect(human2.setGold(-1)).toBe(human2);
                        expect(human2.getGold()).toBe(human2Data.gold);
                    });
                });
                // 'getIntellect',
                describe('getIntellect', function() {
                    it('should return the intellect of the instance', function() {
                        expect(human.getIntellect()).toBe(humanData.intellect);
                        expect(human2.getIntellect()).toBe(human2Data.intellect);
                    });
                });
                // 'setIntellect',
                describe('setIntellect', function() {
                    it('should update the intellect of the instance', function() {
                        expect(human.setIntellect(50000)).toBe(human);
                        expect(human.getIntellect()).toBe(50000);
                        expect(human2.setIntellect(0)).toBe(human2);
                        expect(human2.getIntellect()).toBe(0);
                    });
                    it('should NOT update the intellect of the instance if is less than 0', function() {
                        expect(human.setIntellect(-1)).toBe(human);
                        expect(human.getIntellect()).toBe(humanData.intellect);
                        expect(human2.setIntellect(-50)).toBe(human2);
                        expect(human2.getIntellect()).toBe(human2Data.intellect);
                    });
                });
                // 'isItMale',
                describe('isItMale', function() {
                    it('should return the instance is isMale', function() {
                        expect(human.isItMale()).toBe(humanData.isMale);
                        expect(human2.isItMale()).toBe(human2Data.isMale);
                    });
                });
                // 'getMaxMP',
                describe('getMaxMP', function() {
                    it('should return the maxMP of the instance', function() {
                        expect(human.getMaxMP()).toBe(humanData.maxMP);
                        expect(human2.getMaxMP()).toBe(human2Data.maxMP);
                    });
                });
                // 'setMaxMP',
                describe('setMaxMP', function() {
                    it('should update the maxMP of the instance', function() {
                        expect(human.setMaxMP(3000)).toBe(human);
                        expect(human.getMaxMP()).toBe(3000);
                        expect(human2.setMaxMP(1)).toBe(human2);
                        expect(human2.getMaxMP()).toBe(1);
                    });
                    it('should NOT update the maxMP of the instance if is less than or equal to 0', function() {
                        expect(human.setMaxMP(0)).toBe(human);
                        expect(human.getMaxMP()).toBe(humanData.maxMP);
                        expect(human2.setMaxMP(-50)).toBe(human2);
                        expect(human2.getMaxMP()).toBe(human2Data.maxMP);
                    });
                });
                // 'getSpirit',
                describe('getSpirit', function() {
                    it('should return the spirit of the instance', function() {
                        expect(human.getSpirit()).toBe(humanData.spirit);
                        expect(human2.getSpirit()).toBe(human2Data.spirit);
                    });
                });
                // 'setSpirit',
                describe('setSpirit', function() {
                    it('should update the spirit of the instance', function() {
                        expect(human.setSpirit(50)).toBe(human);
                        expect(human.getSpirit()).toBe(50);
                        expect(human2.setSpirit(0)).toBe(human2);
                        expect(human2.getSpirit()).toBe(0);
                    });
                    it('should NOT update the spirit of the instance if is less than 0', function() {
                        expect(human.setSpirit(-1)).toBe(human);
                        expect(human.getSpirit()).toBe(humanData.spirit);
                        expect(human2.setSpirit(-50)).toBe(human2);
                        expect(human2.getSpirit()).toBe(human2Data.spirit);
                    });
                });
                // 'getStamina',
                describe('getStamina', function() {
                    it('should return the stamina of the instance', function() {
                        expect(human.getStamina()).toBe(humanData.stamina);
                        expect(human2.getStamina()).toBe(human2Data.stamina);
                    });
                });
                // 'setStamina',
                describe('setStamina', function() {
                    it('should update the stamina of the instance', function() {
                        expect(human.setStamina(500).getStamina()).toBe(500);
                        expect(human2.setStamina(0).getStamina()).toBe(0);
                    });
                    it('should NOT update the stamina of the instance if is less than 0', function() {
                        expect(human.setStamina(-1).getStamina()).toBe(humanData.stamina);
                        expect(human2.setStamina(-50).getStamina()).toBe(human2Data.stamina);
                    });
                });
                // 'getStrength',
                describe('getStrength', function() {
                    it('should return the strength of the instance', function() {
                        expect(human.getStrength()).toBe(humanData.strength);
                        expect(human2.getStrength()).toBe(human2Data.strength);
                    });
                });
                // 'setStrength',
                describe('setStrength', function() {
                    it('should update the strength of the instance', function() {
                        expect(human.setStrength(10000).getStrength()).toBe(10000);
                        expect(human2.setStrength(0).getStrength()).toBe(0);
                    });
                    it('should NOT update the strength of the instance if is less than 0', function() {
                        expect(human.setStrength(-1).getStrength()).toBe(humanData.strength);
                        expect(human2.setStrength(-50).getStrength()).toBe(human2Data.strength);
                    });
                });
                // 'getWeaponEquipped',
                describe('getWeaponEquipped', function() {
                    it('should return the weaponEquipped of the instance', function() {
                        expect(human.getWeaponEquipped()).toEqual(humanData.weaponEquipped);
                        expect(human2.getWeaponEquipped()).toEqual(human2Data.weaponEquipped);
                    });
                });
                // 'addWeaponEquipped',
                describe('addWeaponEquipped', function() {
                    it('should add a weapon to the weaponEquipped of the instance and return the new length', function() {
                        expect(human.addWeaponEquipped({
                            name: 'bazooka'
                        })).toBe(3);
                        expect(human2.addWeaponEquipped({
                            name: 'knife'
                        })).toBe(3);
                    });
                });
                // 'removeWeaponEquipped',
                describe('removeWeaponEquipped', function() {
                    it('should remove a weapon from the weaponEquipped of the instance by name and return it', function() {
                        expect(human.removeWeaponEquipped('gun')).toEqual({
                            name: 'gun'
                        });
                        expect(human2.removeWeaponEquipped('lipstick')).toEqual({
                            name: 'lipstick'
                        });
                    });
                    it('should return false when removing a weapon from the weaponEquipped if it does not have it', function() {
                        expect(human.removeWeaponEquipped('any')).toBe(false);
                        expect(human2.removeWeaponEquipped('some')).toBe(false);
                    });
                });
                // 'switchWeaponEquipped'
                describe('switchWeaponEquipped', function() {
                    let newWeapons = [{
                        name: 'laser'
                    }];
                    it('should change the weaponEquipped and return the old one', function() {
                        expect(human.switchWeaponEquipped(newWeapons)).toEqual(humanData.weaponEquipped);
                        expect(human.getWeaponEquipped()).toEqual(newWeapons);

                        expect(human2.switchWeaponEquipped(newWeapons)).toEqual(human2Data.weaponEquipped);
                        expect(human2.getWeaponEquipped()).toEqual(newWeapons);
                    });
                });
            });
        });
    });

}());
