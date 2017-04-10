console.log("The Bot Is Starting...");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);
console.log("Loaded The Bot Config");

var params = {
  q: 'Trump since:2016-07-11',
  count: 100
}

T.get('search/tweets', params gotData);

function gotData(err, data, response) {
  console.log(data);
})

