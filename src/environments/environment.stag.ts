// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store-stag.herokuapp.com/products',
  firebase: {
    apiKey: 'AIzaSyCBkLqhqN_uwAk027Lssw0BxrjvoR71Caw',
    authDomain: 'platzi-store-aabf6.firebaseapp.com',
    databaseURL: 'https://platzi-store-aabf6.firebaseio.com',
    projectId: 'platzi-store-aabf6',
    storageBucket: 'platzi-store-aabf6.appspot.com',
    messagingSenderId: '754046333307',
    appId: '1:754046333307:web:f05d8072af89c256cb0dde'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
