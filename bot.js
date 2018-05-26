//Require the Twitter API Client for node (twit).
const Twit = require('twit');
//Pull our Twitter account info from our config.
const config = require('./config.json');
//Twitter will not allow duped tweets, this variable is used to add a number to our tweet.
var tweetNr = 0;
//Our Twit object, client. Used for connecting to the api.
const client = new Twit(config);
//Start our tweetIt function once the bot is launched.
tweetIt();
//Run the function again once every 3600000 milliseconds (An hour)
setInterval(tweetIt, 3600000);
//Our custom tweet function  (It takes no parameters)
function tweetIt() {
  //Array with possible tweets
  var tweetArray = ["Wow, what a nice day!", "Twit is such a nice node package.", "Where would I be without Github?"];
  //Add 1 to our tweet number.
  tweetNr += 1;
  //Choose a random part of the array and set it as our tweet variable and add #MyTweet with our number.
  var tweet = tweetArray[Math.floor(Math.random() * tweetArray.length) + 0] + " #MyTweet" + tweetNr;
  //Post our tweet
  client.post('statuses/update', { status: tweet }, tweeted);
  //Callback for when the tweet is tweeted.
  function tweeted(err, data, response) {
    if(err) {
      console.log('The bot encountered an error: ' + err); //If there's an error, log it in the console window.
    } else {
      console.log('Success tweeting: ' + data.text); //If the tweet was successful, show the chosen tweet.
    }
  }
}
