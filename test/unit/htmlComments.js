"use strict";

var expect = require('chai').expect;
var render = require('../../lib/html.js');

var leadingContent = "<a class=\"mComment\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Comments\">";
var trailingContent = "</a>";

describe('Render Comments >', function () {

    it('Absent Test', function (done) {
        var testObject = {};
        var result = render.renderComment(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('Empty Test', function (done) {
        var testObject = {};
        testObject.lineComment = " ";
        var result = render.renderComment(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingContent + '; ' + trailingContent);
        done();
    });

    it('Basic Test', function (done) {
        var testObject = {};
        testObject.lineComment = "HELLO";
        var result = render.renderComment(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingContent + ';HELLO' + trailingContent);
        done();
    });

    it('Append Basic Test', function (done) {
        var testObject = {};
        testObject.lineComment = "HELLO WORLD";
        var result = render.renderComment(testObject, "HELLO WORLD ");
        expect(result).to.exist;
        expect(result).to.equal("HELLO WORLD " + leadingContent + ";HELLO WORLD" + trailingContent);
        done();
    });

});
