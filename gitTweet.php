<?php 
	
require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "826890428834148352-7YTvLm6MlGdhdlY4C5x9O4pNzHoUrLE",
    'oauth_access_token_secret' => "ngtWcXtFMURzwZF38bfjJhQHssCfQmvP66xXOR6AlHo35",
    'consumer_key' => "HfFXBPloraRjiVu9ufv6HQf5Z",
    'consumer_secret' => "fd8FNsHyiBDlMH9MoHHT5JrxE0FRXQ7apMtVt426PxgtnFfg9G"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#pixelart&count=100';
$requestMethod = 'GET';


$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();


?>