'use strict';

var logger = require('./lib/logger');
var twitFactory = require('./lib/twitFactory');
var twit = twitFactory.twit();

twit.stream('statuses/sample', function (stream) {
    stream.on('data', function (data) {
        logger.dump(data);
    });
    setTimeout(stream.destroy, 5000);
});