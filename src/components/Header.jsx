import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/order' className="btn btn-ghost normal-case text-xl">Order</Link>
                {
                    user && <Link to='/profile' className="btn btn-ghost normal-case text-xl">Profile</Link>
                }
                <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user &&
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-xs">signOut</button>
                        </div>
                        // : <Link to='/login' className="btn btn-xs">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;