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

    execFile('mkdir', [ '-p', line ], function(err, stdout, stderr) {
        if (err) return done('' + err);
        done();
    });
};

// ----------------------------------------------------------------------------
