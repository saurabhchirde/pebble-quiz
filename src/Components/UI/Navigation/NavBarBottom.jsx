import "./NavBarBottom.css";
import {
  leaderboard,
  help,
  settings,
  category,
  notifications,
} from "Data/Icons/icons";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "Context";

export const NavBarBottom = () => {
  const {
    authState: { token },
  } = useAuth();
  const { pathname } = useLocation();

  const activeLeaderboard = pathname.includes("leaderboard");
  const activeCategory = pathname.includes("category");
  const activeNotifications = pathname.includes("notifications");
  const activeHelp = pathname.includes("help");
  const activeSettings = pathname.includes("settings");

  return (
    <div className="nav-bar-bottom">
      <div>
        <Link
          to="/leaderboard"
          className={activeLeaderboard ? "active-nav" : ""}
        >
          <img src={leaderboard} alt="icon" />
        </Link>
        <Link to="/category" className={activeCategory ? "active-nav" : ""}>
          <img src={category} alt="icon" />
        </Link>
        {token && (
          <Link
            to="/notifications"
            className={activeNotifications ? "active-nav" : ""}
          >
            <img src={notifications} alt="icon" />
          </Link>
        )}
        <Link to="/help" className={activeHelp ? "active-nav" : ""}>
          <img src={help} alt="icon" />
        </Link>
        {token && (
          <Link to="/settings" className={activeSettings ? "active-nav" : ""}>
            <img src={settings} alt="icon" />
          </Link>
        )}
      </div>
    </div>
  );
};
