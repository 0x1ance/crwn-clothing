import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyA7H-Ja8tww9qSQpimfxK6iCJMr31rp3sQ',
  authDomain: 'crwn-db-79bdf.firebaseapp.com',
  projectId: 'crwn-db-79bdf',
  storageBucket: 'crwn-db-79bdf.appspot.com',
  messagingSenderId: '964808672165',
  appId: '1:964808672165:web:0b6b5eefaf704d826c5e4c',
  measurementId: 'G-GFGDMNJ62H',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
