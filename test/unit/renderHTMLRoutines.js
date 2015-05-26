"use strict";

var expect = require('chai').expect;
var render = require('../../lib/html.js');

var leadingRtnTag = "<a class=\"mRoutine\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Routine\">";
var leadingPCTag = "<a class=\"mPostConditional\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Post Conditional\">";
var leadingArgTag = "<a class=\"mArguments\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Arguments\">";
var trailingTag = "</a>";

describe('Render Routines >', function () {

    it('Absent Test', function (done) {
        var testObject = {};
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('-Routine', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{}];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('+Routine -Arguments', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "W"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + 'W' + trailingTag);
        done();
    });

    it('-Routine +Arguments', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mArguments: "HELLO WORLD"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('+Routine +Arguments', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "W",
            mArguments: "HELLO WORLD"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + 'W' + trailingTag + ' ' + leadingArgTag + 'HELLO WORLD' + trailingTag);
        done();
    });

    it('+Routine -Arguments +PostConditional', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "W",
            mPostConditional: "HOWRU"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + 'W' + trailingTag + ":" + leadingPCTag + 'HOWRU' + trailingTag);
        done();
    });

    it('-Routine -Arguments +PostConditional', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mPostConditional: "HOWRU"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal('');
        done();
    });

    it('+Routine +Arguments +PostConditional', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "W",
            mArguments: "HELLO WORLD",
            mPostConditional: "HOWRU"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + 'W' + trailingTag + ':' + leadingPCTag + 'HOWRU' + trailingTag + ' ' + leadingArgTag + 'HELLO WORLD' + trailingTag);
        done();
    });

    it('Empty Routine +Arguments +PostConditional', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "",
            mArguments: "HELLO WORLD",
            mPostConditional: "HOWRU"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + trailingTag + ':' + leadingPCTag + 'HOWRU' + trailingTag + ' ' + leadingArgTag + 'HELLO WORLD' + trailingTag);
        done();
    });

    it('No Leading Space', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "W"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + 'W' + trailingTag);
        done();
    });

    it('Multiple Routines', function (done) {
        var testObject = {};
        testObject.lineRoutines = [{
            mRoutine: "W",
            mArguments: "HELLO WORLD",
            mPostConditional: "HOWRU"
        }, {
            mRoutine: "D",
            mArguments: "SOMETHING"
        }];
        var result = render.renderRoutines(testObject, "");
        expect(result).to.exist;
        expect(result).to.equal(leadingRtnTag + 'W' + trailingTag + ':' + leadingPCTag + 'HOWRU' + trailingTag + ' ' + leadingArgTag + 'HELLO WORLD' + trailingTag + ' ' + leadingRtnTag + 'D' + trailingTag + ' ' + leadingArgTag + 'SOMETHING' + trailingTag);
        done();
    });

    it('Test Indentation/Label Append 1', function (done) {
        var testObject = {};
        testObject.lineLabel = "TEST";
        testObject.lineRoutines = [{
            mRoutine: "W",
            mArguments: "HELLO WORLD",
            mPostConditional: "HOWRU"
        }, {
            mRoutine: "D",
            mArguments: "SOMETHING"
        }];
        var result = render.renderRoutines(testObject, "  ");
        expect(result).to.exist;
        expect(result).to.equal('  ' + leadingRtnTag + 'W' + trailingTag + ':' + leadingPCTag + 'HOWRU' + trailingTag + ' ' + leadingArgTag + 'HELLO WORLD' + trailingTag + ' ' + leadingRtnTag + 'D' + trailingTag + ' ' + leadingArgTag + 'SOMETHING' + trailingTag);
        done();
    });

    it('Test Indentation/Label Append 2', function (done) {
        var testObject = {};
        testObject.lineLabel = "TEST";
        testObject.lineIndentationLead = "  ";
        testObject.lineRoutines = [{
            mRoutine: "W",
            mArguments: "HELLO WORLD",
            mPostConditional: "HOWRU"
        }, {
            mRoutine: "D",
            mArguments: "SOMETHING"
        }];
        var result = render.renderRoutines(testObject, "TEST ");
        expect(result).to.exist;
        expect(result).to.equal('TEST ' + leadingRtnTag + 'W' + trailingTag + ':' + leadingPCTag + 'HOWRU' + trailingTag + ' ' + leadingArgTag + 'HELLO WORLD' + trailingTag + ' ' + leadingRtnTag + 'D' + trailingTag + ' ' + leadingArgTag + 'SOMETHING' + trailingTag);
        done();
    });

});