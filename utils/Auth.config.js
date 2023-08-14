const config = {
  domain: "YOUR-DOMAIN.auth0.com", // e.g., joel-1.auth0.com
  clientID: "YOUR-CLIENT-ID", //e.g. 8zOgTfK4Ga1KaiFPNFen6gQstt2Jvwlo
  responseType: "token id_token",
  audience: "https://YOUR-DOMAIN.auth0.com/userinfo", // e.g., https://joel-1.auth0.com/userinfo
  scope: "openid profile",
  redirectUri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}${window.location.pathname}callback`
};

export default config;