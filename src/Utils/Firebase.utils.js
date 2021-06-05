import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAJNTZTUR6OKr1ikat3OuFmfntpiURAC4Q",
    authDomain: "crown-db-69387.firebaseapp.com",
    projectId: "crown-db-69387",
    storageBucket: "crown-db-69387.appspot.com",
    messagingSenderId: "855877704369",
    appId: "1:855877704369:web:220991cf1559c830256090",
    measurementId: "G-K8L14DG1P8"
  };

  export const createUserProfileDocument = async(userAuth,additionalData)=>
  {
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapshot= await userRef.get();
    console.log(snapshot);
    if(!snapshot.exists)
    {
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({displayName,email,createdAt})
      }
      catch(err){
        console.log("error happeend"+err.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;