(function() {
    'use strict';

    const Item = require('./Item');

    function Potion() {
        let HPRestore = arguments[7],
            MPRestore = arguments[8];

        Item.apply(this, arguments);

        Object.defineProperty(this, 'getHPRestore', {
            value: function getHPRestore() {
                return HPRestore;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getMPRestore', {
            value: function getMPRestore() {
                return MPRestore;
            },
            enumerable: true
        });
    }

    module.exports = Potion;

}());
