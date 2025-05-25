module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^src/app/features/dashboard/dashboard.module$":
      "<rootDir>/src/app/features/dashboard/dashboard.module.ts",
  },
};
