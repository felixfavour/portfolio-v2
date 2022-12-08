import firebase from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: 'AIzaSyAh4s9j6jNpLUeucbDSZrUKuWuJNTlZK1o',
  authDomain: 'favour-portfolio.firebaseapp.com',
  projectId: 'favour-portfolio',
  storageBucket: 'favour-portfolio.appspot.com',
  messagingSenderId: '524056389368',
  appId: '1:524056389368:web:af9cbe0d817c877cb27d0d',
  measurementId: 'G-Y8YVRD558S'
}

export const app = firebase.initializeApp(firebaseConfig)

getAnalytics(app)
