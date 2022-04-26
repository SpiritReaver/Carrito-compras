// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production:true,
  firebaseConfig: {
  apiKey: "AIzaSyCU-f44Ubm96lm8lL-9Z1dKn0fHq4BDAUE",
  authDomain: "parcial2ndo.firebaseapp.com",
  databaseURL: "https://parcial2ndo-default-rtdb.firebaseio.com",
  projectId: "parcial2ndo",
  storageBucket: "parcial2ndo.appspot.com",
  messagingSenderId: "1033455468126",
  appId: "1:1033455468126:web:9ee1222a9452ea2bff7ecf",
  measurementId: "G-7LWKTE1VWG"}
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
