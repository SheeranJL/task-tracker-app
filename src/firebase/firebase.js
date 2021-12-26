import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAnDelUiq0oVhkZVyX4Bi6-uicVwQJX4Z4",
  authDomain: "to-do-app-86321.firebaseapp.com",
  projectId: "to-do-app-86321",
  storageBucket: "to-do-app-86321.appspot.com",
  messagingSenderId: "410783079871",
  appId: "1:410783079871:web:d059a5fb1e71b39294d50a",
  measurementId: "G-R9Y8H0XTJN"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('users');

  console.log(userRef)
  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error occured', error);
    }
  }

  return userRef;

}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
