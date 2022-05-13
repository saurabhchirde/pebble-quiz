import {
  Alert,
  AlertWithCTA,
  AnimateCelebration,
  AnimateLoader,
  BadgeModal,
  Login,
  ResetPassword,
  Signup,
  ProtectedRoute,
} from "Components";
import { useAlert, useAnimation, useModal } from "Context";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CategoryPage,
  LandingPage,
  LeaderboardPage,
  NotFound,
  ProfilePage,
  QuestionPage,
  SettingPage,
  HelpPage,
  NotificationPage,
} from "./Pages";
import { ToastContainer } from "react-toastify";

function App() {
  const { showLogin, showSignup, showResetPassword, showBadgeModal } =
    useModal();
  const { loader, celebrate } = useAnimation();

  return (
    <div className="App">
      <ToastContainer />
      {loader && <AnimateLoader />}
      {showLogin && <Login />}
      {showSignup && <Signup />}
      {showResetPassword && <ResetPassword />}
      {showBadgeModal && <BadgeModal />}
      {celebrate && <AnimateCelebration />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<QuestionPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
