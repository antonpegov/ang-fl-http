// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Firebase Config
  firebase : {
    apiKey: "AIzaSyBgU5vZsv3sEiIylkENSj_jy7teqKDsTN4",
    authDomain: "first-look-697fd.firebaseapp.com",
    databaseURL: "https://first-look-697fd.firebaseio.com",
    projectId: "first-look-697fd",
    storageBucket: "first-look-697fd.appspot.com",
    messagingSenderId: "565967817387"
  }
};
