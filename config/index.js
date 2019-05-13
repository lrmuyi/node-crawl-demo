const defaultConfig = require("./config.default");
const propConfig = require("./config.prop");
const testConfig = require("./config.test");

const fs = require("fs");
var config = null;
if (process.env.NODE_ENV === "test") {
  console.log(`Load ${testConfig}...`);
  config = require(testConfig);
} else {
  console.log(`Load ${defaultConfig}...`);
  config = require(defaultConfig);
  console.log(config)
  try {
    if (fs.statSync(propConfig).isFile()) {
      console.log(`Load ${propConfig}...`);
      config = Object.assign(config, require(propConfig));
    }
  } catch (err) {
    console.log(`Cannot load ${propConfig}`);
  }
}

module.exports = config