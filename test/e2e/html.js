"use strict";

var expect = require('chai').expect;
var emcellentToolkit = require('../../index.js');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../sample/XINDEX.m');
var toolkit = require('../../index');
var jsDiff = require('diff');

var fileContents;

describe('Parse Entire XINDEX.m Routine >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
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
