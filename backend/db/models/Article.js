const db = require("../model");

module.exports = db.defineModel("article", {
  ariticle_id: db.BIGINT(11),
  title_lv_1: db.STRING(100),
  title_lv_2: db.STRING(100),
  content: db.TEXT
});
