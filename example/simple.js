var args = process.argv.slice(2),
    configger = require('../'),
    config;

// We assume argument parsing for arrays.
configger.add(args);
// We use objects directly.
configger.add(process.env);

config = configger.get();

console.log('User provided config:', config);
