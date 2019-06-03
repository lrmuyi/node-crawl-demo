/*
 * @Author: wers-mac
 * @Date: 2019-05-26 14:44:40
 * @Last Modified by: wers
 * @Last Modified time: 2019-06-03 19:05:12
 */

var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')

var superagent = require('superagent')
var cheerio = require('cheerio')

const movieController = require('../db/controllers').movieController

router.get('/crawl', function (req, res, next) {
  // var page = req.param('page')
  // console.log('page:' + page)
  var Res = res

  var url = `https://movie.douban.com/top250`
  superagent.get(url).end((err, res) => {
    if (err) {
      throw Error(err)
    }
    fs.writeFile(path.resolve(__dirname) + '/movies.html', res.text, err => {
      console.log(err)
    })
    var $ = cheerio.load(res.text)
    var jobsList = []
    $('ol>li .item').each(function (item) {
      jobsList.push({
        // 电影名称
        title: $(this)
          .find('.info .hd a .title')
          .eq(0)
          .text(),
        // 导演
        director: $(this)
          .find('.info .bd p')
          .text(),
        // 评论人数
        starring: $(this)
          .find('.info .bd .star span')
          .eq(3)
          .text(),
        // 评分
        score: $(this)
          .find('.info .bd .star span')
          .eq(1)
          .text(),
        // 抓取时间
        createdAt: new Date()
      })
      // fs.open(path.join(__dirname, `/items.json`), 'r+', function (err, fd) {
      //   if (err) {
      //     throw err
      //   }
      fs.appendFile(path.join(__dirname, `/items.json`), item + '\n', err => {
        console.log('==', err)
      })
      // })
    })

    // req.body = { items: jobsList }
    // movieController.create(req, res)
    Res.send({
      code: 200,
      result: 'jobsList'
    })
    // req.body = {
    //   title: req.body.title,
    //   director: req.body.director,
    //   starring: req.body.starring,
    //   film_type: req.body.film_type,
    //   score: req.body.score,
    //   evaluation_count: req.body.evaluation_count,
    //   making_countries: req.body.making_countries,
    //   production_areas: req.body.production_areas,
    //   year_of_production: req.body.year_of_production,
    //   createdAt: req.body.createdAt,
    //   updatedAt: req.body.updatedAt,
    //   version: req.body.version
    // }
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
