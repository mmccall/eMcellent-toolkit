"use strict";

function generateHTML(inputObject, inputSpacer, inputParameters) {

    var returnHTML = "";
    var markupFlag = false;

    if (inputParameters) {
        if (inputParameters.markupFlag) {
            markupFlag = true;
        }
    }

    if (inputObject.lineLabel) {
        if (markupFlag) {
            returnHTML = returnHTML + "<a class=\"mLabel\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line Label\">" + inputObject.lineLabel + "</a>";
        } else {
            returnHTML = returnHTML + "<a class=\"mLabel\">" + inputObject.lineLabel + "</a>";
        }
    } else {
        returnHTML = returnHTML;
    }

    if (inputObject.lineIndentation) {
        var tmpIndentation = "";
        for (var i = 0; i < inputObject.lineIndentation; i++) {
            if (i === 0) {
                tmpIndentation = tmpIndentation + ".";
            } else {
                tmpIndentation = tmpIndentation + inputSpacer + ".";
            }

        }

        tmpIndentation = inputSpacer + tmpIndentation;

        if (markupFlag) {
            returnHTML = returnHTML + "<a class=\"mIndentation\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line Level\">" + tmpIndentation + "</a>";
        } else {
            returnHTML = returnHTML + "<a class=\"mIndentation\">" + tmpIndentation + "</a>";
        }
    }

    if (inputObject.lineRoutines) {
        for (var ii in inputObject.lineRoutines) {
            var currentRoutine = inputObject.lineRoutines[ii];
            if (markupFlag) {

                returnHTML = returnHTML + inputSpacer + "<a class=\"mRoutine\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Routine\">" + currentRoutine.mRoutine + "</a>";

                if (currentRoutine.mPostConditional) {
                    returnHTML = returnHTML + ":" + "<a class=\"mPostConditional\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Post Conditional\">" + currentRoutine.mPostConditional + "</a>";
                }

                if (currentRoutine.mArguments || currentRoutine.mArguments === "") {
                    returnHTML = returnHTML + inputSpacer + "<a class=\"mArguments\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Arguments\">" + currentRoutine.mArguments + "</a>";
                }
            } else {
                returnHTML = returnHTML + inputSpacer + "<a class=\"mRoutine\">" + currentRoutine.mRoutine + "</a>";

                if (currentRoutine.mPostConditional) {
                    returnHTML = returnHTML + ":" + "<a class=\"mPostConditional\">" + currentRoutine.mPostConditional + "</a>";
                }

                if (currentRoutine.mArguments || currentRoutine.mArguments === "") {
                    returnHTML = returnHTML + inputSpacer + "<a class=\"mArguments\">" + currentRoutine.mArguments + "</a>";
                }

            }
        }
    }

    if (inputObject.lineComment || inputObject.lineComment === "") {
        if (markupFlag) {
            returnHTML = returnHTML + inputSpacer + "<a class=\"mComment\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Comments\">" + ";" + inputObject.lineComment + "</a>";
        } else {
            returnHTML = returnHTML + inputSpacer + "<a class=\"mComment\">" + ";" + inputObject.lineComment + "</a>";
        }
    }

    return returnHTML;

}

module.exports.generateHTML = generateHTML;
