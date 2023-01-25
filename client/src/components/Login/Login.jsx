import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState();

    const { login, loginWithGoogle, userCredentials, resetPassword } = useAuth();
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            console.log(userCredentials)
            navigate('/home');
        } catch (e) {
            if (e.message === 'Firebase: Error (auth/internal-error).') return setError('Please enter a password');
            if (e.message === 'Firebase: Error (auth/invalid-email).') return setError('Please enter an email');
            if (e.message === 'Firebase: Error (auth/wrong-password).') return setError('Wrong password');
            if (e.message === 'Firebase: Error (auth/user-not-found).') return setError("The user doesn't exist"); 
        }
    }

    const handleGoogleSignIn = async () => {
        await loginWithGoogle();
        navigate('/home')
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError('Please enter your email');
        try {
            await resetPassword(user.email);
            setError('We sent you an email with a link to reset your password');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
    <div>
        {error && <label>{error}</label>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' placeholder='youremail@mail.com' onChange={handleChange}></input>

            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={handleChange}></input>

            <button>Login</button>
        </form>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleResetPassword}>Reset password</button>
            <Link to={'/register'}><h5>Don't have an account? Register here</h5></Link>
    </div>
    )       
}