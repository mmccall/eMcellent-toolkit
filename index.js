"use strict";

//var markup = require('./lib/markup.js');
var html = require('./lib/html.js');
var m = require('emcellent');
var _ = require('lodash');

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
            if (options.HTML) {
                HTMLFlag = true;
            }
            if (options.verbose) {
                verboseFlag = true;
            } else {
                results = inputString;
            }
        }
    } else {
        results = inputString;
    }

    return results;

}

module.exports.markup = markup;