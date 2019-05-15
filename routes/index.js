var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/api", function(req, res, next) {
  // let data = JSON.parse(req.params || req.data || req.query)
  let data = req.params || req.data || req.query
  console.log(data.id);
  res.send({ code: 200, result: data });
});

module.exports = router;
