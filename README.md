# eMcellent-toolkit


A most excellent toolkit for use with eMcellent-parse M/MUMPS parsing library; eMcellent-toolkit takes JSON representations of M/MUMPS code and performs manipulation and/or markup of the data.

### Getting Started

The code is built to be run in either Node.js or the browser; it uses native Javascript parsing and has no intrinsic dependencies outside of those used during builds.

To use in Node.js, the package is available via `npm`.  To use locally, you will only need to install dependencies using `npm install`.  To test, the default `grunt` task will execute all test cases.

To use in the browser, install dependencies with `npm install`, and run `grunt build:browser`.  Browserify will convert the package into a Commonjs format, minify it, and output it to `/dist/emcellent-toolkit.min.js`.

### Functions

The library has one entry function; note that all functions are synchronous.

#### parseLine

`markupObject(inputObject)`

Takes a M/MUMPS object, and decorates it with information about the routines it contains

`inputObject` - A M/MUMPS object returned from the eMcellent-parse library.

### Return Format

The object will be returned in the format below:

```
{
	lineLabel: String,
	lineNumber: Number,
	lineComment: String,
	lineIndentation: Number,
    lineRoutines: [{
        mRoutine: String,
        mRoutineMarkup: {
            routineName: String,
            routineSyntax: String,
            routineDesc: String
        },
        mArguments: String,
        mPostConditional: String,
    }]
}
```
### Contributions

Pull requests are welcome, just be sure to include test cases.
