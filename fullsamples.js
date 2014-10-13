'use strict';

var logger = require('./lib/logger');
var twitFactory = require('./lib/twitFactory');

var stream = twitFactory.getSamplesStream();

stream.on('tweet', function (data) {
    logger.dump(data);
});

setTimeout(function () {
    stream.stop();
    process.exit(0);
}, 5000);


