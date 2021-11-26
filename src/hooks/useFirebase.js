import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{

      return signInWithPopup(auth, googleProvider)
        
    }

    const logOut =()=>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user)
              // ...
            } else {
             
            }
          });
          
    },[])

    const handleNewLogin = (email, password) =>{
      
    return  signInWithEmailAndPassword(auth, email, password)
    }


    const displayName = (name) =>{
      updateProfile(auth.currentUser, {
        displayName: name
      })
      
      .then(() => {
       
      }).catch(error =>{
        setError(error.message);
    })
    }


    const newRegister = (email, password, name)=>{
      displayName(name)
     return createUserWithEmailAndPassword(auth, email, password)
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        newRegister,
        handleNewLogin

    }

}

export default useFirebase;