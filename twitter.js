var bands = require("./keys.js");
var var1 = bands.twitterKeys.consumer_key;
var var2 = bands.twitterKeys.consumer_secret;
var var3 = bands.twitterKeys.access_token_key;
var var4 = bands.twitterKeys. access_token_secret;

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: var1,
  consumer_secret: var2,
  access_token_key: var3,
  access_token_secret: var4
});
 
var params = {screen_name: ''};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0 ;i < tweets.length;i++){
    	console.log(tweets[i].text);
    }
  }
});

