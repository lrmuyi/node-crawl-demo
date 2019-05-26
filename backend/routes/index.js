/*
 * @Author: wers-mac 
 * @Date: 2019-05-26 14:44:40 
 * @Last Modified by:   wers-mac 
 * @Last Modified time: 2019-05-26 14:44:40 
 */


var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/api", function(req, res, next) {
  // let data = JSON.parse(req.params || req.data || req.query)
  let data = req.params || req.data || req.query;
  console.log(data.id);
  res.send({ code: 200, result: data });
});

router.get("/", function(req, res, next) {
  res.render("../views/movieForm.html");
});
module.exports = router;
