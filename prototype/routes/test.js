var express = require('express');
var router = express.Router();
var TeemoJS = require('teemojs');

var api = TeemoJS('key');

let summoner;
var summID;
var testMast;

function getSummID() {
    api.get('euw1', 'summoner.getBySummonerName', 'easyrıder')
    .then((data) => {
    summoner = data;
    summID = summoner.id;
    getHighestMastery();
    });
}
function getHighestMastery(){
    api.get('euw1', 'championMastery.getAllChampionMasteries', summID)
    .then((data) => {
        testMast = data[0];
        });
}
    getSummID();

/* GET test page. */
router.get('/', function(req, res, next) {
    res.render('test', {
        title: 'test page',
        content: 'test content',
        summoner: summoner,
        testMast: testMast
  });
});

module.exports = router;
