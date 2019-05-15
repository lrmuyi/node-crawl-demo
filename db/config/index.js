const defaultConfig = "./default.config.js";
const propConfig = "./prop.config.js";
const testConfig = "./test.config.js";

const fs = require("fs");
var config = null;
if (process.env.NODE_ENV === "test") {
  console.log(`Load ${testConfig}...`);
  config = require(defaultConfig);
} else {
  console.log(`Load ${defaultConfig}...`);
  config = require(defaultConfig);
  // try {
  //   if (fs.statSync(propConfig).isFile()) {
  //     console.log(`Load ${propConfig}...`);
  //     config = Object.assign(config, require(propConfig));
  //   }
  // } catch (err) {
  //   console.log(err)
  //   console.log(`Cannot load ${propConfig}`);
  // }
}

module.exports = config;
