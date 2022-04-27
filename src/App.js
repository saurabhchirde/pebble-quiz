import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoryPage, LandingPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
