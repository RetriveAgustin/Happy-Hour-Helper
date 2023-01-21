import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./Views/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<h1>Home</h1>} />
        <Route path="/AboutUs" element={<h1>About Us</h1>} />
        <Route path="/Packages" element={<h1>Home</h1>} />
        <Route path="/Review" element={<h1>Review</h1>} />
        <Route path="/Cart" element={<h1>Cart</h1>} />
      </Routes>
    </>
  );
}

export default App;
