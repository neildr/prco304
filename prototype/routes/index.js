var express = require('express');
var router = express.Router();

var summonerName;
var summonerRegion;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'prototype',
      content: 'index content'
    });
});

router.get('/testreq/region=:summRegion/summoner=:summName', function(req, res, next) {
    res.render('testreq', {
        summName: req.params.summName,
        summRegion: req.params.summRegion,
        test: 'yes',
        testname: summonerName
    });
});

router.post('/testreq/submit', function(req, res, next){
    var summName = req.body.summName;
    var summRegion = req.body.summRegion;
    summonerName = summName;
    res.redirect('/testreq/region=' + summRegion + '/summoner=' + summName);
});

module.exports = router;
