// module.exports = {
//     // Indicates which files should be considered for testing
//     testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  
//     // Transform files with babel-jest
//     transform: {
//         '^.+\\.js$': 'babel-jest',
//         // '^.+\\.css$': 'frontend\agile-pilot\src\config\cssTransform.js',
//       },
      
  
//     // Set up environment variables
//     setupFiles: ["dotenv/config"]
//   };
  
module.exports ={
    testEnvironment: "jsdom",

    testMatch:["**/*.test.js"],

    collectCoverage: true,
    collectCoverageFrom: ["**/*.js"],
    coverageDirectory: "./coverage",
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$",
        "\\.css$"
    ],
    moduleNameMapper: {
        "\\.(css)$": "./config/cssTransform.js",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "./config/cssTransform.js"
    }

}
