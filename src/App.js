import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoryPage, LandingPage, QuestionPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
