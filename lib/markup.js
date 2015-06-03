"use strict";

var commands = require('./json/commands.json');
var _ = require('lodash');

//Takes full object, marks up Routines with full name, returns full object.
function markupCommand(inputObject) {

    if (!inputObject) {
        return null;
    }

    if (!inputObject.lineRoutines) {
        return inputObject;
    }

    _.each(inputObject.lineRoutines, function (lineRoutine) {
        if (lineRoutine.mRoutine) {

            var tmpRoutine = lineRoutine.mRoutine.trim().toUpperCase();
            var tmpCommand = _.find(commands, function (command) {
                var tmpCommand = {};
                var shortName = command.routineName.substring(0, tmpRoutine.length);
                if (shortName === tmpRoutine) {
                    if (tmpRoutine.substring(0, 1) === "H") {
                        if (_.isUndefined(lineRoutine.mArguments) && command.routineName === "HALT") {
                            return true;
                        } else if (!_.isUndefined(lineRoutine.mArguments) && command.routineName === "HANG") {
                            return true;
                        }
                    } else {
                        return true;

                    }
                }
            });

            if (tmpCommand) {
                lineRoutine.mRoutine = tmpCommand.routineName;
                lineRoutine.mRoutineMarkup = tmpCommand;
            }
        }

    });
    return inputObject;
}

module.exports.markupCommand = markupCommand;
