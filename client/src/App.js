import { Routes, Route } from "react-router-dom";

import CreateProduct from './components/CreateProduct/CreateProduct'
import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import Admin from "./Views/Admin/Admin";
import User from "./Views/User/User";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { AuthProvider } from "./context/authContext";
import "./App.css";

function App() {
  //estos componentes son los views, a partir de ellos se van a presentar distintos componentes acorde a las demandas particulares del cliente.
  //hay que proteger la ruta /user para que los usuarios no puedan ingresar
  //para los links no validos se puede desarrollar un componente de error 404, o redireccionar al home.
  //los componentes Navbar y Footer son componentes layout, por ende deben aparecer en todos los views.
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<CreateProduct />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
