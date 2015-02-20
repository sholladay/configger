#!/usr/bin/env node

// This script is run when the package is installed on the user's machine.

var pkg   = require('../package.json'),
    shell = require('shelljs');

shell.echo('Welcome to ' + pkg.name + '! This is version ' + pkg.version + '.');
