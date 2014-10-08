'use strict';

var util = require('util');

module.exports = {

    nameAndTweet: function (data) {
        if (data.user && data.user.name && data.user.screen_name && data.text) {
            console.log(data.user.name + ' (@' + data.user.screen_name + ')');
            console.log(data.text);
            console.log('');
        }
    },

    nameTweetAndLocation: function (data) {
        if (data.user && data.user.name && data.user.screen_name && data.text) {
            console.log(data.user.name + ' (@' + data.user.screen_name + ')');
            console.log(data.text);
        }
        if (data.coordinates) {
            console.log("coordinates: " + util.inspect(data.coordinates));
        } else {
            console.log("coordinates: unknown");
        }
        console.log();
    },

    dump: function (data) {
        console.log(util.inspect(data));
    },

    logError: function (error) {
        console.log("Error: " + util.inspect(data));

    }

};