'use strict';

var logger = require('./lib/logger');
var twitFactory = require('./lib/twitFactory');
var twit = twitFactory.twit();

if (process.argv.length != 3) {
    console.log('you must enter a single search word');
    return;
}
var searchTerm = process.argv[2];
var locations = '-180,-90,180,90';

function filterByTextAndLog(tweet) {
    if (tweet.text && tweet.text.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
        logger.nameTweetAndLocation(tweet);
    }
}

twit.stream('filter', {locations: locations}, function (stream) {
    stream.on('data', function (tweet) {
        filterByTextAndLog(tweet)
    });
    stream.on('error', function (e) {
        logger.logError(e);
    });
});

