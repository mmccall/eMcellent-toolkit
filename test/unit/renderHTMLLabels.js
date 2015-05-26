"use strict";

var expect = require('chai').expect;
var render = require('../../lib/html.js');

var leadingLabelTag = "<a class=\"mLabel\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line Label\">";
var trailingTag = "</a>";

describe('Render Labels >', function () {

    it('Absent Test', function (done) {
        var testObject = {};
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('Empty Test', function (done) {
        var testObject = {};
        testObject.lineLabel = "WELL";
        testObject.lineLeadSpace = " ";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingLabelTag + 'WELL' + trailingTag + ' ');
        done();
    });

    it('Leading Space Test', function (done) {
        var testObject = {};
        testObject.lineLeadSpace = "    ";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('    ');
        done();
    });

    it('Leading Tab Test', function (done) {
        var testObject = {};
        testObject.lineLeadSpace = "\t\t";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('\t\t');
        done();
    });

    it('Basic Test', function (done) {
        var testObject = {};
        testObject.lineLabel = "HELLO";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingLabelTag + 'HELLO' + trailingTag);
        done();
    });

    it('Append Basic Test', function (done) {
        var testObject = {};
        testObject.lineLabel = "HELLO WORLD";
        var result = render.renderLabel(testObject, "HELLO WORLD ");
        expect(result).to.exist;
        expect(result).to.equal('HELLO WORLD ' + leadingLabelTag + 'HELLO WORLD' + trailingTag);
        done();
    });

    it('Append Basic Test Space', function (done) {
        var testObject = {};
        testObject.lineLabel = "HELLO";
        testObject.lineLeadSpace = " ";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingLabelTag + 'HELLO' + trailingTag + ' ');
        done();
    });

    it('Append Basic Test Spaces', function (done) {
        var testObject = {};
        testObject.lineLabel = "HELLO";
        testObject.lineLeadSpace = "    ";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingLabelTag + 'HELLO' + trailingTag + '    ');
        done();
    });

    it('Append Basic Test Tab', function (done) {
        var testObject = {};
        testObject.lineLabel = "HELLO";
        testObject.lineLeadSpace = "\t";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingLabelTag + 'HELLO' + trailingTag + '\t');
        done();
    });

    it('Append Basic Test Tabs', function (done) {
        var testObject = {};
        testObject.lineLabel = "HELLO";
        testObject.lineLeadSpace = "\t\t";
        var result = render.renderLabel(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingLabelTag + 'HELLO' + trailingTag + '\t\t');
        done();
    });

});