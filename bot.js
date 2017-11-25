console.log("The bot is starting up...");

const Twit = require('twit'); //We need twit before we can access some of twitters functions

const config = require('./config.json'); //Our config holds the needed details

const T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000, //Optional HTTP request timeout to apply to all requests.
});
console.log("");
