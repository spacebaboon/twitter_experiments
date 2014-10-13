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
            console.log(data.user.name + ' (@' + data.user.screen_name + ') at ' + data.coordinates.coordinates);
            console.log(data.text);
        }
        console.log();
    },

    dump: function (data) {
        console.log(util.inspect(data));
    },

    logError: function (error) {
        console.log("Error: " + util.inspect(error));
    }

};