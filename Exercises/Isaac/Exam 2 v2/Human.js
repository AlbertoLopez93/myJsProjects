(function() {
    'use strict';

    const Assert = require('./Assert');
    const Character = require('./Character');

    function Human() {
        let agility = arguments[4],
            armorEquipped = arguments[5],
            currentMP = arguments[6],
            faction = arguments[7],
            gold = arguments[8],
            intellect = arguments[9],
            isMale = arguments[10],
            maxMP = arguments[11],
            spirit = arguments[12],
            stamina = arguments[13],
            strength = arguments[14],
            weaponEquipped = arguments[15];

        Character.apply(this, arguments);

        Object.defineProperty(this, 'getAgility', {
            value: function getAgility() {
                return agility;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setAgility', {
            value: function setAgility(newAgility) {
                if (Assert.Integer(newAgility) && newAgility >= 0) {
                    agility = newAgility;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getArmorEquipped', {
            value: function getArmorEquipped() {
                return armorEquipped;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'addArmorEquipped', {
            value: function addArmorEquipped(item) {
                armorEquipped.push(item);
                return armorEquipped.length;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'removeArmorEquipped', {
            value: function removeArmorEquipped(name) {
                let index = -1,
                    item = false;
                for (let i = 0; i < armorEquipped.length; i++) {
                    if (armorEquipped[i].name === name) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    item = armorEquipped.splice(index, 1);
                }
                return item;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'switchArmorEquipped', {
            value: function switchArmorEquipped(newArmorEquipped) {
                let oldArmor = armorEquipped;
                armorEquipped = newArmorEquipped;
                return oldArmor;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getCurrentMP', {
            value: function getCurrentMP() {
                return currentMP;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setCurrentMP', {
            value: function setCurrentMP(newMP) {
                if (Assert.Integer(newMP)) {
                    currentMP = newMP > this.getMaxMP() ? this.getMaxMP() : newMP;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getFaction', {
            value: function getFaction() {
                return faction;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getGold', {
            value: function getGold() {
                return gold;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setGold', {
            value: function setGold(newGold) {
                if (Assert.Integer(newGold) && newGold >= 0 && newGold <= 999999999) {
                    gold = newGold;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getIntellect', {
            value: function getIntellect() {
                return intellect;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setIntellect', {
            value: function setIntellect(newIntellect) {
                if (Assert.Integer(newIntellect) && newIntellect >= 0) {
                    intellect = newIntellect;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isItMale', {
            value: function isItMale() {
                return isMale;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getMaxMP', {
            value: function getMaxMP() {
                return maxMP;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setMaxMP', {
            value: function setMaxMP(newMaxMP) {
                if (Assert.Integer(newMaxMP) && newMaxMP > 0) {
                    maxMP = newMaxMP;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getSpirit', {
            value: function getSpirit() {
                return spirit;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setSpirit', {
            value: function setSpirit(newSpirit) {
                if (Assert.Integer(newSpirit) && newSpirit >= 0) {
                    spirit = newSpirit;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getStamina', {
            value: function getStamina() {
                return stamina;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setStamina', {
            value: function setStamina(newStamina) {
                if (Assert.Integer(newStamina) && newStamina >= 0) {
                    stamina = newStamina;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getStrength', {
            value: function getStrength() {
                return strength;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setStrength', {
            value: function setStrength(newStrength) {
                if (Assert.Integer(newStrength) && newStrength >= 0) {
                    strength = newStrength;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getWeaponEquipped', {
            value: function getWeaponEquipped() {
                return weaponEquipped;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'addWeaponEquipped', {
            value: function addWeaponEquipped(item) {
                weaponEquipped.push(item);
                return weaponEquipped.length;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'removeWeaponEquipped', {
            value: function removeWeaponEquipped(name) {
                let index = -1,
                    item = false;
                for (let i = 0; i < weaponEquipped.length; i++) {
                    if (weaponEquipped[i].name === name) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    item = weaponEquipped.splice(index, 1);
                }
                return item;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'switchWeaponEquipped', {
            value: function switchWeaponEquipped(newWeaponEquipped) {
                let oldWeapon = weaponEquipped;
                weaponEquipped = newWeaponEquipped;
                return oldWeapon;
            },
            enumerable: true
        });
    }

    module.exports = Human;

}());
