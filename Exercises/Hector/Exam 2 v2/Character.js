"use strict";

function Character(_id, _name, _maxHP, _currentHP){
    let ID = _id;
    let Name = _name;
    let MaxHP = _maxHP;
    let CurrentHP = _currentHP;
    Object.defineProperties(this, {
        "getID": {
            value: function() {
                return ID;
            },
            enumerable: true
        },
        "getName": {
            value: function() {
                return Name;
            },
            enumerable: true
        },
        "getCurrentHP": {
            value: function() {
                return CurrentHP;
            },
            enumerable: true
        },
        "setCurrentHP": {
            value: function(newHP) {
                let max = this.getMaxHP();
                if (typeof newHP === "number") {
                    if (newHP <= max && newHP > 0) {
                        CurrentHP = newHP;
                        return this;
                    } else {
                        CurrentHP = max;
                        return this;
                    }
                }
            },
            enumerable: true
        },
        "getMaxHP": {
            value: function() {
                return MaxHP;
            },
            enumerable: true
        },
        "setMaxHP": {
            value: function (newMaxHP) {
                if (typeof newMaxHP === "number" && newMaxHP > 0) {
                    MaxHP = newMaxHP;
                    return this;
                }
            },
            enumerable: true
        }
    });
}
module.exports = Character;
