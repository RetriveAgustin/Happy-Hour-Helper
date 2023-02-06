import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login, logout, loginWithGoogle, userCredentials, resetPassword } =
    useAuth();
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
          navigate("/");
          localStorage.setItem("User Credentials", result);
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

    if (result._tokenResponse.isNewUser) {
      try {
        const data = await axios.post(
          "http://localhost:3001/users/registerUser",
          {
            id: result.user.uid,
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

  const handleLogout = async () => {
    await logout();
    console.log("loged out");
  };

  return (
    <div>
      {error && <label>{error}</label>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@mail.com"
          onChange={handleChange}
        ></input>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange}></input>

        <button>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </form>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleResetPassword}>Reset password</button>
      <Link to={"/register"}>
        <h5>Don't have an account? Register here</h5>
      </Link>
    </div>
  );
}
