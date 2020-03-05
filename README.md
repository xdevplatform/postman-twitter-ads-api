# postman-twitter-ads-api

This is a Postman collection for the Twitter Ads API endpoints. Please see the following documentation for more details about the API spec:  
https://developer.twitter.com/en/docs/ads/general/overview

## twurl (CLI) and Postman (GUI)

Over the years, we've encouraged you to install [twurl](https://developer.twitter.com/en/docs/tutorials/using-twurl.html) - our official command-line HTTP client tool, tailored specifically for the Twitter API.  
While twurl continues to be a great CLI (command-line interface) tool we love, we also wanted to provide additional options that can optimize your development experience for the Ads API furthermore.

We've received various feedback about the tool. For instance, sometimes CLI tools such as twurl can be cumbersome to set up complicated queries on command line and change on-the-fly in testing. Installing twurl might not be possible (restricted) in a certain scenario as it requires setting up Ruby environment on your machine. We believe Postman could be useful in these situations.

## Installation

### Quick install

Just click the button below!  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1d12b9fc623b8e149f87)  
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

### Set up your Environment variables

This collection includes a pre-configured [environment](https://learning.getpostman.com/docs/postman/environments_and_globals/manage_environments/) setting. All you need is just fill in the below variables value in order to run each request (See also the below GIF as to how to open and edit the environment setting):

|Name|Description|
|---|---|
|`account_id`|Your Ads Account ID.|
|`version`|Please use the [latest version](https://developer.twitter.com/en/docs/ads/general/overview/versions).|
|`consumer_key`||
|`consumer_secret`||
|`access_token`||
|`token_secret`||

![edf0e81fb6672044f7d14a3af0b5bddb](https://user-images.githubusercontent.com/11495867/58537792-94ea4b80-822e-11e9-8dc2-5f9a08dc2232.gif)

## Authentication

As mentioned above, you need to configure your credentials to environment variables. To get those credentials, please see the following documentation:

- [Authentication](https://developer.twitter.com/en/docs/basics/authentication/overview)
- [Obtaining Ads Account credentials
](https://developer.twitter.com/en/docs/ads/general/guides/obtaining-ads-account-access)

You could also use [tw-oob-oauth-cli](https://github.com/smaeda-ks/tw-oob-oauth-cli) - A simple CLI client for Twitter's OOB OAuth ([PIN-based OAuth](https://developer.twitter.com/en/docs/basics/authentication/overview/pin-based-oauth)), to get your tokens.

Please be noted that the Ads API currently only supports OAuth 1.0a.  
Also, since this collection is configured to use environment variables for authentication across the requests, you don't need to change the `Authorization` setting of your top-level object (collection). Please leave it as is as shown below.

<img width="807" alt="Screen Shot 2019-05-01 at 4 07 00" src="https://user-images.githubusercontent.com/11495867/56987218-ca682e80-6bc7-11e9-92b6-5fca54b67102.png">

## Issues/Questions

In case you have an API-related question (e.g., Ads API usage), please go to the [community forum](https://twittercommunity.com/c/advertiser-api) and search/ask with [required information](https://twittercommunity.com/t/what-information-do-i-need-to-provide-in-order-to-get-help-on-the-forums-as-quickly-as-possible/58097).
Please submit a new issue only if you have a question about this Postman collection itself.
