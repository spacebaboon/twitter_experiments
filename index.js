'use strict';

var config = require('./config');
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    access_token_key: config.accessToken,
    access_token_secret: config.accessTokenSecret
});

function log(data) {
    if (data.user && data.user.name && data.user.screen_name && data.text) {
        console.log(data.user.name + ' (@'+data.user.screen_name+')');
        console.log(data.text);
        console.log('');
    }
}

twit.stream('statuses/sample', function (stream) {
    stream.on('data', function (data) {
        log(data);
    });
    setTimeout(stream.destroy, 30000);
});