import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.init';


//create auth with getAuth(app) here
const auth = getAuth(app)

//create a share context here
export const AuthContext = createContext();

const UserContext = ({children}) => {
    //create a state with useState hook and user here
    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(true);

    //declare a funtion with createUserWithEmailAndPassword here
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //decalre a function with signInWithEmailAndPassword and login user here
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //declare a funtion with signOut keyword firebase here 
    const logOut = () => {
        return signOut(auth)
    }

    //declare a useEfect her and render user
    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {unsubscribe()}
    },[])

    //declare a function and vari many value sent context api
    const userInfo = {user, createUser, logIn, logOut, loading};

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;