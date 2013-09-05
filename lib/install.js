// ----------------------------------------------------------------------------
//
// gaffer.js - The boss ... helps you install things.
//
// Copyright 2013 Andrew Chilton.  All rights reserved.
//
// ----------------------------------------------------------------------------

var execFile = require('child_process').execFile;

// ----------------------------------------------------------------------------

module.exports = function(line, done) {
    console.log('- ' + line);

    var args = line.split(/\s+/);
    var file = args[0];
    var dir = args[1];
    execFile('cp', [ file, dir ], function(err, stdout, stderr) {
        if (err) return done('' + err);
        done();
    });
};

// ----------------------------------------------------------------------------
