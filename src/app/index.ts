// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig 
} from 'angularfire2';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyA6ARHU-vgEzjGM7D1q707jHBd9AGuKcvA",
    authDomain: "knooga-1c904.firebaseapp.com",
    databaseURL: "https://knooga-1c904.firebaseio.com",
    storageBucket: "knooga-1c904.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  })
];
