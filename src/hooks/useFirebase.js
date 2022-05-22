import { useEffect, useState } from "react";
import app from './../firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
const useFirebase =()=> {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
const [user, setUser] = useState({});


const handleGoogleSignIn =()=> {
    signInWithPopup(auth, provider)
  .then((result) => {
   
    const user = result.user;
    console.log(user);
    setUser(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
   console.error(errorMessage);
    // ...
  });
}

const handleSignOut = () => {
    signOut(auth).then(() => {
        setUser('');
      }).catch((error) => {
        // An error happened.
      });
}

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}, [])

return {
    user,
    handleSignOut,
    handleGoogleSignIn
}
}
export default useFirebase;