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


    	var tmpHTML = "";

        for (var i in mRoutine) {
        	var result = emcellentToolkit.generateHTML(mRoutine[i], " ", {markupFlag: true, markupRoutine: true});
        	tmpHTML = tmpHTML + result.lineHTML + '<br>';
        }

        var tmpText = htmlToText.fromString(tmpHTML);

        console.log(tmpText)


        done();
    });

});

