"use strict";
function Character(ID , Name , MaxHP, CurrentPH) {

    Object.defineProperty(this, "getID", {
        value: function() {
            return ID;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getName", {
        value: function() {
            return Name;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getCurrentHP", {
        value: function() {
            return CurrentPH;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setCurrentHP", {
        value: function(newPH) {
            if (typeof newPH === "number") {
                if (newPH > this.getMaxHP()) {
                    CurrentPH = this.getMaxHP();
                } else {
                    CurrentPH = newPH;
                }
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxHP", {
        value: function() {
            return MaxHP;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMaxHP", {
        value: function(newMaxHP) {
            if (typeof newMaxHP === "number" && newMaxHP > 0 ) {
                MaxHP = newMaxHP;
            }
            return this;
        },
        enumerable: true
    });
}


module.exports = Character;
