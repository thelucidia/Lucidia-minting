import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import WebSDK, { LoginBehavior } from 'websdk';
interface IConfig {
  clientID: string;
  apiKey: string;
  webHost: string;
  appHost: string;
  localHost: string;
  appLocalHost: string;
  production: boolean;
}

const Config: IConfig = {
  clientID: import.meta.env.VITE_APP_CLIENT_ID || '',
  apiKey: import.meta.env.VITE_APP_API_KEY || '',
  webHost: import.meta.env.VITE_WEB_HOST || 'https://lucidia.io',
  appHost: import.meta.env.VITE_APP_HOST || 'https://app.lucidia.io',
  localHost: import.meta.env.VITE_LOCALHOST || 'http://localhost:3000',
  appLocalHost: import.meta.env.VITE_APP_LOCALHOST || 'http://app.localhost:3000',
  production: import.meta.env.VITE_PRODUCTION === 'true',
};
export default Config;

const redirectURI = Config.production ? Config.appHost : Config.appLocalHost;

const client_id = Config.clientID;
const api_key = Config.apiKey;
export const sphereoneSDK = new WebSDK(client_id, redirectURI, api_key, LoginBehavior.REDIRECT);

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAP7pM1TRourC8UpgcL0CB2CnSIwylroU',
  authDomain: 'sphere-6fd8e.firebaseapp.com',
  projectId: 'sphere-6fd8e',
  storageBucket: 'sphere-6fd8e.appspot.com',
  messagingSenderId: '852444055259',
  appId: '1:852444055259:web:dc76aa2a3787b14530eefe',
  measurementId: 'G-5DCX1WGVCJ',
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

export const LAZY_LOAD_TIME = 1000;
