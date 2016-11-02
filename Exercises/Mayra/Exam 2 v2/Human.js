"use strict";
const Character = require("./Character.js");
const Armor = require("./Armor.js");
const Weapon = require("./Weapon.js");
function Human(ID , Name , MaxHP, CurrentPH, Agility, ArmorEquipped, CurrentMP, Faction, Gold, Intellect, IsMale, MaxMP, Spirit, Stamina, Strength, WeaponEquipped) {
    Character.call(this, ID , Name , MaxHP, CurrentPH);

    Object.defineProperty(this, "getAgility", {
        value: function() {
            return Agility;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setAgility", {
        value: function(newAgility) {
            if (typeof newAgility === "number" && newAgility > 0 ) {
                Agility = newAgility;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getArmorEquipped", {
        value: function() {
            return ArmorEquipped;
        },
        enumerable: true
    });

    Object.defineProperty(this, "addArmorEquipped", {
        value: function(item) {
            if ( item instanceof Armor === true) {
                for (let i = 0; i < ArmorEquipped.length; i++) {
                    if(ArmorEquipped[i].getName() === item.getName()){
                        return false;
                    }
                }
                ArmorEquipped.push(item);
                let length = ArmorEquipped.length;
                return length;
            }
        },
        enumerable: true
    });

    Object.defineProperty(this, "removeArmorEquipped", {
        value: function(name) {
            let index = 0, aux;
            for (let i = 0; i < ArmorEquipped.length; i++) {
                if(ArmorEquipped[i].getName() === name){
                    index = i;
                    aux = ArmorEquipped.splice(index,1);
                    return aux;
                }
            }
            return false;
        },
        enumerable: true
    });

    Object.defineProperty(this, "switchArmorEquipped", {
        value: function(newArmorEquipped) {
            let aux = ArmorEquipped;
            ArmorEquipped = newArmorEquipped;
            return aux;
        },
        enumerable: true
    });

        Object.defineProperty(this, "getCurrentMP", {
            value: function() {
                return CurrentMP;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setCurrentMP", {
            value: function(newMP) {
                if (typeof newMP === "number" ) {
                    if (newMP > this.getMaxMP()) {
                        CurrentMP = this.getMaxMP();
                    } else {
                        CurrentMP = newMP;
                    }
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getFaction", {
            value: function() {
                return Faction;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getGold", {
            value: function() {
                return Gold;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setGold", {
            value: function(newGold) {
                if (newGold > 0 && newGold < 999999999 ) {
                    Gold = newGold;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getIntellect", {
            value: function() {
                return Intellect;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setIntellect", {
            value: function(newIntellect) {
                if (newIntellect > 0 ) {
                    Intellect = newIntellect;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, "isItMale", {
            value: function() {
                return IsMale;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getMaxMP", {
            value: function() {
                return MaxMP;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setMaxMP", {
            value: function(newMaxMP) {
                if (typeof newMaxMP === "number" && newMaxMP > 0 ) {
                    MaxMP = newMaxMP;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getSpirit", {
            value: function() {
                return Spirit;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setSpirit", {
            value: function(newSpirit) {
                if (typeof newSpirit === "number" && newSpirit > 0 ) {
                    Spirit = newSpirit;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getStamina", {
            value: function() {
                return Stamina;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setStamina", {
            value: function(newStamina) {
                if (typeof newStamina === "number" && newStamina > 0 ) {
                    Stamina = newStamina;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, "getStrength", {
            value: function() {
                return Strength;
            },
            enumerable: true
        });

        Object.defineProperty(this, "setStrength", {
            value: function(newStrength) {
                if (typeof newStrength === "number" && newStrength > 0 ) {
                    Strength = newStrength;
                }
                return this;
            },
                enumerable: true
            });

        Object.defineProperty(this, "getWeaponEquipped", {
            value: function() {
                return WeaponEquipped;
            },
            enumerable: true
        });

        Object.defineProperty(this, "addWeaponEquipped", {
            value: function(item) {

                if (item instanceof Weapon === true) {
                    for (let i = 0; i < WeaponEquipped.length; i++) {
                        if(WeaponEquipped[i].getName() === item.getName()){
                            return false;
                        }
                    }
                    WeaponEquipped.push(item);
                    let length = WeaponEquipped.length;
                    return length;
                }

            },
            enumerable: true
        });

         Object.defineProperty(this, "removeWeaponEquipped", {
            value: function(name) {
                let index, aux;
                for (let i = 0; i < WeaponEquipped.length; i++) {
                    if(WeaponEquipped[i].getName() === name){
                        index = i;
                        aux = WeaponEquipped.splice(index,1);
                        return aux;
                    }
                }
                return false;
            },
            enumerable: true
        });

        Object.defineProperty(this, "switchWeaponEquipped", {
            value: function(newWeaponEquipped) {
                let aux = WeaponEquipped;
                WeaponEquipped = newWeaponEquipped;
                return aux;
            },
            enumerable: true
        });
}


module.exports = Human;
