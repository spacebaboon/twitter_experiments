Experiments with Twitter APIs and node.js
=========================================

## Installlation
 ```npm install```

## Setup
you will need to register a Twitter application at https://apps.twitter.com/ and paste the access keys into config.js.


## Experiments

### Sample tweets in full

to see the full data available for tweets, run
```node fullsamples```
For 5 seconds, this will return a stream of randomly chosen Tweets, logged to the terminal.


### Tweet search

to search for tweets with given content, run e.g.
```node searchfor armadillo pangolin echidna```
to find cheesy tweets, along with their author's details. tweets with any of the words will be returned.
to search for tweets with all of a given set of words, surround the parameter list with quotes, e.g.
```node searchfor "justin bieber"```

this will run continuously. press ctrl-c to stop.

