import { Routes, Route } from "react-router-dom";
// import LandingPage from "./Views/LandingPage/LandingPage";
// import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  //estos componentes son los views, a partir de ellos se van a presentar distintos componentes acorde a las demandas particulares del cliente.
  //hay que proteger la ruta /user para que los usuarios no puedan ingresar
  //para los links no validos se puede desarrollar un componente de error 404, o redireccionar al home.
  //los componentes Navbar y Footer son componentes layout, por ende deben aparecer en todos los views.
  return (
    <Routes>
      <Route path="/" element={<h1>HOME</h1>} />
      <Route path="/cart" element={<h1>CART</h1>} />
      <Route path="/admin" element={<h1>ADMIN</h1>} />
      <Route path="/user" element={<h1>USER</h1>} />
      <Route path="/login" element={<h1>LOGIN</h1>} />
      <Route path="/register" element={<h1>REGISTER</h1>} />
      <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
