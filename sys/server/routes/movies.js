var express = require('express')
var router = express.Router()

const movieController = require('../db/controllers').movieController

// test
router.use('/test', function (req, res, next) {
  res.send('movies test')
})

/* GET home page. */
router.get('/movies/list/', function (req, res, next) {
  movieController.list(req, res)
})

router.get('/movies/list/:id', function (req, res, next) {
  movieController.retrieve(req, res)
})

router.post('/movies/item/', function (req, res, next) {
  movieController.create(req, res)
})

router.delete('/movies/list/:ids', function (req, res, next) {
  movieController.destroy(req, res)
})

router.put('/movies/item/:id', function (req, res, next) {
  movieController.update(req, res)
})

module.exports = router
