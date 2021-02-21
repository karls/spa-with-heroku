import maincss from "./main.css";

// __ENV__ is getting replaced by the replace plugin for Rollup.
// Check client/rollup.config.js
//
console.log("Running in __ENV__.");
console.log(
  "Nothing changes between development and production, except running build with NODE_ENV=production."
);
