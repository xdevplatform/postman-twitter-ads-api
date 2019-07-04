/*
 * This is a Pre-request script for Postman client to remediate OAuth 1.0a issue
 * where certain request fails if it has a query parameter that includes some special characters.
 *
 * NOTE: This Pre-script is only available for "GET" request.
 *       (or might be able to use for other methods that have no request body such as "DELETE")
 *       There's a workaround for POST request.
 *       See: https://github.com/twitterdev/postman-twitter-ads-api/issues/2
 * 
 * In order to use this Pre-request script, you need to change your "Authorization" type to
 * "No Auth" only for the target request and do not apply to the top-level object.
 */

const sdk = require('postman-collection');


// fetch all env variables that are currently defined
const env_variables = pm.environment.toObject({
    excludeDisabled: true
});

const oauth_consumer_key = env_variables.consumer_key;
const oauth_consumer_secret = env_variables.consumer_secret;
const oauth_token = env_variables.access_token;
const oauth_secret = env_variables.token_secret;
const oauth_signing_key = `${oauth_consumer_secret}&${oauth_secret}`;

// create random oauth_nonce string
const random_source = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var oauth_nonce = '';
for (var i = 0; i < 32; i++) {
    oauth_nonce += random_source.charAt(Math.floor(Math.random() * random_source.length));
}

const oauth_parameter_string_object = {};
oauth_parameter_string_object.oauth_consumer_key = oauth_consumer_key;
oauth_parameter_string_object.oauth_token = oauth_token;
const oauth_nonce_array = CryptoJS.enc.Utf8.parse(oauth_nonce);
oauth_parameter_string_object.oauth_nonce = encodeURIComponent(CryptoJS.enc.Base64.stringify(oauth_nonce_array));
oauth_parameter_string_object.oauth_signature_method = 'HMAC-SHA1';
oauth_parameter_string_object.oauth_version = '1.0';
oauth_parameter_string_object.oauth_timestamp = Math.round((new Date()).getTime() / 1000);

// for Authorization request header (copy object)
const oauth_authorization_header_object = {};
for (var key in oauth_parameter_string_object) {
    oauth_authorization_header_object[key] = oauth_parameter_string_object[key];
}

// convert query string into object (+ encode)
const url_query_string_object = {};
const url = new sdk.Url(pm.request.url);
const query = url.query;
for (var i = 0; i < query.members[0].value.length; i++) {
    if (!query.members[0].value[i].hasOwnProperty('disabled')) {
        url_query_string_object[query.members[0].value[i].key] = encodeURIComponent(String(query.members[0].value[i].value));
    }
}

// parse request.params
for (var key in url_query_string_object) {
    oauth_parameter_string_object[key] = url_query_string_object[key];
}

// sort object by key
const oauth_parameter_string_object_ordered = {};
Object.keys(oauth_parameter_string_object).sort().forEach(function(key) {
    oauth_parameter_string_object_ordered[key] = oauth_parameter_string_object[key];
});

// convert object into array
const oauth_parameter_string_array = [];
for (var key in oauth_parameter_string_object_ordered) {
    oauth_parameter_string_array.push(`${key}=${oauth_parameter_string_object_ordered[key]}`);
}

// generate parameter string
const oauth_parameter_string = oauth_parameter_string_array.join('&');

// replace dynamic variables
let base_host = pm.request.url.getOAuth1BaseUrl();
let regexp = /{{(.*?)}}/g;
while (result = regexp.exec(base_host)) {
    let value = env_variables[result[1]];
    base_host = base_host.replace(new RegExp(`{{${result[1]}}}`, 'g'), value);
}

// generate base string
const oauth_base_string = `${pm.request.method}&${encodeURIComponent(base_host)}&${encodeURIComponent(oauth_parameter_string)}`;

// generate signature
const oauth_signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(oauth_base_string, oauth_signing_key));

oauth_authorization_header_object.oauth_signature = encodeURIComponent(oauth_signature);

// convert object into array (for Authorization header string)
const oauth_authorization_header_array = [];
for (var key in oauth_authorization_header_object) {
    oauth_authorization_header_array.push(`${key}="${oauth_authorization_header_object[key]}"`);
}

const oauth_authorization_header = oauth_authorization_header_array.join(', ');

// generate Authorization header
pm.request.headers.add({
    key: 'Authorization',
    value: 'OAuth ' + oauth_authorization_header
});

// Escape URI parameters using encodeURIComponent => RFC3986
if (Object.keys(url_query_string_object).length !== 0) {
    const request_parameter_array = [];
    for (var key in url_query_string_object) {
        request_parameter_array.push(key + '=' + url_query_string_object[key]);
    }
    const request_parameter_string = request_parameter_array.join('&');

    pm.request.url = pm.request.url.getOAuth1BaseUrl() + "?" + request_parameter_string;
}
