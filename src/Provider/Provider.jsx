import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
// const user = {name:'asib'};
const auth = getAuth(app);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createAuth = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //observe auth state change
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            console.log('chnage new authwe',currentUser);
            setUser(currentUser);
        });
        return ()=> unsubscriber();
    }, []);

    const logOut = () =>{
        return signOut(auth);
    }


    const authInfo = {
        user,
        createAuth,
        signIn,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;