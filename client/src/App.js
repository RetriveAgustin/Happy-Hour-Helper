import { Routes, Route } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<CreateProduct />} />
    </Routes>
  );
}

export default App;
