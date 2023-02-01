import { Routes, Route } from "react-router-dom";

import CreateProduct from './components/CreateProduct/CreateProduct'
import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import Admin from "./Views/Admin/Admin";
import User from "./Views/User/User";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import LayoutUser from "./components/Header/LayoutUser";
import { SIDEBAR_DATA }    from "./Views/User/SideBaritems";
import "./App.css";
import Settings from "./Views/User/Settings";
import Address from "./Views/User/Address"
import Pago from "./Views/User/Pago";

function App() {
  //estos componentes son los views, a partir de ellos se van a presentar distintos componentes acorde a las demandas particulares del cliente.
  //hay que proteger la ruta /user para que los usuarios no puedan ingresar
  //para los links no validos se puede desarrollar un componente de error 404, o redireccionar al home.
  //los componentes Navbar y Footer son componentes layout, por ende deben aparecer en todos los views.
  return (
    <Routes>
      {/*USER RUTAS */}
      <Route path="user/settings" element={<Settings />}/>
      <Route path="user/address" element={<Address />}/>
      <Route path="user/pago" element={<Pago />}/>


      
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<CreateProduct />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Home />} />
      <Route path="/userDetails" element={<LayoutUser />}/>
    </Routes>
  );
}

export default App;
