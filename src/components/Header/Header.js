import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';
// import useFirebase from './../../hooks/useFirebase';
import { getAuth,signOut } from 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    // const{user,handleSignOut}=useFirebase();
    
    return (
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Order</Link>
                <span>{user?.displayName && user.displayName}</span>
                {(user?.uid )?<button onClick={() =>signOut(auth)}>Signout</button>
                :<Link to='/login'>Login</Link>
                }
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;