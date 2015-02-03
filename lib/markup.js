"use strict";

var commands = require('./json/commands.json');

function markupCommand (inputCommand, inputParameters) {

	var tmpCommand = inputCommand.trim().toUpperCase();

	for (var i in commands) {
		var shortName = commands[i].cmdName.substring(0, tmpCommand.length);
		if (shortName === tmpCommand) {
			if (tmpCommand.substring(0,1) === "H") {
				if (inputParameters && commands[i].cmdName === "HANG") {
					return commands[i];
				} else if (!inputParameters && commands[i].cmdName === "HALT") {
					return commands[i];
				}
			} else {
				return commands[i];	
			}
			
		}
	}

	return null;

};

module.exports.markupCommand = markupCommand;