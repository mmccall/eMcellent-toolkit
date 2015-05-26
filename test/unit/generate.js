"use strict";

var expect = require('chai').expect;
var markup = require('../../lib/html.js');

describe('Test Commands >', function () {

    it('Trim Spacing Test', function (done) {
        var testLine = ' B ';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('BREAK');
        done();
    });

});