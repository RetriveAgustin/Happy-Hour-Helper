import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Home() {

    const { logout, loading, user } = useAuth();
    const navigate = useNavigate();

    console.log(user)
    
    async function handleLogout() {
        await logout();
        navigate('/login');
    }

    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <h1>Bienvenido {user.displayName || user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}