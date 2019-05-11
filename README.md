# postman-twitter-ads-api

This is a Postman collection for the Twitter Ads API endpoints. Please see the following documentation for more details about the API spec:
https://developer.twitter.com/en/docs/ads/general/overview

## twurl (CLI) and Postman (GUI)

Over the years, we've encouraged you to install [twurl](https://developer.twitter.com/en/docs/tutorials/using-twurl.html) - our official command-line HTTP client tool, tailored specifically for the Twitter API.
While twurl has been a great CLI (command-line interface) tool we love, we also wanted to provide additional options that can optimize your development experience for the Ads API furthermore.

We've received various feedback about the tool. For instance, sometimes CLI tools such as twurl can be cumbersome to set up complicated queries on command line and change on-the-fly in testing. Installing twurl might not be possible (restricted) in a certain scenario as it requires setting up Ruby environment on your machine. We believe Postman could be useful in these situations.

## Installation

### Quick install

Just click the button below!  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/369a02c0adc626ff6a06#?env%5BTwitter%20Ads%20API%5D=W3sia2V5IjoiYWNjb3VudF9pZCIsInZhbHVlIjoieW91cl9hZHNfYWNjb3VudF9pZCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoidmVyc2lvbiIsInZhbHVlIjoiNSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29uc3VtZXJfa2V5IiwidmFsdWUiOiJ5b3VyX2NvbnN1bWVyX2tleSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29uc3VtZXJfc2VjcmV0IiwidmFsdWUiOiJ5b3VyX2NvbnN1bWVyX3NlY3JldCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYWNjZXNzX3Rva2VuIiwidmFsdWUiOiJ5b3VyX2FjY2Vzc190b2tlbiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoidG9rZW5fc2VjcmV0IiwidmFsdWUiOiJ5b3VyX3Rva2VuX3NlY3JldCIsImVuYWJsZWQiOnRydWV9XQ==)  
(direct link: https://t.co/postman-ads-api)

- Make sure you installed the [Postman client](https://www.getpostman.com/downloads/) on your machine then just click `Run in Postman` button. Or, you could also install this collection from your Postman client directly by opening `New` => `Template` then search "Twitter Ads API".

### Manual install

Download this repository and import below files into your Postman client:

|Name|Description|
|---|---|
|[TwitterAdsAPI_postman_collection_v2-1.json](https://github.com/smaeda-ks/postman-twitter-ads-api/blob/master/TwitterAdsAPI_postman_collection_v2-1.json)|main collection file|
|[TwitterAdsAPI_postman_environment.json](https://github.com/smaeda-ks/postman-twitter-ads-api/blob/master/TwitterAdsAPI_postman_environment.json)|pre-configured environment file|

### Update to the latest collection

While we keep this collection up to date by adding new endpoints/removing retired endpoints, your installed collection will not be updated automatically, unfortunately. Therefore, we encourage you to subscribe to this repository and re-install (import) when we release a new version.

## Environment

This collection includes a pre-configured [environment](https://learning.getpostman.com/docs/postman/environments_and_globals/manage_environments/) setting. You will be needing to set up below variables in order to run each request:

|Name|Description|
|---|---|
|`account_id`|Your Ads Account ID.|
|`version`|Please use the [latest version](https://developer.twitter.com/en/docs/ads/general/overview/versions).|
|`consumer_key`||
|`consumer_secret`||
|`access_token`||
|`token_secret`||

<img width="734" alt="Screen Shot 2019-05-01 at 4 08 50" src="https://user-images.githubusercontent.com/11495867/56986920-11095900-6bc7-11e9-8d21-3e23bc9d6bd7.png">

## Authentication

As mentioned above, you need to configure your credentials. To get those, please see the following information:

- [Authentication](https://developer.twitter.com/en/docs/basics/authentication/overview)
- [Obtaining Ads Account credentials
](https://developer.twitter.com/en/docs/ads/general/guides/obtaining-ads-account-access)

You could also use [tw-oob-oauth-cli](https://github.com/smaeda-ks/tw-oob-oauth-cli) - A simple CLI client for Twitter's OOB OAuth ([PIN-based OAuth](https://developer.twitter.com/en/docs/basics/authentication/overview/pin-based-oauth)), to get your tokens.

Please be noted that the Ads API currently only supports OAuth 1.0a.
Also, since this collection is configured to use environment variables for authentication across the requests, you don't need to change the setting at all.

<img width="807" alt="Screen Shot 2019-05-01 at 4 07 00" src="https://user-images.githubusercontent.com/11495867/56987218-ca682e80-6bc7-11e9-92b6-5fca54b67102.png">

## Issues/Questions

In case you have an API-related question (e.g., Ads API usage), please go to the [community forum](https://twittercommunity.com/c/advertiser-api) and search/ask with [required information](https://twittercommunity.com/t/what-information-do-i-need-to-provide-in-order-to-get-help-on-the-forums-as-quickly-as-possible/58097).
Please submit a new issue only if you have a question about this Postman collection itself.
