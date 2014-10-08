'use strict';

var logger = require('./logger');
var twitFactory = require('./twitFactory');
var twit = twitFactory.twit();

if (process.argv.length < 3) {
    console.log('you must enter search word(s) or a phrase.');
    console.log('$ node searchfor stilton camembert feta');
    console.log(' will find tweets containing any of these words.');
    console.log('$ node searchfor "justin bieber"');
    console.log(' will find tweets containing all the words, but not necessarily in the given order.');
    return;
}
var searchTerm = process.argv.slice(2).join();

twit.stream('filter', {track: searchTerm}, function (stream) {
    stream.on('data', function (tweet) {
        logger.nameAndTweet(tweet);
    });
});
