import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('7E7VWn9f8l8uMFqRiWRH').collection('cartItems').doc('M11B23h7TOTCqyxIoSi9');
firestore.doc('/users/7E7VWn9f8l8uMFqRiWRH/cartItems/M11B23h7TOTCqyxIoSi9');
firestore.collection('/users/7E7VWn9f8l8uMFqRiWRH/cartItems')