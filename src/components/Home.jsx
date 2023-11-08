import { useContext } from "react";
import {AuthContext} from '../Provider/Provider';
const Home = () => {
   const user = useContext(AuthContext);

    return (
        <div>
            <h2>welcome {user && <span>{user.name}</span> }</h2>
        </div>
    );
};

export default Home;