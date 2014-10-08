'use strict';

var config = require('./config');
var twitter = require('twitter');

module.exports = {

    twit: function () {
        return new twitter({
            consumer_key: config.consumerKey,
            consumer_secret: config.consumerSecret,
            access_token_key: config.accessToken,
            access_token_secret: config.accessTokenSecret
        });
    }
};