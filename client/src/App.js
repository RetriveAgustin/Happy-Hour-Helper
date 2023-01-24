import { Routes, Route } from "react-router-dom";

import CreateProduct from './components/CreateProduct/CreateProduct'
import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import Admin from "./Views/Admin/Admin";
import User from "./Views/User/User";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import "./App.css";
import Detail from "./Views/Detail/Detail";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";



function App() {
  //estos componentes son los views, a partir de ellos se van a presentar distintos componentes acorde a las demandas particulares del cliente.
  //hay que proteger la ruta /user para que los usuarios no puedan ingresar
  //para los links no validos se puede desarrollar un componente de error 404, o redireccionar al home.
  //los componentes Navbar y Footer son componentes layout, por ende deben aparecer en todos los views.
  const theme = createTheme({
    palette: {
      primary: {
        main: '#52373c',
        light: '#7f6166',
        dark: '#281116'
      }
    }
  })
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<CreateProduct />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Home />} />
      <Route path="/product/:id" element={<Detail />}/>
    </Routes>
    );
}

export default App;
