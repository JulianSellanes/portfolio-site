module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleNameMapper: {
        // Ignore css imports using identity-obj-proxy
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        // If you need to mock images/files later:
        // "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/test/fileMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};  