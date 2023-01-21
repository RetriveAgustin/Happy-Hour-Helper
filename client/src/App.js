import { Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/form" element={<CreateProduct />} />
    </Routes>
  );
}

export default App;
