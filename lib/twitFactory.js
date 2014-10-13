'use strict';

var config = require('./config');
var Twit = require('twit');
var locations = ['-180', '-90', '180', '90'];
var twit = new Twit({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    access_token: config.accessToken,
    access_token_secret: config.accessTokenSecret
});

module.exports = {

    getTwit: function () {
        return twit;
    },

    getSamplesStream: function () {
        return twit.stream('statuses/sample');
    },

    getGlobalStream: function () {
        return twit.stream('statuses/filter', {locations: locations});
    },

    getTermStream: function (term) {
        return twit.stream('statuses/filter', {track: term});
    }


};