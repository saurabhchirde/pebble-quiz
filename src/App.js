import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoryPage, LandingPage, ProfilePage, QuestionPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<QuestionPage />} />
        <Route path="/account" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
