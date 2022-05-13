import "./NavBar.css";
import {
  leaderboard,
  help,
  settings,
  category,
  notifications,
} from "Data/Icons/icons";
import { logo_light } from "Data/Logo/logo";
import { Link, useLocation } from "react-router-dom";
import avatar from "Data/Img/avatar.png";
import { useAuth, useQuiz } from "Context";

export const NavBar = () => {
  const { pathname } = useLocation();
  const {
    authState: { profileImg, name, token },
  } = useAuth();
  const { userQuizData } = useQuiz();

  const activeLeaderboard = pathname.includes("leaderboard");
  const activeCategory = pathname.includes("category");
  const activeNotifications = pathname.includes("notifications");
  const activeHelp = pathname.includes("help");
  const activeSettings = pathname.includes("settings");

  const userName = userQuizData?.name ? userQuizData?.name : name;

  return (
    <div className="nav-bar-body">
      <div>
        <Link to="/account">
          <div className="user-image-name">
            <div className="avatar avatar-sm-round">
              <img
                loading="lazy"
                src={profileImg ? profileImg : avatar}
                alt="avatar"
              />
            </div>
            <h2>{userName ? userName : "Guest User"}</h2>
          </div>
        </Link>
        <div className="nav-bar-menu">
          <Link to="/leaderboard">
            <div className={activeLeaderboard ? "active-nav" : ""}>
              <img src={leaderboard} alt="icon" />
              <h2>Leaderboard</h2>
            </div>
          </Link>
          <Link to="/category">
            <div className={activeCategory ? "active-nav" : ""}>
              <img src={category} alt="icon" />
              <h2>Category</h2>
            </div>
          </Link>
          {token && (
            <Link to="/notifications">
              <div className={activeNotifications ? "active-nav" : ""}>
                <img src={notifications} alt="icon" />
                <h2>Notifications</h2>
              </div>
            </Link>
          )}
          <Link to="/help">
            <div className={activeHelp ? "active-nav" : ""}>
              <img src={help} alt="icon" />
              <h2>Help</h2>
            </div>
          </Link>
          {token && (
            <Link to="/settings">
              <div className={activeSettings ? "active-nav" : ""}>
                <img src={settings} alt="icon" />
                <h2>Settings</h2>
              </div>
            </Link>
          )}
        </div>
      </div>
      <Link to="/">
        <img src={logo_light} alt="logo" />
      </Link>
    </div>
  );
};
