import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA7H-Ja8tww9qSQpimfxK6iCJMr31rp3sQ",
    authDomain: "crwn-db-79bdf.firebaseapp.com",
    projectId: "crwn-db-79bdf",
    storageBucket: "crwn-db-79bdf.appspot.com",
    messagingSenderId: "964808672165",
    appId: "1:964808672165:web:0b6b5eefaf704d826c5e4c",
    measurementId: "G-GFGDMNJ62H"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 