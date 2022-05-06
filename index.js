module.exports = {
  extends: [
    './jest.js',
    './react.js',
    './typescript.js',
  ].map(require.resolve),
};
