import initializeFirebase from "../firebase/firebase.init"
import { getAuth, signInWithPopup, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";



initializeFirebase();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const provider = new FacebookAuthProvider();
    const auth = getAuth();

    const signInWithFacebook = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log("clicked");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                console.log("Signout Done")
            })
            .catch((error) => {

            });
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [auth]);


    return {
        user,
        error,
        signInWithFacebook,
        handleSignout,
    }

};

export default useFirebase;