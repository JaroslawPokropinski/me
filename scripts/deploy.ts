import ghpages from "gh-pages";

console.log("Deploying...");

ghpages
  .publish("dist", {
    branch: "main",
    remote: "deploy",
  })
  .then(() => console.log("Deployed"))
  .catch((err) => console.error(err));
