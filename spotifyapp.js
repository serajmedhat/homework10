var bands = require("./keys.js");
var var1 = bands.spotifykeys.Id;
var var2 = bands.spotifykeys.Secret;
var args = process.argv.slice(2);
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: var1,
  secret: var2
});
 
spotify.search({ type: 'track', query: args }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 

   
   for(var i = 0 ; i <data.tracks.items[0].album.artists.length;i++ ){
	console.log(data.tracks.items[0].album.artists[i].name);

}
console.log(data.tracks.items[0].album.name);
console.log(data.tracks.items[1].name);
});