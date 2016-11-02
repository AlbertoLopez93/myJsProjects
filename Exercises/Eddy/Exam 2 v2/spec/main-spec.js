/**
 * version: 0.0.1
 *
 * Author: Eddy Velazquez on 28/10/16.
 * mail: eddy.velazquez@wocom-labs.com
 *
 * description:
 *
 */

"use strict";
let Character = require("../Character");
let Human = require("../Human");
let Animal = require("../Animal");
let Armor = require("../Armor");
let Item = require("../Item");
let NPC = require("../NPC");
let Player = require("../Player");
let Potion = require("../Potion");
let Weapon = require("../Weapon");

describe("tests", function() {
	describe("stuff for Animal", function() {
		it("should exist", function() {
			expect(Animal).toBeDefined();
		});

		let animal = new Animal("satan1987", "lil", 1000, 100, true, 555, 666, 777);
		let animal2 = new Animal("satan1987", "lil", 1000, 100, true, 555, 666, 444);

		describe("methods for Animal", function() {
			it("isItHostileToPlayer", function() {
				expect(animal.isItHostileToPlayer()).toBe(true);
			});
			it("getLootDropped", function() {
				expect(animal.getLootDropped()).toBe(555);
			});
			it("getMaxDmg", function() {
				expect(animal.getMaxDmg()).toBe(666);
			});
			it("getMinDmg", function() {
				expect(animal.getMinDmg()).toBe(666);
			});
			it("getMinDmg", function() {
				expect(animal2.getMinDmg()).toBe(444);
			});
		});
	});
	describe("stuff for Armor", function() {
		it("should exist", function() {
			expect(Armor).toBeDefined();
		});
	});
	describe("stuff for Character", function() {
		it("should exist", function() {
			expect(Character).toBeDefined();
		});
	});
	describe("stuff for Human", function() {
		it("should exist", function() {
			expect(Human).toBeDefined();
		});
	});
	describe("stuff for Item", function() {
		it("should exist", function() {
			expect(Item).toBeDefined();
		});
	});
	describe("stuff for NPC", function() {
		it("should exist", function() {
			expect(NPC).toBeDefined();
		});
	});
	describe("stuff for Player", function() {
		it("should exist", function() {
			expect(Player).toBeDefined();

			let armor1 = new Armor(1000, 100, "Description",
				20001, "semilla del hermitaño1",
				500, 200, 355, 99, true, 888, 777,
				666, 555, 444);
			let armor2 = new Armor(1000, 100, "Description",
				20001, "semilla", 500, 200, 355,
				99, true, 888, 777, 666, 555, 444);
			let armor3 = new Armor(1000, 100, "Description",
				20001, "semilla del hermitaño3",
				500, 200, 355, 99, true, 888, 777, 666, 555, 444);
			let weapon1 = new Weapon(1000, 100, "Description",
				20001, "filero", 500, 200, false,
				true, true);
			let weapon2 = new Weapon(1000, 100, "Description",
				20001, "bomba", 500, 200, false,
				true, true);
			let weapon3 = new Weapon(1000, 100, "Description",
				20001, "sarcasmo", 500, 200,
				false, true, true);
			let player = new Player(1000, "eddy", 5000, 4999,
				9999, [armor1, armor3], 8888, "vatos locos",
				7777, 6666, true, 10000, 10000, 10000, 10000, [weapon1, weapon2]);


			describe("methods for Player", function() {
				it("getID", function() {
					expect(player.getID()).toBe(1000);
				});
				it("getName", function() {
					expect(player.getName()).toBe("eddy");
				});
				it("getCurrentHP", function() {
					expect(player.getCurrentHP()).toBe(4999);
				});
				it("setCurrentHP", function() {
					expect(player.setCurrentHP(8000).getCurrentHP()).toBe(4999);
				});
				it("setCurrentHP", function() {
					expect(player.setCurrentHP(3000).getCurrentHP()).toBe(3000);
				});
				it("getMaxHP", function() {
					expect(player.getMaxHP()).toBe(5000);
				});
				it("setMaxHP", function() {
					expect(player.setMaxHP(6000).getMaxHP()).toBe(6000);
				});
				it("getAgility", function() {
					expect(player.getAgility()).toBe(9999);
				});
				it("setAgility", function() {
					expect(player.setAgility(5555).getAgility()).toBe(5555);
				});
				it("getArmorEquipped", function() {
					expect(player.getArmorEquipped()).toEqual([armor1, armor3]);
				});
				it("addtArmorEquipped", function() {
					expect(player.addArmorEquipped(armor2)).toEqual(3);
				});
				it("getArmorEquipped", function() {
					expect(player.getArmorEquipped()).toEqual([armor1,armor3,armor2]);
				});
				it("removeArmorEquipped", function() {
					expect(player.removeArmorEquipped("semilla")).toEqual(armor2);
				});
				it("getArmorEquipped", function() {
					expect(player.getArmorEquipped()).toEqual([armor1,armor3]);
				});
				it("switchArmorEquipped", function() {
					expect(player.switchArmorEquipped([armor1,armor3,armor2,armor2])).toEqual([armor1,armor3]);
				});
				it("getArmorEquipped", function() {
					expect(player.getArmorEquipped()).toEqual([armor1,armor3,armor2,armor2]);
				});

				it("switchArmorEquipped", function() {
					expect(player.switchArmorEquipped([weapon2])).toEqual([armor1,armor3,armor2,armor2]);
				});
				it("getArmorEquipped", function() {
					expect(player.getArmorEquipped()).toEqual([armor1,armor3,armor2,armor2]);
				});
				it("getCurrentMP", function() {
					expect(player.getCurrentMP()).toBe(8888);
				});
				it("setCurrentMP", function() {
					expect(player.setCurrentMP(696969).getCurrentMP()).toBe(8888);
				});


			});
		});

	});
	describe("stuff for Potion", function() {
		it("should exist", function() {
			expect(Potion).toBeDefined();
		});
	});
	describe("stuff for Weapon", function() {
		it("should exist", function() {
			expect(Weapon).toBeDefined();
		});
	});
});