/*jshint -W053 */
(function() {
    'use strict';

    var assert = require('../assert');

    describe("Testing assert function", function() {
        it("Should be defined", function() {
            expect(assert).toBeDefined();
        });
        it("Should return true", function() {
            expect(assert.Number(1)).toBe(true);
            expect(assert.Number(new Number(2))).toBe(true);
            expect(assert.String("a")).toBe(true);
            expect(assert.String(new String("a"))).toBe(true);
        });
        it("Should return false", function() {
            expect(assert.Number("a")).toBe(false);
            expect(assert.Number(new Boolean(1))).toBe(false);
            expect(assert.String(1)).toBe(false);
            expect(assert.String(new Boolean(0))).toBe(false);
        });
    });
}());
