module.exports = {
    branches: ["build"],
    repositoryURL: "https://github.com/aaananiev/github-actions-test",
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator"
      //"@semantic-release/github"
      //[
       // "@semantic-release/github",
       // {
        //  assets: [
        //  { path: "build.zip", label: "Build" },
        //  { path: "package-lock.json", label: "Package Lock"}
        //  ],
        //},
      //],
    ],
  };