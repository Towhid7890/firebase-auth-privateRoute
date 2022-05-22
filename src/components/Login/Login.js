import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from './../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app);
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    // const{handleGoogleSignIn}=useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true });
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <form action="">
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
            </form>
        </div>
    );
};

export default Login;