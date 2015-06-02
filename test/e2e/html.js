"use strict";

var expect = require('chai').expect;
var emcellentToolkit = require('../../index.js');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../sample/XINDEX.m');
var toolkit = require('../../index');
var jsDiff = require('diff');
var htmlStrip = require('htmlStrip-native');

var fileContents;

describe('Parse Entire XINDEX.m Routine >', function () {

    before(function (done) {
        fileContents = fs.readFileSync(filePath, 'utf8');
        done();
    });

    it('Ensure all lines are parsed', function (done) {

        //.log(fileContents);
        var HTMLResults = "";

        var results = toolkit.markup(fileContents, {HTML: true});
        
        var regex = /<br\s*[\/]?>/gi;
        var res = results.replace(regex, "\n");
        HTMLResults = htmlStrip.html_strip(res, {});
        console.log(HTMLResults);

        jsDiff.diffLines(fileContents, HTMLResults, function (err, res) {

            console.log(res);
                    done();

        });


        fs.writeFileSync('./tmp.txt', HTMLResults, 'utf8');

        /*for (var i in mRoutine) {
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
    */

    });

});
