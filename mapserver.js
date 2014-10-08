'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var logger = require('./lib/logger');
var twitFactory = require('./lib/twitFactory');
var twit = twitFactory.twit();

var searchTerm = 'ebola';
var locations = '-180,-90,180,90';

console.log('server started on http://localhost:3000');
server.listen(3000);

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    twit.stream('filter', {locations: locations}, function (stream) {

        stream.on('data', function (tweet) {

            if (tweet.text && tweet.text.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {

                if (tweet.text && tweet.coordinates && tweet.coordinates.coordinates && tweet.coordinates.type === 'Point') {
                    socket.emit('tweet', { text: tweet.text, lon: tweet.coordinates.coordinates[0], lat: tweet.coordinates.coordinates[1] });
                }
            }
        });

        stream.on('error', function (e) {
            logger.logError(e);
        });
    });
});

