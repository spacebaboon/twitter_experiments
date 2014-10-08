Experiments with Twitter APIs and node.js
=========================================
Simple mucking about examples with node and Twitter using the twitter node package https://www.npmjs.org/package/twitter

## Installlation
```shell
npm install
```

## Setup
you will need to register a Twitter application at https://apps.twitter.com/ and paste the access keys into config.js.


## Experiments

### Sample tweets in full

to see the full data available for tweets, run
```shell
node fullsamples
```
For 5 seconds, this will return a stream of randomly chosen Tweets, logged to the terminal.


### Tweet search

to search for tweets with given content, run e.g.
```shell
node searchfor armadillo pangolin echidna
```
to find tweets mentioning these creatures, along with the author's name. tweets with any of the words will be returned.
to search for tweets with all of a given set of words, surround the parameter list with quotes, e.g.
```shell
node searchfor "justin bieber"
```
this will run continuously. press ctrl-c to stop.


### Search for tweets with given location

to search for tweets including a single word which have a given location, run
```shell
node findlocatedtweets Obama
```
this will run continuously. press ctrl-c to stop.
unfortunately, the streaming API does not currently allow both a search phrase and location to be specified at the same time.
you can, but the logic is such that tweets matching EITHER the phrase OR having location are found.
this script finds all tweets with location, then filters for those matching the search term.
this is horribly inefficient in terms of bandwidth.
an alternative approach would be to do the reverse: bring back tweets matching, then filter on those with specified location in the data.
which is more bandwidth efficient would depend on the number of tweets matching the search term. only a relatively small number have specified location.
a trending term would probably return more than all tweets with location.
