var express = require("express");
var router = express.Router();

const movieController = require("../db/controllers").movieController;

// test
router.use("/test", function(req, res, next) {
  // res.send("movies test");
  res.render('../views/moviesTest/index.html')
});

/* GET home page. */
router.get("/", function(req, res, next) {
  movieController.list(req, res);
});

router.get("/:id", function(req, res, next) {
  movieController.retrieve(req, res);
});

router.post("/", function(req, res, next) {
  movieController.create(req, res);
});

router.delete("/:id", function(req, res, next) {
  movieController.destroy(req, res);
});

router.put("/:id", function(req, res, next) {
  movieController.update(req, res);
});

module.exports = router;
