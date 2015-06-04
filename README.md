# eMcellent-toolkit

[![Build Status](https://travis-ci.org/mmccall/eMcellent-toolkit.svg?branch=master)](https://travis-ci.org/mmccall/eMcellent-toolkit) [![Coverage Status](https://coveralls.io/repos/mmccall/eMcellent-toolkit/badge.svg)](https://coveralls.io/r/mmccall/eMcellent-toolkit)

A most excellent toolkit for use with eMcellent M/MUMPS parsing library; eMcellent-toolkit builds on the library to provide HTML rendering and syntatic markup services.

### Getting Started

The code is built to be run in either Node.js or the browser.

To use in Node.js, the package is available via `npm`.  To use locally, you will only need to install dependencies using `npm install`.  To test, the default `grunt` task will execute all test cases.

To use in the browser, install dependencies with `npm install`, and run `grunt build:browser`.  Browserify will convert the package into a Commonjs format, minify it, and output it to `/dist/emcellent-toolkit.min.js`.

### Functions

The library has one entry function.  In the browser, this can be accessed as an element of the mTools object (ex. `mTools.markup();` ).

#### markup()

`markup(inputMUMPS, options)`

Takes a M/MUMPS object, and decorates it with information about the routines it contains

`inputMUMPS` - A line or lines of MUMPS code.

`options` - optional parsing parameters for the library.

+ `HTML` - Returns the input as HTML for browser display.
+ `verbose` - Expands all routine names, and adds more detail to HTML output.


### Demo

A demo single page application is available [here](http://mmccall.github.io/eMcellent-toolkit/).

### Contributions

Pull requests are welcome, just be sure to include test cases.
