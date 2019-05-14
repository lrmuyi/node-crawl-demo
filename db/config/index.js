const defaultConfig = require("./default.config");
const propConfig = require("./prop.config");
const testConfig = require("./test.config");

const fs = require("fs");
var config = null;
if (process.env.NODE_ENV === "test") {
  console.log(`Load ${testConfig}...`);
  config = defaultConfig;
} else {
  console.log(`Load ${defaultConfig}...`);
  config = defaultConfig;
  try {
    if (fs.statSync(propConfig).isFile()) {
      console.log(`Load ${propConfig}...`);
      config = Object.assign(config, require(propConfig));
    }
  } catch (err) {
    console.log(`Cannot load ${propConfig}`);
  }
}

module.exports = config;
