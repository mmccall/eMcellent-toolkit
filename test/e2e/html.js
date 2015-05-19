"use strict";

var expect = require('chai').expect;
var emcellentToolkit = require('../../index.js');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../sample/XINDEX.m');
var emcellentParse = require('emcellent-parse');
var jsdom = require('jsdom');
var mRoutine;

var fileContents;

describe('Parse Entire XINDEX.m Routine >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
        mRoutine = emcellentParse.parseRoutine(fileContents);
        done();
    });

    it('Ensure all lines are parsed', function (done) {

        var tmpHTML = "";

        for (var i in mRoutine) {
            var result = emcellentToolkit.generateHTML(mRoutine[i], " ", {
                markupFlag: true,
                markupRoutine: true
            });
            tmpHTML = tmpHTML + "<div>" + result.lineHTML + "</div>";
        }

        jsdom.env(tmpHTML, ["http://code.jquery.com/jquery.js"],
            function (errors, window) {

                var testText = "";
            	window.$("div").each(function(index) {
                    console.log(window.$(this).html());
                    testText = testText + window.$( this ).children().text() + "\n";
            	});

                console.log(testText);
                //if (fileContents === testText) {
                //    console.log('asdf');
                //}
                //console.log(fileContents);
            	//var tmpVal = window.$("a").text() + "\n"; 
                //console.log(tmpVal);
                //console.log(window.$("body"));
                done();

            });

        //done();
    });

});
