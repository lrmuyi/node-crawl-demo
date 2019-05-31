const db = require("../model");

module.exports = db.defineModel("user", {
  name: db.STRING(100),
  gender: db.BOOLEAN,
  birth: db.STRING(10),
});
