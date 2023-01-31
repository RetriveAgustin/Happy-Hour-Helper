import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { getUserLogged } from "../../redux/actions/actions";
import styles from "./Login.module.css";
// import {
//   Principal,
//   Wrapper,
//   Form,
//   Input,
//   Button,
//   Title,
//   Label,
//   Question,
// } from "./Login.styled.js";

export default function Login() {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login, loginWithGoogle, userCredentials, resetPassword } = useAuth();
  const navigate = useNavigate();
  

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(user.email, user.password);
      axios
        .post("http://localhost:3001/users/loginUser", {
          mail: user.email,
          password: user.password,
        })
        .then((r) => {
          console.log(r.data);
          dispatch(getUserLogged(user.email))
          navigate("/home");
        });
    } catch (e) {
      if (e.message === "Firebase: Error (auth/internal-error).")
        return setError("Please enter a password");
      if (e.message === "Firebase: Error (auth/invalid-email).")
        return setError("Please enter an email");
      if (e.message === "Firebase: Error (auth/wrong-password).")
        return setError("Wrong password");
      if (e.message === "Firebase: Error (auth/user-not-found).")
        return setError("The user doesn't exist");
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await loginWithGoogle();
    console.log(result);
    if (result._tokenResponse.isNewUser) {
      try {
        const data = await axios.post(
          "http://localhost:3001/users/registerUser",
          {
            id: result.user.uid,
            token: result.user.accessToken,
            name: result._tokenResponse.firstName,
            lastname: result._tokenResponse.lastname,
            mail: result._tokenResponse.email,
            password: null,
            favourites: null,
            created_in_google: true,
            is_admin: false,
          }
        );
        if (data.data === "User registered!") {
          const loginAfterRegister = await axios.post(
            "http://localhost:3001/users/loginUser",
            {
              mail: result._tokenResponse.email,
              password: null,
            }
          );
          if (loginAfterRegister.data === "User logged!") {
            navigate("/home");
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const loginGoogle = await axios.post(
        "http://localhost:3001/users/loginUser",
        {
          mail: result._tokenResponse.email,
          password: null,
        }
      );
      if (loginGoogle.data === "User logged!") {
        navigate("/home");
      }
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("We sent you an email with a link to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div  style={{backgroundColor: "black"}}>
      <section>
        <h2>Log In</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@mail.com"
            onChange={handleChange}
          ></input>

          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="password"
            onChange={handleChange}
          ></input>
          {error && (
            <label style={{ display: "flex", justifyContent: "flex-start" }}>
              {error}
            </label>
          )}

          <button>Login</button>
        </form>
        <button onClick={handleGoogleSignIn}>Login with Google</button>
        <button onClick={handleResetPassword}>Reset password</button>
        <Link to={"/register"}>
          <b>
            Don't have an account? <u> Register here</u>
          </b>
        </Link>
      </section>
    </div>
  );
}
