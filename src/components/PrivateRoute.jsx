import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return;
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;