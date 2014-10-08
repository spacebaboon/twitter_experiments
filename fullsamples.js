'use strict';

var logger = require('./logger');
var twitFactory = require('./twitFactory');
var twit = twitFactory.twit();

twit.stream('statuses/sample', function (stream) {
    stream.on('data', function (data) {
        logger.dump(data);
    });
    setTimeout(stream.destroy, 5000);
});