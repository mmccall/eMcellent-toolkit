"use strict";

//var markup = require('./lib/markup.js');
var html = require('./lib/html.js');
var m = require('emcellent');
var _ = require('lodash');

/*function markupObject(inputObject) {

    //Markup Routines.
    if (inputObject.lineRoutines) {
        for (var i in inputObject.lineRoutines) {
            var rtnMarkup = markup.markupCommand(inputObject.lineRoutines[i].mRoutine);
            inputObject.lineRoutines[i].mRoutineMarkup = rtnMarkup;
        }
    }

    return inputObject;
}*/

function renderHTML(inputObject) {

    var results = "";

    _.each(inputObject, function(entry) {
        var tmpLine = "";
        //Rendering must be performed sequentially.
        tmpLine = html.renderLabel(entry, tmpLine);
        tmpLine = html.renderIndentation(entry, tmpLine);
        tmpLine = html.renderRoutines(entry, tmpLine);
        tmpLine = html.renderComment(entry, tmpLine);
        results = results + tmpLine + "<br>";
    });

    return results;

}

//Single entry point, takes either HTML or verbose flags in JSON options.
function markup(inputString, options) {

    var HTMLFlag = false;
    var verboseFlag = false;
    var results = "";

    //Exit if input null.
    if (_.isNull(inputString)) {
        return null;
    }

    //Exit if non-string input.
    if (!_.isString(inputString)) {
        throw new Error("input must be a string");
    }

    if (!_.isUndefined(options)) {
        if (!_.isPlainObject(options)) {
            throw new Error("options must be an object");
        } else {

            var parsedObject = m.parse(inputString);

            if (options.HTML) {
                HTMLFlag = true;
                results = renderHTML(parsedObject);
            }
            if (options.verbose) {
                verboseFlag = true;
            }
        }
    } else {
        results = inputString;
    }

    return results;

}

module.exports.markup = markup;