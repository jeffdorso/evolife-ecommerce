import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

     
        apiKey: "AIzaSyAacZaByjUxzW8EVlIM1Iy5F6wFgbqdwsE",
        authDomain: "evolife-ecommerce.firebaseapp.com",
        databaseURL: "https://evolife-ecommerce.firebaseio.com",
        projectId: "evolife-ecommerce",
        storageBucket: "evolife-ecommerce.appspot.com",
        messagingSenderId: "284279340913",
        appId: "1:284279340913:web:cb33e39a4433d1d65980d0",
        measurementId: "G-QD6CCF770T"
      
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.id}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

     
};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
