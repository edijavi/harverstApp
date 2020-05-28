// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCHE7Ftx_EL806NFMW63cKbXCCLd4NM6cc',
    authDomain: 'harvestapp-67562.firebaseapp.com',
    databaseURL: 'https://harvestapp-67562.firebaseio.com',
    projectId: 'harvestapp-67562',
    storageBucket: 'harvestapp-67562.appspot.com',
    messagingSenderId: '429700059277',
    appId: '1:429700059277:web:04c9a861d0b45225d492c4',
    measurementId: 'G-PQDLRJ8PSD'
  },
  // apiBack: 'http://localhost:3977/api',
  apiBack: 'https://harvest-api-rest.herokuapp.com/api',
  ip: '127.0.0.1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
