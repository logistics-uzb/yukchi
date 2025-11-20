export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✨ New feature
        "fix", // 🐛 Bug fix
        "docs", // 📝 Documentation
        "style", // 🎨 Formatting, missing semi, etc
        "refactor", // ♻️ Code change that neither fixes a bug nor adds a feature
        "perf", // ⚡ Performance improvement
        "test", // ✅ Adding or fixing tests
        "chore", // 🔧 Build or tooling changes
      ],
    ],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
};
