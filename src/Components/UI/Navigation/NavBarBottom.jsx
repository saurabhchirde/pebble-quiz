import "./NavBarBottom.css";
import {
  leaderboard,
  help,
  settings,
  category,
  notifications,
} from "Data/Icons/icons";
import { Link, useLocation } from "react-router-dom";

export const NavBarBottom = () => {
  const { pathname } = useLocation();

  const activeLeaderboard = pathname.includes("leaderboard");
  const activeCategory = pathname.includes("category");
  const activeNotifications = pathname.includes("notifications");
  const activeSupport = pathname.includes("support");
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
        <img src={notifications} alt="icon" />
        <Link to="/category" className={activeCategory ? "active-nav" : ""}>
          <img src={category} alt="icon" />
        </Link>
        <Link to="/support" className={activeSupport ? "active-nav" : ""}>
          <img src={help} alt="icon" />
        </Link>
        <Link to="/settings" className={activeSettings ? "active-nav" : ""}>
          <img src={settings} alt="icon" />
        </Link>
      </div>
    </div>
  );
};
