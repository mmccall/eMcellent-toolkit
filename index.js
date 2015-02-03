"use strict";

var markup = require('./lib/markup.js');

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

module.exports.markupObject = markupObject;
