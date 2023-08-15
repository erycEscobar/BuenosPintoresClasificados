import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [ userLogged, setUserLogged ] = useState({});

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            setUserLogged(currentUser);
        });
        return () => {
            unsuscribe();
        };
    }, []);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const logOut = () => {
        return signOut(firebaseAuth);
    };

    return (
        <UserContext.Provider value={{ userLogged, createUser, signIn, logOut }}>
            {children}
        </UserContext.Provider>
    );

};

export const UserAuth = () => {
    return useContext(UserContext);
}