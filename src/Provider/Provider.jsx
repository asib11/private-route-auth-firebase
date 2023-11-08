import { createContext } from "react";

export const AuthContext = createContext(null);
const user = {name:'asib'};

const Provider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;