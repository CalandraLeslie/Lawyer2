module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    // Downgrade accessibility rules from error to warning
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/click-events-have-key-events": "warn", 
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/interactive-supports-focus": "warn"
  }
};