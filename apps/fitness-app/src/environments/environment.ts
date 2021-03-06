import { FirebaseAppConfig } from '@angular/fire';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDiLKduUOlfluelYmaBDLWJrA7IuGdhQ8U",
  authDomain: "fitness-app-25caa.firebaseapp.com",
  databaseURL: "https://fitness-app-25caa.firebaseio.com",
  projectId: "fitness-app-25caa",
  storageBucket: "fitness-app-25caa.appspot.com",
  messagingSenderId: "623959229014"
}

export const environment = {
  production: false,
  firebaseConfig
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
