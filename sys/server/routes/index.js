/*
 * @Author: wers-mac
 * @Date: 2019-05-26 14:44:40
 * @Last Modified by: wers-mac
 * @Last Modified time: 2019-06-02 20:03:36
 */

var express = require('express')
var router = express.Router()

var superagent = require('superagent')
var cheerio = require('cheerio')

const movieController = require('../db/controllers').movieController

router.get('/crawl', function (req, res, next) {
  // var page = req.param('page')
  // console.log('page:' + page)
  var Res = res

  var url = `https://movie.douban.com/top250`
  superagent
    .get(url)
    .end((err, res) => {
      if (err) {
        throw Error(err)
      }
      console.log(res.text)
      var $ = cheerio.load(res.text)
      var jobs = []
      var jobs_list = ''

      // $('.grid_view li').each((item, index) => {
      //   console.log($(item))
      //   // console.log(item, index)
      // })
      console.log('===============', $('ol>li .item .info .hd a>span').eq(0).text())
      Res.send({ code: 200, result: $('ol>li .item .info .hd a>span').eq(0).text() })
      req.body = {
        title: req.body.title,
        director: req.body.director,
        starring: req.body.starring,
        film_type: req.body.film_type,
        score: req.body.score,
        evaluation_count: req.body.evaluation_count,
        making_countries: req.body.making_countries,
        production_areas: req.body.production_areas,
        year_of_production: req.body.year_of_production,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        version: req.body.version
      }

      // movieController.create(req, res)
    })
})

/* GET home page. */
router.get('/test/api/movies/item/', function (req, res, next) {
  // let data = JSON.parse(req.params || req.data || req.query)
  let data = req.params || req.data || req.query
  res.send({ code: 200, result: data })
})

router.get('/html', function (req, res, next) {
  res.render('../views/movieForm.html')
})
module.exports = router
