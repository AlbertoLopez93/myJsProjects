(function() {
    'use strict';

    const Player = require('../Player');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let prototypeMethods;
    let inheritedPrototypeMethods;
    let descriptor;
    //let proto;
    let player;
    let playerData;
    let player2;
    let player2Data;

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
        'weaponEquipped',
        'experience',
        'level',
        'sp'
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
        'getExperience',
        'setExperience',
        'getLevel',
        'setLevel',
        'getSP',
        'setSP'
    ];
    inheritedPrototypeMethods = [];
    prototypeMethods = [];

    playerData = {
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

    player2Data = {
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
        player = new Player(
            playerData.id,
            playerData.name,
            playerData.maxHP,
            playerData.currentHP,
            playerData.agility,
            playerData.armorEquipped,
            playerData.currentMP,
            playerData.faction,
            playerData.gold,
            playerData.intellect,
            playerData.isMale,
            playerData.maxMP,
            playerData.spirit,
            playerData.stamina,
            playerData.strength,
            playerData.weaponEquipped
        );

        player2 = new Player(
            player2Data.id,
            player2Data.name,
            player2Data.maxHP,
            player2Data.currentHP,
            player2Data.agility,
            player2Data.armorEquipped,
            player2Data.currentMP,
            player2Data.faction,
            player2Data.gold,
            player2Data.intellect,
            player2Data.isMale,
            player2Data.maxMP,
            player2Data.spirit,
            player2Data.stamina,
            player2Data.strength,
            player2Data.weaponEquipped
        );
    });

    describe('Player Class', function() {

        it('should be defined', function() {
            expect(Player).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(player instanceof Player).toBe(true);
                expect(player2 instanceof Player).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(player[property]).toBeUndefined();
                    expect(player2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(player, method);
                        });
                        it("should be defined", () => {
                            expect(player[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof player[method]).toBe("function");
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
                        expect(player.getID()).toBe(playerData.id);
                        expect(player2.getID()).toBe(player2Data.id);
                    });
                });

                describe('getName', function() {
                    it('should return the name of the instance', function() {
                        expect(player.getName()).toBe(playerData.name);
                        expect(player2.getName()).toBe(player2Data.name);
                    });
                });

                describe('getCurrentHP', function() {
                    it('should return the currentHP of the instance', function() {
                        expect(player.getCurrentHP()).toBe(playerData.currentHP);
                        expect(player2.getCurrentHP()).toBe(player2Data.currentHP);
                    });
                });

                describe('setCurrentHP', function() {
                    it('should update the currentHP of the instance', function() {
                        expect(player.setCurrentHP(10)).toBe(player);
                        expect(player.getCurrentHP()).toBe(10);

                        expect(player2.setCurrentHP(20)).toBe(player2);
                        expect(player2.getCurrentHP()).toBe(20);
                    });

                    it('should update the currentHP to the maxHP if is greater than maxHP of the instance', function() {
                        expect(player.setCurrentHP(playerData.maxHP + 50)).toBe(player);
                        expect(player.getCurrentHP()).toBe(playerData.maxHP);

                        expect(player2.setCurrentHP(player2Data.maxHP + 50)).toBe(player2);
                        expect(player2.getCurrentHP()).toBe(player2Data.maxHP);
                    });
                });

                describe('getMaxHP', function() {
                    it('should return the maxHP of the instance', function() {
                        expect(player.getMaxHP()).toBe(playerData.maxHP);
                        expect(player2.getMaxHP()).toBe(player2Data.maxHP);
                    });
                });

                describe('setMaxHP', function() {
                    it('should update the maxHP of the instance', function() {
                        expect(player.setMaxHP(3000)).toBe(player);
                        expect(player.getMaxHP()).toBe(3000);

                        expect(player2.setMaxHP(4000)).toBe(player2);
                        expect(player2.getMaxHP()).toBe(4000);
                    });

                    it('should NOT update the maxHP of the instance if less or equal to 0', function() {
                        expect(player.setMaxHP(0)).toBe(player);
                        expect(player.getMaxHP()).toBe(playerData.maxHP);

                        expect(player2.setMaxHP(-50)).toBe(player2);
                        expect(player2.getMaxHP()).toBe(player2Data.maxHP);
                    });
                });

            });

            describe('Behavior from Human Class', function() {

                // 'getAgility',
                describe('getAgility', function() {
                    it('should return the agility of the instance', function() {
                        expect(player.getAgility()).toBe(playerData.agility);
                        expect(player2.getAgility()).toBe(player2Data.agility);
                    });
                });
                // 'setAgility',
                describe('setAgility', function() {
                    it('should update the agility of the instance', function() {
                        expect(player.setAgility(5)).toBe(player);
                        expect(player.getAgility()).toBe(5);
                        expect(player2.setAgility(0)).toBe(player2);
                        expect(player2.getAgility()).toBe(0);
                    });
                    it('should NOT update the agility of the instance if is less than 0', function() {
                        expect(player.setAgility(-1)).toBe(player);
                        expect(player.getAgility()).toBe(playerData.agility);
                        expect(player2.setAgility(-50)).toBe(player2);
                        expect(player2.getAgility()).toBe(player2Data.agility);
                    });
                });
                // 'getArmorEquipped',
                describe('getArmorEquipped', function() {
                    it('should return the armorEquipped of the instance', function() {
                        expect(player.getArmorEquipped()).toEqual(playerData.armorEquipped);
                        expect(player2.getArmorEquipped()).toEqual(player2Data.armorEquipped);
                    });
                });
                // 'addArmorEquipped',
                describe('addArmorEquipped', function() {
                    it('should add an item to the armorEquipped of the instance and return the new length', function() {
                        expect(player.addArmorEquipped({
                            name: 'mega-shield'
                        })).toBe(3);
                        expect(player2.addArmorEquipped({
                            name: 'mirror'
                        })).toBe(3);
                    });
                });
                // 'removeArmorEquipped',
                describe('removeArmorEquipped', function() {
                    it('should remove an item from the armorEquipped of the instance by name and return it', function() {
                        expect(player.removeArmorEquipped('boots')).toEqual({
                            name: 'boots'
                        });
                        expect(player2.removeArmorEquipped('shoes')).toEqual({
                            name: 'shoes'
                        });
                    });
                    it('should return false when removing an item from the armorEquipped if it does not have it', function() {
                        expect(player.removeArmorEquipped('any')).toBe(false);
                        expect(player2.removeArmorEquipped('some')).toBe(false);
                    });
                });
                // 'switchArmorEquipped',
                describe('switchArmorEquipped', function() {
                    let newArmor = [{
                        name: 'fire-armor'
                    }];
                    it('should change the armorEquipped and return the old one', function() {
                        expect(player.switchArmorEquipped(newArmor)).toEqual(playerData.armorEquipped);
                        expect(player.getArmorEquipped()).toEqual(newArmor);

                        expect(player2.switchArmorEquipped(newArmor)).toEqual(player2Data.armorEquipped);
                        expect(player2.getArmorEquipped()).toEqual(newArmor);
                    });
                });
                // 'getCurrentMP',
                describe('getCurrentMP', function() {
                    it('should return the currentMP of the instance', function() {
                        expect(player.getCurrentMP()).toBe(playerData.currentMP);
                        expect(player2.getCurrentMP()).toBe(player2Data.currentMP);
                    });
                });
                // 'setCurrentMP',
                describe('setCurrentMP', function() {
                    it('should update the currentMP of the instance', function() {
                        expect(player.setCurrentMP(20)).toBe(player);
                        expect(player.getCurrentMP()).toBe(20);
                        expect(player2.setCurrentMP(30)).toBe(player2);
                        expect(player2.getCurrentMP()).toBe(30);
                    });
                    it('should update the currentMP of the instance to the maxMP if is greater than maxMP', function() {
                        expect(player.setCurrentMP(player.getMaxMP() + 1)).toBe(player);
                        expect(player.getCurrentMP()).toBe(player.getMaxMP());
                        expect(player2.setCurrentMP(player2.getMaxMP() + 50)).toBe(player2);
                        expect(player2.getCurrentMP()).toBe(player2.getMaxMP());
                    });
                });
                // 'getFaction',
                describe('getFaction', function() {
                    it('should return the faction of the instance', function() {
                        expect(player.getFaction()).toBe(playerData.faction);
                        expect(player2.getFaction()).toBe(player2Data.faction);
                    });
                });
                // 'getGold',
                describe('getGold', function() {
                    it('should return the gold of the instance', function() {
                        expect(player.getGold()).toBe(playerData.gold);
                        expect(player2.getGold()).toBe(player2Data.gold);
                    });
                });
                // 'setGold',
                describe('setGold', function() {
                    it('should update the gold of the instance', function() {
                        expect(player.setGold(999999999)).toBe(player);
                        expect(player.getGold()).toBe(999999999);
                        expect(player2.setGold(0)).toBe(player2);
                        expect(player2.getGold()).toBe(0);
                    });
                    it('should NOT update the gold of the instance if is less than 0 or greater than 999,999,999', function() {
                        expect(player.setGold(999999999 + 1)).toBe(player);
                        expect(player.getGold()).toBe(playerData.gold);
                        expect(player2.setGold(-1)).toBe(player2);
                        expect(player2.getGold()).toBe(player2Data.gold);
                    });
                });
                // 'getIntellect',
                describe('getIntellect', function() {
                    it('should return the intellect of the instance', function() {
                        expect(player.getIntellect()).toBe(playerData.intellect);
                        expect(player2.getIntellect()).toBe(player2Data.intellect);
                    });
                });
                // 'setIntellect',
                describe('setIntellect', function() {
                    it('should update the intellect of the instance', function() {
                        expect(player.setIntellect(50000)).toBe(player);
                        expect(player.getIntellect()).toBe(50000);
                        expect(player2.setIntellect(0)).toBe(player2);
                        expect(player2.getIntellect()).toBe(0);
                    });
                    it('should NOT update the intellect of the instance if is less than 0', function() {
                        expect(player.setIntellect(-1)).toBe(player);
                        expect(player.getIntellect()).toBe(playerData.intellect);
                        expect(player2.setIntellect(-50)).toBe(player2);
                        expect(player2.getIntellect()).toBe(player2Data.intellect);
                    });
                });
                // 'isItMale',
                describe('isItMale', function() {
                    it('should return the instance is isMale', function() {
                        expect(player.isItMale()).toBe(playerData.isMale);
                        expect(player2.isItMale()).toBe(player2Data.isMale);
                    });
                });
                // 'getMaxMP',
                describe('getMaxMP', function() {
                    it('should return the maxMP of the instance', function() {
                        expect(player.getMaxMP()).toBe(playerData.maxMP);
                        expect(player2.getMaxMP()).toBe(player2Data.maxMP);
                    });
                });
                // 'setMaxMP',
                describe('setMaxMP', function() {
                    it('should update the maxMP of the instance', function() {
                        expect(player.setMaxMP(3000)).toBe(player);
                        expect(player.getMaxMP()).toBe(3000);
                        expect(player2.setMaxMP(1)).toBe(player2);
                        expect(player2.getMaxMP()).toBe(1);
                    });
                    it('should NOT update the maxMP of the instance if is less than or equal to 0', function() {
                        expect(player.setMaxMP(0)).toBe(player);
                        expect(player.getMaxMP()).toBe(playerData.maxMP);
                        expect(player2.setMaxMP(-50)).toBe(player2);
                        expect(player2.getMaxMP()).toBe(player2Data.maxMP);
                    });
                });
                // 'getSpirit',
                describe('getSpirit', function() {
                    it('should return the spirit of the instance', function() {
                        expect(player.getSpirit()).toBe(playerData.spirit);
                        expect(player2.getSpirit()).toBe(player2Data.spirit);
                    });
                });
                // 'setSpirit',
                describe('setSpirit', function() {
                    it('should update the spirit of the instance', function() {
                        expect(player.setSpirit(50)).toBe(player);
                        expect(player.getSpirit()).toBe(50);
                        expect(player2.setSpirit(0)).toBe(player2);
                        expect(player2.getSpirit()).toBe(0);
                    });
                    it('should NOT update the spirit of the instance if is less than 0', function() {
                        expect(player.setSpirit(-1)).toBe(player);
                        expect(player.getSpirit()).toBe(playerData.spirit);
                        expect(player2.setSpirit(-50)).toBe(player2);
                        expect(player2.getSpirit()).toBe(player2Data.spirit);
                    });
                });
                // 'getStamina',
                describe('getStamina', function() {
                    it('should return the stamina of the instance', function() {
                        expect(player.getStamina()).toBe(playerData.stamina);
                        expect(player2.getStamina()).toBe(player2Data.stamina);
                    });
                });
                // 'setStamina',
                describe('setStamina', function() {
                    it('should update the stamina of the instance', function() {
                        expect(player.setStamina(500).getStamina()).toBe(500);
                        expect(player2.setStamina(0).getStamina()).toBe(0);
                    });
                    it('should NOT update the stamina of the instance if is less than 0', function() {
                        expect(player.setStamina(-1).getStamina()).toBe(playerData.stamina);
                        expect(player2.setStamina(-50).getStamina()).toBe(player2Data.stamina);
                    });
                });
                // 'getStrength',
                describe('getStrength', function() {
                    it('should return the strength of the instance', function() {
                        expect(player.getStrength()).toBe(playerData.strength);
                        expect(player2.getStrength()).toBe(player2Data.strength);
                    });
                });
                // 'setStrength',
                describe('setStrength', function() {
                    it('should update the strength of the instance', function() {
                        expect(player.setStrength(10000).getStrength()).toBe(10000);
                        expect(player2.setStrength(0).getStrength()).toBe(0);
                    });
                    it('should NOT update the strength of the instance if is less than 0', function() {
                        expect(player.setStrength(-1).getStrength()).toBe(playerData.strength);
                        expect(player2.setStrength(-50).getStrength()).toBe(player2Data.strength);
                    });
                });
                // 'getWeaponEquipped',
                describe('getWeaponEquipped', function() {
                    it('should return the weaponEquipped of the instance', function() {
                        expect(player.getWeaponEquipped()).toEqual(playerData.weaponEquipped);
                        expect(player2.getWeaponEquipped()).toEqual(player2Data.weaponEquipped);
                    });
                });
                // 'addWeaponEquipped',
                describe('addWeaponEquipped', function() {
                    it('should add a weapon to the weaponEquipped of the instance and return the new length', function() {
                        expect(player.addWeaponEquipped({
                            name: 'bazooka'
                        })).toBe(3);
                        expect(player2.addWeaponEquipped({
                            name: 'knife'
                        })).toBe(3);
                    });
                });
                // 'removeWeaponEquipped',
                describe('removeWeaponEquipped', function() {
                    it('should remove a weapon from the weaponEquipped of the instance by name and return it', function() {
                        expect(player.removeWeaponEquipped('gun')).toEqual({
                            name: 'gun'
                        });
                        expect(player2.removeWeaponEquipped('lipstick')).toEqual({
                            name: 'lipstick'
                        });
                    });
                    it('should return false when removing a weapon from the weaponEquipped if it does not have it', function() {
                        expect(player.removeWeaponEquipped('any')).toBe(false);
                        expect(player2.removeWeaponEquipped('some')).toBe(false);
                    });
                });
                // 'switchWeaponEquipped'
                describe('switchWeaponEquipped', function() {
                    let newWeapons = [{
                        name: 'laser'
                    }];
                    it('should change the weaponEquipped and return the old one', function() {
                        expect(player.switchWeaponEquipped(newWeapons)).toEqual(playerData.weaponEquipped);
                        expect(player.getWeaponEquipped()).toEqual(newWeapons);

                        expect(player2.switchWeaponEquipped(newWeapons)).toEqual(player2Data.weaponEquipped);
                        expect(player2.getWeaponEquipped()).toEqual(newWeapons);
                    });
                });

            });
        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(player, method);
                        });
                        it("should be defined", () => {
                            expect(player[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof player[method]).toBe("function");
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
                // 'getExperience',
                describe('getExperience', function() {
                    // body...
                });
                // 'setExperience',
                describe('setExperience', function() {
                    // body...
                });
                // 'getLevel',
                describe('getLevel', function() {
                    // body...
                });
                // 'setLevel',
                describe('setLevel', function() {
                    // body...
                });
                // 'getSP',
                describe('getSP', function() {
                    // body...
                });
                // 'setSP'
                describe('setSP', function() {
                    // body...
                });
            });
        });
    });

}());
