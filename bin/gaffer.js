#!/usr/bin/env node
// ----------------------------------------------------------------------------
//
// gaffer.js - The boss ... helps you install things.
//
// Copyright 2013 Andrew Chilton.  All rights reserved.
//
// ----------------------------------------------------------------------------

// core
var path = require('path');

// local
var gaffer = require('../gaffer.js');

// ----------------------------------------------------------------------------

// call the gaffer with the install dir
var installDir = path.join(process.cwd(), 'gaffer');
gaffer(installDir);

// ----------------------------------------------------------------------------
