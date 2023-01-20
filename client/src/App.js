import { Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
