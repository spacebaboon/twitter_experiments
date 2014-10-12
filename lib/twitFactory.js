'use strict';

var config = require('./config');
var Twit = require('twit');
var locations = ['-180', '-90', '180', '90'];


module.exports = {

    twit: function () {
        var twit = new Twit({
            consumer_key: config.consumerKey,
            consumer_secret: config.consumerSecret,
            access_token: config.accessToken,
            access_token_secret: config.accessTokenSecret
        });
        var tweetStream = twit.stream('statuses/filter', {locations: locations});
        return tweetStream;
    }
};