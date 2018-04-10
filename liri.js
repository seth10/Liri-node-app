
require("dotenv").config();

var keys = require('./keys.js');


var Twitter = require('twitter');
var Spotify = require('node-spotify-api');



var getMyTweets = function() {
    
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var params = { screen_name: 'Unique_African' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
       for(var i=0; i<tweets.length; i++){
        console.log(tweets[i]),created_at;
        console.log(' ');
        console.log(tweets[i],text);
       }
    }
});
}




            
    spotify.search({ type: 'track', query: 'All the Small Things'}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0]);
});
        
var pick = function (casaData, functionData) {
    switch (casaData) {
        case 'my-tweets' :
            getMyTweets;
            
            break;
    
        default:
        console.log('Liri Does not know that');
            
    }    
}

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
    
};

runThis(process.argv[2], process.argv[3]);