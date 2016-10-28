(function() {
    'use strict';

    const NPC = require('../NPC');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let prototypeMethods;
    let inheritedPrototypeMethods;
    let descriptor;
    //let proto;
    let nPC;
    let nPCData;
    let nPC2;
    let nPC2Data;

    properties = [
        // Character Class
        'id',
        'name',
        'maxHP',
        'currentHP',
        // Human Class
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
        'weaponEquipped',
        // This Class
        'hostileToPlayer',
        'lootDropped'
    ];
    inheritedMethods = [
        // Character Class
        'getID',
        'getName',
        'getCurrentHP',
        'setCurrentHP',
        'getMaxHP',
        'setMaxHP',
        // Human Class
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

    publicMethods = [
        'isItHostileToPlayer',
        'getLootDropped'
    ];
    inheritedPrototypeMethods = [];
    prototypeMethods = [];

    nPCData = {
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

    nPC2Data = {
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
        nPC = new NPC(
            nPCData.id,
            nPCData.name,
            nPCData.maxHP,
            nPCData.currentHP,
            nPCData.agility,
            nPCData.armorEquipped,
            nPCData.currentMP,
            nPCData.faction,
            nPCData.gold,
            nPCData.intellect,
            nPCData.isMale,
            nPCData.maxMP,
            nPCData.spirit,
            nPCData.stamina,
            nPCData.strength,
            nPCData.weaponEquipped
        );

        nPC2 = new NPC(
            nPC2Data.id,
            nPC2Data.name,
            nPC2Data.maxHP,
            nPC2Data.currentHP,
            nPC2Data.agility,
            nPC2Data.armorEquipped,
            nPC2Data.currentMP,
            nPC2Data.faction,
            nPC2Data.gold,
            nPC2Data.intellect,
            nPC2Data.isMale,
            nPC2Data.maxMP,
            nPC2Data.spirit,
            nPC2Data.stamina,
            nPC2Data.strength,
            nPC2Data.weaponEquipped
        );
    });

    describe('NPC Class', function() {

        it('should be defined', function() {
            expect(NPC).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(nPC instanceof NPC).toBe(true);
                expect(nPC2 instanceof NPC).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(nPC[property]).toBeUndefined();
                    expect(nPC2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(nPC, method);
                        });
                        it("should be defined", () => {
                            expect(nPC[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof nPC[method]).toBe("function");
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

            describe('Behavior from Character Class', function() {

                describe('getID', function() {
                    it('should return the ID of the instance', function() {
                        expect(nPC.getID()).toBe(nPCData.id);
                        expect(nPC2.getID()).toBe(nPC2Data.id);
                    });
                });

                describe('getName', function() {
                    it('should return the name of the instance', function() {
                        expect(nPC.getName()).toBe(nPCData.name);
                        expect(nPC2.getName()).toBe(nPC2Data.name);
                    });
                });

                describe('getCurrentHP', function() {
                    it('should return the currentHP of the instance', function() {
                        expect(nPC.getCurrentHP()).toBe(nPCData.currentHP);
                        expect(nPC2.getCurrentHP()).toBe(nPC2Data.currentHP);
                    });
                });

                describe('setCurrentHP', function() {
                    it('should update the currentHP of the instance', function() {
                        expect(nPC.setCurrentHP(10)).toBe(nPC);
                        expect(nPC.getCurrentHP()).toBe(10);

                        expect(nPC2.setCurrentHP(20)).toBe(nPC2);
                        expect(nPC2.getCurrentHP()).toBe(20);
                    });

                    it('should update the currentHP to the maxHP if is greater than maxHP of the instance', function() {
                        expect(nPC.setCurrentHP(nPCData.maxHP + 50)).toBe(nPC);
                        expect(nPC.getCurrentHP()).toBe(nPCData.maxHP);

                        expect(nPC2.setCurrentHP(nPC2Data.maxHP + 50)).toBe(nPC2);
                        expect(nPC2.getCurrentHP()).toBe(nPC2Data.maxHP);
                    });
                });

                describe('getMaxHP', function() {
                    it('should return the maxHP of the instance', function() {
                        expect(nPC.getMaxHP()).toBe(nPCData.maxHP);
                        expect(nPC2.getMaxHP()).toBe(nPC2Data.maxHP);
                    });
                });

                describe('setMaxHP', function() {
                    it('should update the maxHP of the instance', function() {
                        expect(nPC.setMaxHP(3000)).toBe(nPC);
                        expect(nPC.getMaxHP()).toBe(3000);

                        expect(nPC2.setMaxHP(4000)).toBe(nPC2);
                        expect(nPC2.getMaxHP()).toBe(4000);
                    });

                    it('should NOT update the maxHP of the instance if less or equal to 0', function() {
                        expect(nPC.setMaxHP(0)).toBe(nPC);
                        expect(nPC.getMaxHP()).toBe(nPCData.maxHP);

                        expect(nPC2.setMaxHP(-50)).toBe(nPC2);
                        expect(nPC2.getMaxHP()).toBe(nPC2Data.maxHP);
                    });
                });

            });

            describe('Behavior from Human Class', function() {

                // 'getAgility',
                describe('getAgility', function() {
                    it('should return the agility of the instance', function() {
                        expect(nPC.getAgility()).toBe(nPCData.agility);
                        expect(nPC2.getAgility()).toBe(nPC2Data.agility);
                    });
                });
                // 'setAgility',
                describe('setAgility', function() {
                    it('should update the agility of the instance', function() {
                        expect(nPC.setAgility(5)).toBe(nPC);
                        expect(nPC.getAgility()).toBe(5);
                        expect(nPC2.setAgility(0)).toBe(nPC2);
                        expect(nPC2.getAgility()).toBe(0);
                    });
                    it('should NOT update the agility of the instance if is less than 0', function() {
                        expect(nPC.setAgility(-1)).toBe(nPC);
                        expect(nPC.getAgility()).toBe(nPCData.agility);
                        expect(nPC2.setAgility(-50)).toBe(nPC2);
                        expect(nPC2.getAgility()).toBe(nPC2Data.agility);
                    });
                });
                // 'getArmorEquipped',
                describe('getArmorEquipped', function() {
                    // Nope
                });
                // 'addArmorEquipped',
                describe('addArmorEquipped', function() {
                    // Nope
                });
                // 'removeArmorEquipped',
                describe('removeArmorEquipped', function() {
                    // Nope
                });
                // 'switchArmorEquipped',
                describe('switchArmorEquipped', function() {
                    // Nope
                });
                // 'getCurrentMP',
                describe('getCurrentMP', function() {
                    it('should return the currentMP of the instance', function() {
                        expect(nPC.getCurrentMP()).toBe(nPCData.currentMP);
                        expect(nPC2.getCurrentMP()).toBe(nPC2Data.currentMP);
                    });
                });
                // 'setCurrentMP',
                describe('setCurrentMP', function() {
                    it('should update the currentMP of the instance', function() {
                        expect(nPC.setCurrentMP(20)).toBe(nPC);
                        expect(nPC.getCurrentMP()).toBe(20);
                        expect(nPC2.setCurrentMP(30)).toBe(nPC2);
                        expect(nPC2.getCurrentMP()).toBe(30);
                    });
                    it('should update the currentMP of the instance to the maxMP if is greater than maxMP', function() {
                        expect(nPC.setCurrentMP(nPC.getMaxMP() + 1)).toBe(nPC);
                        expect(nPC.getCurrentMP()).toBe(nPC.getMaxMP());
                        expect(nPC2.setCurrentMP(nPC2.getMaxMP() + 50)).toBe(nPC2);
                        expect(nPC2.getCurrentMP()).toBe(nPC2.getMaxMP());
                    });
                });
                // 'getFaction',
                describe('getFaction', function() {
                    it('should return the faction of the instance', function() {
                        expect(nPC.getFaction()).toBe(nPCData.faction);
                        expect(nPC2.getFaction()).toBe(nPC2Data.faction);
                    });
                });
                // 'getGold',
                describe('getGold', function() {
                    it('should return the gold of the instance', function() {
                        expect(nPC.getGold()).toBe(nPCData.gold);
                        expect(nPC2.getGold()).toBe(nPC2Data.gold);
                    });
                });
                // 'setGold',
                describe('setGold', function() {
                    it('should update the gold of the instance', function() {
                        expect(nPC.setGold(999999999)).toBe(nPC);
                        expect(nPC.getGold()).toBe(999999999);
                        expect(nPC2.setGold(0)).toBe(nPC2);
                        expect(nPC2.getGold()).toBe(0);
                    });
                    it('should NOT update the gold of the instance if is less than 0 or greater than 999,999,999', function() {
                        expect(nPC.setGold(999999999 + 1)).toBe(nPC);
                        expect(nPC.getGold()).toBe(nPCData.gold);
                        expect(nPC2.setGold(-1)).toBe(nPC2);
                        expect(nPC2.getGold()).toBe(nPC2Data.gold);
                    });
                });
                // 'getIntellect',
                describe('getIntellect', function() {
                    it('should return the intellect of the instance', function() {
                        expect(nPC.getIntellect()).toBe(nPCData.intellect);
                        expect(nPC2.getIntellect()).toBe(nPC2Data.intellect);
                    });
                });
                // 'setIntellect',
                describe('setIntellect', function() {
                    it('should update the intellect of the instance', function() {
                        expect(nPC.setIntellect(50000)).toBe(nPC);
                        expect(nPC.getIntellect()).toBe(50000);
                        expect(nPC2.setIntellect(0)).toBe(nPC2);
                        expect(nPC2.getIntellect()).toBe(0);
                    });
                    it('should NOT update the intellect of the instance if is less than 0', function() {
                        expect(nPC.setIntellect(-1)).toBe(nPC);
                        expect(nPC.getIntellect()).toBe(nPCData.intellect);
                        expect(nPC2.setIntellect(-50)).toBe(nPC2);
                        expect(nPC2.getIntellect()).toBe(nPC2Data.intellect);
                    });
                });
                // 'isItMale',
                describe('isItMale', function() {
                    it('should return the instance is isMale', function() {
                        expect(nPC.isItMale()).toBe(nPCData.isMale);
                        expect(nPC2.isItMale()).toBe(nPC2Data.isMale);
                    });
                });
                // 'getMaxMP',
                describe('getMaxMP', function() {
                    it('should return the maxMP of the instance', function() {
                        expect(nPC.getMaxMP()).toBe(nPCData.maxMP);
                        expect(nPC2.getMaxMP()).toBe(nPC2Data.maxMP);
                    });
                });
                // 'setMaxMP',
                describe('setMaxMP', function() {
                    it('should update the maxMP of the instance', function() {
                        expect(nPC.setMaxMP(3000)).toBe(nPC);
                        expect(nPC.getMaxMP()).toBe(3000);
                        expect(nPC2.setMaxMP(1)).toBe(nPC2);
                        expect(nPC2.getMaxMP()).toBe(1);
                    });
                    it('should NOT update the maxMP of the instance if is less than or equal to 0', function() {
                        expect(nPC.setMaxMP(0)).toBe(nPC);
                        expect(nPC.getMaxMP()).toBe(nPCData.maxMP);
                        expect(nPC2.setMaxMP(-50)).toBe(nPC2);
                        expect(nPC2.getMaxMP()).toBe(nPC2Data.maxMP);
                    });
                });
                // 'getSpirit',
                describe('getSpirit', function() {
                    it('should return the spirit of the instance', function() {
                        expect(nPC.getSpirit()).toBe(nPCData.spirit);
                        expect(nPC2.getSpirit()).toBe(nPC2Data.spirit);
                    });
                });
                // 'setSpirit',
                describe('setSpirit', function() {
                    it('should update the spirit of the instance', function() {
                        expect(nPC.setSpirit(50)).toBe(nPC);
                        expect(nPC.getSpirit()).toBe(50);
                        expect(nPC2.setSpirit(0)).toBe(nPC2);
                        expect(nPC2.getSpirit()).toBe(0);
                    });
                    it('should NOT update the spirit of the instance if is less than 0', function() {
                        expect(nPC.setSpirit(-1)).toBe(nPC);
                        expect(nPC.getSpirit()).toBe(nPCData.spirit);
                        expect(nPC2.setSpirit(-50)).toBe(nPC2);
                        expect(nPC2.getSpirit()).toBe(nPC2Data.spirit);
                    });
                });
                // 'getStamina',
                describe('getStamina', function() {
                    it('should return the stamina of the instance', function() {
                        expect(nPC.getStamina()).toBe(nPCData.stamina);
                        expect(nPC2.getStamina()).toBe(nPC2Data.stamina);
                    });
                });
                // 'setStamina',
                describe('setStamina', function() {
                    it('should update the stamina of the instance', function() {
                        expect(nPC.setStamina(500).getStamina()).toBe(500);
                        expect(nPC2.setStamina(0).getStamina()).toBe(0);
                    });
                    it('should NOT update the stamina of the instance if is less than 0', function() {
                        expect(nPC.setStamina(-1).getStamina()).toBe(nPCData.stamina);
                        expect(nPC2.setStamina(-50).getStamina()).toBe(nPC2Data.stamina);
                    });
                });
                // 'getStrength',
                describe('getStrength', function() {
                    it('should return the strength of the instance', function() {
                        expect(nPC.getStrength()).toBe(nPCData.strength);
                        expect(nPC2.getStrength()).toBe(nPC2Data.strength);
                    });
                });
                // 'setStrength',
                describe('setStrength', function() {
                    it('should update the strength of the instance', function() {
                        expect(nPC.setStrength(10000).getStrength()).toBe(10000);
                        expect(nPC2.setStrength(0).getStrength()).toBe(0);
                    });
                    it('should NOT update the strength of the instance if is less than 0', function() {
                        expect(nPC.setStrength(-1).getStrength()).toBe(nPCData.strength);
                        expect(nPC2.setStrength(-50).getStrength()).toBe(nPC2Data.strength);
                    });
                });
                // 'getWeaponEquipped',
                describe('getWeaponEquipped', function() {
                    // Nope
                });
                // 'addWeaponEquipped',
                describe('addWeaponEquipped', function() {
                    // Nope
                });
                // 'removeWeaponEquipped',
                describe('removeWeaponEquipped', function() {
                    // Nope
                });
                // 'switchWeaponEquipped'
                describe('switchWeaponEquipped', function() {
                    // Nope
                });

            });
        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(nPC, method);
                        });
                        it("should be defined", () => {
                            expect(nPC[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof nPC[method]).toBe("function");
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
                // 'isItHostileToPlayer',
                describe('isItHostileToPlayer', function() {
                    // body...
                });
                // 'getLootDropped',
                describe('getLootDropped', function() {
                    // body...
                });
            });
        });
    });

}());
