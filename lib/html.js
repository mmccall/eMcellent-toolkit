"use strict";

//Append Line Label and Lead Spacing.
function renderLabel(inputObject, inputLine) {

    var leadingLabelTag = "<a class=\"mLabel\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line Label\">";
    var trailingTag = "</a>";

    if (inputObject.lineLabel) {
        inputLine = inputLine + leadingLabelTag + inputObject.lineLabel + trailingTag;
    }
    if (inputObject.lineLeadSpace) {
        inputLine = inputLine + inputObject.lineLeadSpace;
    }
    return inputLine;
}

//Append Indentation to Label/Spacing.
function renderIndentation(inputObject, inputLine) {

    var leadingIndentTag = "<a class=\"mIndentation\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line Level\">";
    var trailingTag = "</a>";
    var tmpIndentation = "";

    if (inputObject.lineIndentationArray) {
        if (inputObject.lineIndentationArray.length > 0) {
            for (var i in inputObject.lineIndentationArray) {
                tmpIndentation = tmpIndentation + leadingIndentTag + "." + trailingTag + inputObject.lineIndentationArray[i];
            }
            inputLine = inputLine + tmpIndentation;
        }
    }
    return inputLine;
}

//Append Routines to Label/Spacing/Indentation.
function renderRoutines(inputObject, inputLine) {

    var leadingRtnTag = "<a class=\"mRoutine\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Routine\">";
    var leadingPCTag = "<a class=\"mPostConditional\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Post Conditional\">";
    var leadingArgTag = "<a class=\"mArguments\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Arguments\">";
    var trailingTag = "</a>";

    if (inputObject.lineRoutines) {
        for (var i in inputObject.lineRoutines) {
            if (inputObject.lineRoutines[i].mRoutine || inputObject.lineRoutines[i].mRoutine === "") {
                //Leave off interval spacing for first Routine.
                if (i === "0") {
                    inputLine = inputLine + leadingRtnTag + inputObject.lineRoutines[i].mRoutine + trailingTag;
                } else {
                    inputLine = inputLine + " " + leadingRtnTag + inputObject.lineRoutines[i].mRoutine + trailingTag;
                }
                //Append Post-Conditional.
                if (inputObject.lineRoutines[i].mPostConditional) {
                    inputLine = inputLine + ":" + leadingPCTag + inputObject.lineRoutines[i].mPostConditional + trailingTag;
                }
                //Append Arguments.
                if (inputObject.lineRoutines[i].hasOwnProperty("mArguments")) {
                    inputLine = inputLine + " " + leadingArgTag + inputObject.lineRoutines[i].mArguments + trailingTag;
                }
            }
        }
    }
    return inputLine;
}

//Append Comment.
function renderComment(inputObject, inputLine) {

    var leadingTag = "<a class=\"mComment\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Comments\">";
    var trailingTag = "</a>";

    if (inputObject.hasOwnProperty("lineComment")) {
        inputLine = inputLine + leadingTag + ";" + inputObject.lineComment + trailingTag;
    }
    return inputLine;
}

//Export all Routines.
module.exports.renderLabel = renderLabel;
module.exports.renderIndentation = renderIndentation;
module.exports.renderRoutines = renderRoutines;
module.exports.renderComment = renderComment;