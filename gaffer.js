// ----------------------------------------------------------------------------
//
// gaffer.js - The boss ... helps you install things.
//
// Copyright 2013 Andrew Chilton.  All rights reserved.
//
// ----------------------------------------------------------------------------

// core
var fs = require('fs');
var path = require('path');

// npm
var async = require('async');

// ----------------------------------------------------------------------------

var plugins = [
    {
        name   : 'preinstall',
        type   : 'script',
        script : 'preinstall.sh'
    },
    {
        name   : 'dir',
        type   : 'process',
        file   : 'dir',
        fn     : require('./lib/dir.js'),
    },
    {
        name   : 'install',
        type   : 'process',
        file   : 'install',
        fn     : require('./lib/install.js'),
    },
    {
        name   : 'postinstall',
        type   : 'script',
        script : 'postinstall.sh'
    },
];

// ----------------------------------------------------------------------------

module.exports = function(dir) {
    // firstly, check that this directory exists
    fs.stat(dir, function(err, stat) {
        if (err) throw err;

        async.eachSeries(
            plugins,
            function(plugin, done) {
                console.log('Plugin : %s', plugin.name);

                // if this plugin is of type process, call the fn with each line
                if ( plugin.type === 'process' ) {
                    var filename = path.join(dir, plugin.file);
                    fs.readFile(filename, { encoding : 'utf8' }, function(err, data) {
                        var lines;
                        if ( data === undefined ) {
                            lines = [];
                        }
                        else {
                            lines = data.split("\n").filter(function(line) {
                                return line.match(/\S/) && !line.match(/^\s*#/);
                            });
                        }

                        // for each line, call the plugin function and pass 'done'
                        async.eachSeries(lines, plugin.fn, done);
                    });
                }

                // if the plugin is of type script, then run it
                if ( plugin.type === 'script' ) {
                    // ToDo: execute the script
                    process.nextTick(done);
                }
            },
            function(err) {
                if (err) {
                    console.warn(err);
                    process.exit(2);
                }
            }
        );

    });
}

// ----------------------------------------------------------------------------
