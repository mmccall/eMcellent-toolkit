"use strict";

var markup = require('./lib/markup.js');
var html = require('./lib/html.js');

function markupObject(inputObject) {

    //Markup Routines.
    if (inputObject.lineRoutines) {
        for (var i in inputObject.lineRoutines) {
            var rtnMarkup = markup.markupCommand(inputObject.lineRoutines[i].mRoutine);
            inputObject.lineRoutines[i].mRoutineMarkup = rtnMarkup;
        }
    }

    return inputObject;
}

function generateHTML(inputObject, inputSpacer, parameters) {

    inputObject.lineHTML = html.generateHTML(inputObject, inputSpacer, parameters);
    return inputObject;

}

module.exports.markupObject = markupObject;
module.exports.generateHTML = generateHTML;
