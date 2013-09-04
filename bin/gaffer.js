#!/usr/bin/env node
// ----------------------------------------------------------------------------

// core
var path = require('path');

// local
var gaffer = require('../gaffer.js');

// ----------------------------------------------------------------------------

// call the gaffer with the install dir
var installDir = path.join(process.cwd(), 'install');
gaffer(installDir);

// ----------------------------------------------------------------------------
