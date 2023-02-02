import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext.js";

export default function Register() {

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState();

    const {signUp} = useAuth();
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signUp(user.email, user.password);
            const userCredentials = result.user;
            console.log(userCredentials)
            try {
                axios.post('http://localhost:3001/users/registerUser', {
                    id: userCredentials.uid,
                    name: user.name,
                    lastname: user.lastname,
                    mail: user.email,
                    password: user.password,
                    created_in_google: userCredentials.providerData[0].providerId === "password" ? false : true,
                    is_admin: false
                })
                .then((r) => {
                    console.log(r)
                    navigate('/login');
                })
                .catch(console.log)
            } catch (e) {
                console.log(e)
            }
            
        } catch (error) {
            setError(error.message)
        }
    }

    return (
    <div>
        {error && <label>{error}</label>}
        <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nombre</label>
            <input type='name' name='name' placeholder='Nombre' onChange={handleChange}></input>

            <label htmlFor="lastname">Apellido</label>
            <input type='lastname' name='lastname' placeholder='Apellido' onChange={handleChange}></input>

            <label htmlFor="email">Email</label>
            <input type='email' name='email' placeholder='youremail@mail.com' onChange={handleChange}></input>

            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={handleChange}></input>

            <h6 onClick={() => console.log(user)}>Prueba</h6>
            <button disabled={user.email[0] && user.password[0] ? false : true}>Register</button>

        </form>
        <Link to={'/login'}><h5>Already have an account? Login here</h5></Link>
    </div>
    )       
}
            