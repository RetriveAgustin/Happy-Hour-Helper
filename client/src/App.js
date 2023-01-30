import { Routes, Route } from "react-router-dom";

import CreateProduct from "./components/CreateProduct/CreateProduct";
import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import User from "./Views/User/User";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { AuthProvider } from "./context/authContext";
import "./App.css";
import Detail from "./Views/Detail/Detail";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import { useState } from "react";
import ProductsDashboard from "./Views/AdminDashboard/products/ProductDashboard";
import AdminDashboard from "./Views/AdminDashboard/AdminDashboard";
import UsersDashboard from "./Views/AdminDashboard/users/UserDashboard";
import SearchView from "./Views/Search-View/Search-View";
import LowerFilters from "./Views/Home/LowerFilters/LowerFilters";

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
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/search" element={<SearchView />} />

        {/* ---------Rutas Admin ------------------- */}
        <Route
          path="/admin/*"
          element={<AdminDashboard props={<UsersDashboard />} />}
        />
        <Route
          path="/admin/products"
          element={<AdminDashboard props={<ProductsDashboard />} />}
        />
        <Route path="/createproduct" element={<CreateProduct />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
