# Backend
0) Install node 7
    You can install NVM: (Node version manater)
      curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    Then: (Install Node 7)
      nvm install 7
    Then: (Use Node 7)
        nvm use 7
    Mark it as default:
        nvm alias default 7

1) Install dependencies with npm install
2) Setup DB
  Create User:
    createuser -P -s -e whats-for-dinner
    Set password: pass
  Create DB:
    createdb whats-for-dinner
3) Migrate schema executing: npm run migrate
4) Set Google Maps API KEY.
  Create a google maps api key here:
    https://console.developers.google.com/apis
  Set the environment value like:
    export MAPS_API_KEY=%your api key%
5) Start server
Backend of the app.
