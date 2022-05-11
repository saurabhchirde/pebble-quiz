import {
  Alert,
  AlertWithCTA,
  AnimateCelebration,
  AnimateLoader,
  BadgeModal,
  Login,
  ResetPassword,
  Signup,
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
  SupportPage,
} from "./Pages";

function App() {
  const { showLogin, showSignup, showResetPassword, showBadgeModal } =
    useModal();
  const { loader, celebrate } = useAnimation();
  const {
    alertState: { showAlertBar, showAlertCTABar },
  } = useAlert();

  return (
    <div className="App">
      {loader && <AnimateLoader />}
      {showLogin && <Login />}
      {showSignup && <Signup />}
      {showResetPassword && <ResetPassword />}
      {showBadgeModal && <BadgeModal />}
      {celebrate && <AnimateCelebration />}
      {showAlertBar && <Alert />}
      {showAlertCTABar && <AlertWithCTA />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<QuestionPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
