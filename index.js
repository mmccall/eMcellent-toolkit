"use strict";

//var markup = require('./lib/markup.js');
var html = require('./lib/html.js');
var codeMarkup = require('./lib/markup.js');
var m = require('emcellent');
var _ = require('lodash');

function markupObject(inputObject) {

    var results = _.map(inputObject, function (entry) {
        var newEntry = codeMarkup.markupCommand(entry);
        return newEntry;
    });

    return results;
}

function renderHTML(inputObject) {

    var results = "";
    _.each(inputObject, function (entry, index) {
        var tmpLine = "";
        //Rendering must be performed sequentially.
        tmpLine = html.renderLabel(entry, tmpLine);
        tmpLine = html.renderIndentation(entry, tmpLine);
        tmpLine = html.renderRoutines(entry, tmpLine);
        tmpLine = html.renderComment(entry, tmpLine);

        if (index === (inputObject.length - 1)) {
            results = results + tmpLine;
        } else {
            results = results + tmpLine + "<br>";
        }

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

            //input flagging.
            if (options.verbose) {
                parsedObject = markupObject(parsedObject);
            }

            //output formatting.
            if (options.HTML) {
                results = renderHTML(parsedObject);
            } else {
                results = m.render(parsedObject);
            }
        }
    } else {
        results = inputString;
    }

    return results;

}

module.exports.markup = markup;
