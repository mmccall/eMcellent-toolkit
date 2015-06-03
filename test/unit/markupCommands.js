"use strict";

var expect = require('chai').expect;
var markup = require('../../lib/markup.js');

describe('Test Commands >', function () {

    it('No Object Test', function (done) {
        var result = markup.markupCommand(null);
        expect(result).to.equal(null);
        done();
    });

    it('Trim Spacing Test', function (done) {
        var testLine = ' B ';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal('BREAK');
        done();
    });

    it('Case Conversion Test', function (done) {
        var testLine = 'b';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal('BREAK');
        done();
    });

    it('Null/Missing Test', function (done) {
        var testLine = null;
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result.lineRoutines[0].mRoutine).to.equal(null);
        done();
    });

    it('Unmatched Test', function (done) {
        var testLine = "Z";
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result.lineRoutines[0].mRoutine).to.equal("Z");
        done();
    });

    it('BREAK Test', function (done) {
        var testLine = 'B';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("BREAK");
        done();
    });

    it('CLOSE Test', function (done) {
        var testLine = 'C';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("CLOSE");
        done();
    });

    it('DO Test', function (done) {
        var testLine = 'D';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("DO");
        done();
    });

    it('ELSE Test', function (done) {
        var testLine = 'E';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("ELSE");
        done();
    });

    it('FOR Test', function (done) {
        var testLine = 'F';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("FOR");
        done();
    });

    it('GOTO Test', function (done) {
        var testLine = 'G';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("GOTO");
        done();
    });

    it('HALT Test', function (done) {
        var testLine = 'H';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("HALT");
        done();
    });

    it('HANG Test', function (done) {
        var testLine = 'H';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine,
            mArguments: 3000
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("HANG");
        done();
    });

    it('IF Test', function (done) {
        var testLine = 'I';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("IF");
        done();
    });

    it('JOB Test', function (done) {
        var testLine = 'J';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("JOB");
        done();
    });

    it('KILL Test', function (done) {
        var testLine = 'K';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("KILL");
        done();
    });

    it('LOCK Test', function (done) {
        var testLine = 'L';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("LOCK");
        done();
    });

    it('MERGE Test', function (done) {
        var testLine = 'M';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("MERGE");
        done();
    });

    it('NEW Test', function (done) {
        var testLine = 'N';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("NEW");
        done();
    });

    it('OPEN Test', function (done) {
        var testLine = 'O';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("OPEN");
        done();
    });

    it('QUIT Test', function (done) {
        var testLine = 'Q';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("QUIT");
        done();
    });

    it('READ Test', function (done) {
        var testLine = 'R';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("READ");
        done();
    });

    it('SET Test', function (done) {
        var testLine = 'S';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("SET");
        done();
    });

    it('TCOMMIT Test', function (done) {
        var testLine = 'TC';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("TCOMMIT");
        done();
    });

    it('TRESTART Test', function (done) {
        var testLine = 'TRE';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("TRESTART");
        done();
    });

    it('TROLLBACK Test', function (done) {
        var testLine = 'TRO';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("TROLLBACK");
        done();
    });

    it('TSTART Test', function (done) {
        var testLine = 'TS';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("TSTART");
        done();
    });

    it('USE Test', function (done) {
        var testLine = 'U';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("USE");
        done();
    });

    it('VIEW Test', function (done) {
        var testLine = 'V';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("VIEW");
        done();
    });

    it('WRITE Test', function (done) {
        var testLine = 'W';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("WRITE");
        done();
    });

    it('XECUTE Test', function (done) {
        var testLine = 'X';
        var tmpObject = {};
        tmpObject.lineRoutines = [{
            mRoutine: testLine
        }];
        var result = markup.markupCommand(tmpObject);
        expect(result).to.exist;
        expect(result.lineRoutines[0].mRoutine).to.equal("XECUTE");
        done();
    });

});
