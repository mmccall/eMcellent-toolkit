"use strict";

var expect = require('chai').expect;
var emcellentToolkit = require('../../index.js');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../sample/XINDEX.m');
var emcellentParse = require('emcellent-parse');

var mRoutine;

describe('Parse Entire XINDEX.m Routine >', function () {

    before(function (done) {
        var fileContents = fs.readFileSync(filePath, 'utf8');
        mRoutine = emcellentParse.parseRoutine(fileContents);
        done();
    });

    it('Ensure all lines are parsed', function (done) {

        for (var i in mRoutine) {
            mRoutine[i] = emcellentToolkit.markupObject(mRoutine[i]);
            for (var ii in mRoutine[i].lineRoutines) {
                var markupObj = mRoutine[i].lineRoutines[ii];
                if (markupObj.mRoutine) {
                    expect(markupObj.mRoutineMarkup).to.exist;
                }
            }
        }
        
        done();
    });

});
