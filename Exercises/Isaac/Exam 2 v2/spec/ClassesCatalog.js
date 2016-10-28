(function() {
    'use strict';

    let Classes = {};

    Classes.Character = {};

    // Character Class
    Classes.Character.inheritedProperties = [];
    Classes.Character.properties = ['id', 'name', 'maxHP', 'currentHP'];
    Classes.Character.inheritedMethods = [];
    Classes.Character.methods = [
        {name: 'getID',   type: 'getter', attr: 'id'},
        {name: 'getName', type: 'getter', attr: 'name'},
        {name: 'getCurrentHP', type: 'getter', attr: 'currentHP'},
        {name: 'setCurrentHP', type: 'setter', attr: 'currentHP', get: 'getCurrentHP'},
        {name: 'getMaxHP', type: 'getter', attr: 'maxHP'},
        {name: 'setMaxHP', type: 'setter', attr: 'maxHP', get: 'getMaxHP'}
    ];

    module.exports = Classes;

}());
