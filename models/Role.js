const db = require("../db");

module.exports = db.defineModel("roles", {
  role: db.STRING(100),
});
