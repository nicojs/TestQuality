module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["html","dashboard"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**"]
  });
};