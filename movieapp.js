// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var args = process.argv.slice(2);
var title = args.join(' ');

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Ratings[1].Value);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
    
  }
});
