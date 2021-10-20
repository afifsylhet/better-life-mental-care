import initializeFirebase from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";



initializeFirebase();


const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    const handleSignout = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    const getNameValue = (e) => {
        const nameValue = e?.target.value;
        setUserName(nameValue)
    }
    const getEmailValue = (e) => {
        const emailValue = e?.target.value;
        setEmail(emailValue)
    }
    const getPasswordValue = (e) => {
        const passwordValue = e?.target.value;
        setPassword(passwordValue)
    }


    const passwordSignIn = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    /// kjkskldjklfjlkdjfk

    const signInWithEmail = () => {
        setIsLoading(true)

        return createUserWithEmailAndPassword(auth, email, password, userName)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })

    }, [auth]);




    return {
        user,
        error,
        signInWithGoogle,
        handleSignout,
        setError,
        setUser,
        setIsLoading,
        isLoading,
        signInWithEmail,
        getNameValue,
        getEmailValue,
        getPasswordValue,
        passwordSignIn
    }

};

export default useFirebase;