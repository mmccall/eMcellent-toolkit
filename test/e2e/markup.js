"use strict";

var expect = require('chai').expect;
var emcellentToolkit = require('../../index.js');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../sample/XINDEX.m');
var toolkit = require('../../index.js');

var mRoutine;
var fileContents;

describe('Basic Entry Routine Testing >', function () {

    it('Test Entry Point Null', function (done) {
        var results = toolkit.markup(null);
        expect(results).to.equal(null);
        done();
    });

    it('Test Entry Point Null/Empty', function (done) {
        var results = toolkit.markup(null, {});
        expect(results).to.equal(null);
        done();
    });

    it('Test Entry Point Non-String Input', function (done) {
        try {
            var results = toolkit.markup({
                test: 'value'
            });
        } catch (err) {
            expect(err.message).to.equal('input must be a string');
            done();
        }
    });

    it('Test Entry Point Bad Arguments Object', function (done) {
        try {
            var results = toolkit.markup('TEST', true);
        } catch (err) {
            expect(err.message).to.equal('options must be an object');
            done();
        }
    });

    it('Test Entry Point Absent Arguments', function (done) {
        var results = toolkit.markup('TEST');
        expect(results).to.equal('TEST');
        done();
    });

});

describe('Routine Parser Testing >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
        done();
    });

    it('Test Entry Point Basic', function (done) {
        var results = toolkit.markup(fileContents);
        expect(results).to.equal(fileContents);
        done();
    });

});
