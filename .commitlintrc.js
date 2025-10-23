// defines the <type> portion of '<type>(<scope>): <subject>'
// this is the default, but specifying here for an easy reference
const validTypes = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", validTypes],
  },
};
