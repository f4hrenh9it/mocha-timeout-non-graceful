exports.config = {

    hostname: '0.0.0.0',
    port: 4444,
    specs: [
        './mocha.test.js'
    ],
    before: function () {
        require('@babel/register');
    },
    maxInstances: 5,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'debug',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000
    },
}
