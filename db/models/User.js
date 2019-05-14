const db = require("../db");

module.exports = db.defineModel("users", {
  name: db.STRING(100),
  gender: db.BOOLEAN,
  birth: db.STRING(10),
  
});
