#!/usr/bin/env node

// This script is run when the package is updated on the user's machine.

var pkg   = require('../package.json'),
    shell = require('shelljs');

shell.echo('Updating ' + pkg.name + '. Previous version: ' + pkg.version);
