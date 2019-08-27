export default {
  oidc: {
    clientId: '0oapj1ooqGIjBjLaa356',
    issuer: 'https://dev-645348.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email',
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
