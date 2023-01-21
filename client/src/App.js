import { Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthProvider } from "./context/authContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<CreateProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
