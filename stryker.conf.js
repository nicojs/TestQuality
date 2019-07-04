module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html','dashboard'],
    testRunner: 'mocha',
    transpilers: [
      'typescript'
    ],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    tsconfigFile: 'tsconfig.json',
    mutate: ['src/**'],
    maxConcurrentTestRunners: 1,
    mochaOptions: {
      spec: [
        'Test/**/*.js'
      ]
    }
  });
};