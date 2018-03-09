// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyCExrvquZmEwSyK3cOT5N9SP8vy1z6rjNc",
     authDomain: "gifsta-battle.firebaseapp.com",
     databaseURL: "https://gifsta-battle.firebaseio.com",
     projectId: "gifsta-battle",
     storageBucket: "gifsta-battle.appspot.com",
     messagingSenderId: "225503152972"
  }
};