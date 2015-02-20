#!/usr/bin/env node

// This script is run before the package is published to the npm registry.

var pkg   = require('../package.json'),
    shell = require('shelljs');

shell.echo('About to publish ' + pkg.name + '@' + pkg.version + ' to npm.');
