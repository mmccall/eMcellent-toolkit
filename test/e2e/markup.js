"use strict";

var expect = require('chai').expect;
var emcellentToolkit = require('../../index.js');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../sample/XINDEX.m');
var toolkit = require('../../index.js');
var jsDiff = require('diff');

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

describe('Verbose Flag Testing >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
        done();
    });

    it('Negative Test', function (done) {
        var results = toolkit.markup(fileContents, {
            verbose: false
        });
        expect(results).to.equal(fileContents);
        done();
    });

    it('Expected Variance', function (done) {
        var results = toolkit.markup(fileContents, {
            verbose: true
        });
        //Should be a diff, since markup has changed.
        jsDiff.diffLines(fileContents, results, function (err, res) {
            for (var i in res) {
                if (!res[i].count && (!res[i].added || !res[i].removed)) {
                    done(new Error('Every line should have a diff.'));
                }
            }
            done();
        });
    });
});

describe('HTML Output Testing >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
        done();
    });

    it('Negative Test', function (done) {
        var results = toolkit.markup(fileContents, {
            HTML: false
        });
        expect(results).to.equal(fileContents);
        done();
    });

    it('Strip HTML and Diff', function (done) {

        var results = toolkit.markup(fileContents, {
            HTML: true
        });

        //Use Regex to strip tags.
        var breakPattern = /<br\s*[\/]?>/gi;
        var closePattern = /<\s*\/\s*\w\s*.*?>/g;
        var openPattern = /<\s*\w.*?>/g;
        results = results.replace(breakPattern, "\n");
        results = results.replace(closePattern, "");
        results = results.replace(openPattern, "");

        jsDiff.diffLines(fileContents, results, function (err, res) {

            for (var i in res) {
                if (res[i].count || res[i].added || res[i].removed) {
                    done(new Error('File diffs inconsistent, check output'));
                }
            }

            done();

        });

    });

});

describe('HTML/Markup Output Testing >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
        done();
    });

    it('Negative Test', function (done) {
        var results = toolkit.markup(fileContents, {
            HTML: false,
            verbose: false
        });
        expect(results).to.equal(fileContents);
        done();
    });

    it('HTML/Markup Diff', function (done) {

        var results = toolkit.markup(fileContents, {
            HTML: true,
            verbose: true
        });

        //Use Regex to strip tags.
        var breakPattern = /<br\s*[\/]?>/gi;
        var closePattern = /<\s*\/\s*\w\s*.*?>/g;
        var openPattern = /<\s*\w.*?>/g;
        results = results.replace(breakPattern, "\n");
        results = results.replace(closePattern, "");
        results = results.replace(openPattern, "");

        jsDiff.diffLines(fileContents, results, function (err, res) {

            for (var i in res) {
                if (!res[i].count && (!res[i].added || !res[i].removed)) {
                    done(new Error('Every line should have a diff.'));
                }
            }

            done();

        });

    });

});
