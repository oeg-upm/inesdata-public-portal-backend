const path = require('path');

module.exports = ({ env }) => ({
    tokenClientId: env('TOKEN_CLIENT_ID', 'dataspace-users'),
    tokenUsername: env('TOKEN_USERNAME', 'user-c1'),
    tokenPassword: env('TOKEN_PASSWORD', 'user-c1'),
    keycloakBaseUrl: env('KEYCLOAK_BASE_URL', 'http://keycloak:8080'),
    catalogBaseUrl: env('CATALOG_BASE_URL', 'http://connector-c1:19193')
})
