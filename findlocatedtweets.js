'use strict';

var logger = require('./lib/logger');
var twitFactory = require('./lib/twitFactory');
var subsequentLocationlessTweets = 0;
var totalTweets = 0;
var totalLocationTweets = 0;

if (process.argv.length < 3) {

    console.log('usage: node findlocatedtweets term1 [term2 ...]');
    process.exit(1);
}
var searchTerm = process.argv.slice(2).join();
console.log('search term: ' + searchTerm);

var stream = twitFactory.getTermStream(searchTerm);

function filterByLocationAndLog(tweet) {
    totalTweets++;
    if (tweet.coordinates) {
        process.stdout.write(', ' + totalLocationTweets + '/' + totalTweets + ' have location]\n');
        process.stdout.write('\n');
        logger.nameTweetAndLocation(tweet);
        totalLocationTweets++;
        subsequentLocationlessTweets = 0;
    } else {
        subsequentLocationlessTweets++;
        process.stdout.write('\r[' + subsequentLocationlessTweets + ' consecutive tweets with no location');
    }
}

stream.on('tweet', function (tweet) {
    filterByLocationAndLog(tweet)
});

stream.on('error', function (e) {
    logger.logError(e);
});
