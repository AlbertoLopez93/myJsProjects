(function() {
    'use strict';

    const Assert = require('./Assert');

    function Item() {
        let buyPrice = arguments[0],
            count = arguments[1],
            description = arguments[2],
            id = arguments[3],
            name = arguments[4],
            sellPrice = arguments[5],
            weight = arguments[6];

        Object.defineProperty(this, 'getBuyPrice', {
            value: function getBuyPrice() {
                return buyPrice;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getCount', {
            value: function getCount() {
                return count;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setCount', {
            value: function setCount(newCount) {
                if(Assert.Integer(newCount) && newCount >= 0){
                    count = newCount;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getDescription', {
            value: function getDescription() {
                return description;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getID', {
            value: function getID() {
                return id;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getName', {
            value: function getName() {
                return name;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getSellPrice', {
            value: function getSellPrice() {
                return sellPrice;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getWeight', {
            value: function getWeight() {
                return weight;
            },
            enumerable: true
        });

    }

    module.exports = Item;

}());
