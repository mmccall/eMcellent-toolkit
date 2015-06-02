"use strict";

var expect = require('chai').expect;
var render = require('../../lib/html.js');

var leadingIndentTag = "<a class=\"mIndentation\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line Level\">";
var trailingTag = "</a>";

describe('Render Indentation >', function () {

    it('Absent Test', function (done) {
        var testObject = {};
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('Zero Test', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = [];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('One Test Basic', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = [""];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag);
        done();
    });

    it('Two Test Basic', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = ["", ""];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + leadingIndentTag + '.' + trailingTag);
        done();
    });

    it('One Test Indentation', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = [' '];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + ' ');
        done();
    });

    it('Two Test Indentation', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = [" ", " "];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + ' ' + leadingIndentTag + '.' + trailingTag + ' ');
        done();
    });

    it('One Test Indentation False', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = [""];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag);
        done();
    });

    it('Two Test Indentation False', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = ["", ""];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + leadingIndentTag + '.' + trailingTag);
        done();
    });

    it('Indentation Comment Test', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = ["   "];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + '   ');
        done();
    });

    it('Variable Spacing Test', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = ["   ", " "];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + '   ' + leadingIndentTag + '.' + trailingTag + ' ');
        done();
    });

    it('Variable Tab Test', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = ["\t\t", "\t"];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + '\t\t' + leadingIndentTag + '.' + trailingTag + '\t');
        done();
    });

    it('Tab Spacing Mix Test', function (done) {
        var testObject = {};
        testObject.lineIndentationArray = ["\t\t", " "];
        var result = render.renderIndentation(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingIndentTag + '.' + trailingTag + '\t\t' + leadingIndentTag + '.' + trailingTag + ' ');
        done();
    });

});
