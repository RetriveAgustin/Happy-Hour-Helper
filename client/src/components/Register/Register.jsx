import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState();

    const {signUp} = useAuth();
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(user.email, user.password);
            navigate('/login');
        } catch (error) {
            setError(error.message)
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

            <button>Register</button>
        </form>
        <Link to={'/login'}><h5>Already have an account? Login here</h5></Link>
    </div>
    )       
}
            