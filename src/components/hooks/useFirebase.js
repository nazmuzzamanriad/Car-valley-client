import intializeAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

intializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    const handleCreateUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                setError('')
                history.replace('/')

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => { setIsLoading(false) })


    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        });
    }

    // user state holder
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
        })




    }, [])


    useEffect(() => {
        fetch(`https://guarded-everglades-40474.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://guarded-everglades-40474.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    return {
        handleCreateUser, logout, error, user, loginUser, isLoading, admin
    }


}

export default useFirebase;