import { createContext, useState } from "react";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
// const user = {name:'asib'};
const auth = getAuth(app);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);

    const createAuth = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createAuth,
        signIn,
        
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