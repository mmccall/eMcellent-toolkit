"use strict";

var expect = require('chai').expect;
var markup = require('../../lib/markup.js');

describe('Test Commands >', function () {

    it('Trim Spacing Test', function (done) {
        var testLine = ' B ';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('BREAK');
        done();
    });

    it('Case Conversion Test', function (done) {
        var testLine = 'b';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('BREAK');
        done();
    });

    it('Null/Missing Test', function (done) {
        var testLine = null;
        var result = markup.markupCommand(testLine, null);
        expect(result).to.equal(null);
        done();
    });

    it('Unmatched Test', function (done) {
        var testLine = "Z";
        var result = markup.markupCommand(testLine, null);
        expect(result).to.equal(null);
        done();
    });

    it('BREAK Test', function (done) {
        var testLine = 'B';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('BREAK');
        done();
    });

    it('CLOSE Test', function (done) {
        var testLine = 'C';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('CLOSE');
        done();
    });

    it('DO Test', function (done) {
        var testLine = 'D';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('DO');
        done();
    });

    it('ELSE Test', function (done) {
        var testLine = 'E';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('ELSE');
        done();
    });

    it('FOR Test', function (done) {
        var testLine = 'F';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('FOR');
        done();
    });

    it('GOTO Test', function (done) {
        var testLine = 'G';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('GOTO');
        done();
    });

    it('HALT Test', function (done) {
        var testLine = 'H';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('HALT');
        done();
    });

    it('HANG Test', function (done) {
        var testLine = 'H';
        var result = markup.markupCommand(testLine, 3000);
        expect(result).to.exist;
        expect(result.routineName).to.equal('HANG');
        done();
    });

    it('IF Test', function (done) {
        var testLine = 'I';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('IF');
        done();
    });

    it('JOB Test', function (done) {
        var testLine = 'J';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('JOB');
        done();
    });

    it('KILL Test', function (done) {
        var testLine = 'K';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('KILL');
        done();
    });

    it('LOCK Test', function (done) {
        var testLine = 'L';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('LOCK');
        done();
    });

    it('MERGE Test', function (done) {
        var testLine = 'M';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('MERGE');
        done();
    });

    it('NEW Test', function (done) {
        var testLine = 'N';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('NEW');
        done();
    });

    it('OPEN Test', function (done) {
        var testLine = 'O';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('OPEN');
        done();
    });

    it('QUIT Test', function (done) {
        var testLine = 'Q';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('QUIT');
        done();
    });

    it('READ Test', function (done) {
        var testLine = 'R';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('READ');
        done();
    });

    it('SET Test', function (done) {
        var testLine = 'S';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('SET');
        done();
    });

    it('TCOMMIT Test', function (done) {
        var testLine = 'TC';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('TCOMMIT');
        done();
    });

    it('TRESTART Test', function (done) {
        var testLine = 'TRE';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('TRESTART');
        done();
    });

    it('TROLLBACK Test', function (done) {
        var testLine = 'TRO';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('TROLLBACK');
        done();
    });

    it('TSTART Test', function (done) {
        var testLine = 'TS';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('TSTART');
        done();
    });

    it('USE Test', function (done) {
        var testLine = 'U';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('USE');
        done();
    });

    it('VIEW Test', function (done) {
        var testLine = 'V';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('VIEW');
        done();
    });

    it('WRITE Test', function (done) {
        var testLine = 'W';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('WRITE');
        done();
    });

    it('XECUTE Test', function (done) {
        var testLine = 'X';
        var result = markup.markupCommand(testLine, null);
        expect(result).to.exist;
        expect(result.routineName).to.equal('XECUTE');
        done();
    });

});
