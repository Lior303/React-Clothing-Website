import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB60UPbZyTeJDf9NtwRO3cwMEZdizGRZZQ",
    authDomain: "reactclothingdb.firebaseapp.com",
    databaseURL: "https://reactclothingdb.firebaseio.com",
    projectId: "reactclothingdb",
    storageBucket: "reactclothingdb.appspot.com",
    messagingSenderId: "263545150829",
    appId: "1:263545150829:web:8cab43f0c7a301a6a9ce64",
    measurementId: "G-JW7GTV7DKE"
};

export const createUserProfileDocument =
    async (userAuth, additionalData) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            const {
                displayName, email
            } = userAuth;
            const createAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error while creating user', error.message)
            }
        }
        return userRef;
    }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
