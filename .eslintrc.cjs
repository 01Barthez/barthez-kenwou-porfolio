module.exports = {
  extends: ['@org/eslint-config', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    // Project-specific accessibility rules can be tightened here.
    'jsx-a11y/anchor-is-valid': 'off'
  }
};
