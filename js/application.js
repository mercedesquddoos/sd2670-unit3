var config1 = {
  "id": '616417617155194880',
  "domId": 'mytweets',
  "maxTweets": 2,
  "enableLinks": true
};

function displayTweets(){
	twitterFetcher.fetch(config1);
}

$(document).ready(displayTweets());
