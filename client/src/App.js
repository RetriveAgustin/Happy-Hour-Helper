import "./App.css";
import { Routes, Route } from "react-router-dom";
import ConfirmOrder from "./Views/ConfirmOrder/ConfirmOrder";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import User from "./Views/User/User";
import Detail from "./Views/Detail/Detail";
import ProductsDashboard from "./Views/AdminDashboard/products/ProductDashboard";
import AdminDashboard from "./Views/AdminDashboard/AdminDashboard";
import UsersDashboard from "./Views/AdminDashboard/users/UserDashboard";
import SearchView from "./Views/Search-View/Search-View";
import AddAddres from "./components/AddAddress/AddAddress";
import AddPaymentMethod from "./components/AddPaymentMethod/AddPaymentMethod";
import Skeleton from "./components/Skeleton/Skeleton";
import { AuthProvider } from "./context/authContext";
// import Header from "./components/Header/Header";
// import Login from "./components/Login/Login.jsx";
// import ConfirmOrder from './Views/ConfirmOrder/ConfirmOrder'
// import SearchView from "./Views/Search-View/Search-View";
// import LowerFilters from "./Views/Home/LowerFilters/LowerFilters";
// import AddAddres from "./components/AddAddress/AddAddress";
// import AddPaymentMethod from "./components/AddPaymentMethod/AddPaymentMethod"

function App() {
  //estos componentes son los views, a partir de ellos se van a presentar distintos componentes acorde a las demandas particulares del cliente.
  //hay que proteger la ruta /user para que los usuarios no puedan ingresar
  //para los links no validos se puede desarrollar un componente de error 404, o redireccionar al home.
  //los componentes Navbar y Footer son componentes layout, por ende deben aparecer en todos los views.

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Skeleton view={<Home />} />} />
        <Route path="/cart" element={<Skeleton view={<Cart />} />} />
        <Route path="/user" element={<Skeleton view={<User />} />} />
        <Route path="/product/:id" element={<Skeleton view={<Detail />} />} />
        <Route path="/search" element={<Skeleton view={<SearchView />} />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/confirm" element={<ConfirmOrder />} /> */}
        {/* <Route path="/add-payment-method" element={<AddPaymentMethod />} /> */}
        {/* <Route path="/add-address" element={<AddAddres />} /> */}

        <Route path="*" element={<Skeleton view={<Home />} />} />

        {/* ---------Rutas Admin ------------------- */}
        <Route
          path="/admin/*"
          element={<AdminDashboard props={<UsersDashboard />} />}
        />
        <Route
          path="/admin/products"
          element={<AdminDashboard props={<ProductsDashboard />} />}
        />
        <Route
          path="/createproduct"
          element={<AdminDashboard props={<CreateProduct />} />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
