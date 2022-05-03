import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CategoryPage,
  LandingPage,
  LeaderboardPage,
  ProfilePage,
  QuestionPage,
  SettingPage,
  SupportPage,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<QuestionPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </div>
  );
}

export default App;
