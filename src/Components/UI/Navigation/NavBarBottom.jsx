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

  const activeLeaderboard = pathname.includes("leadeboard");
  const activeCategory = pathname.includes("category");
  const activeNotifications = pathname.includes("notifications");
  const activeSupport = pathname.includes("support");
  const activeSettings = pathname.includes("settings");

  return (
    <div className="nav-bar-bottom">
      <div>
        <img src={leaderboard} alt="icon" />
        <img src={notifications} alt="icon" />
        <Link to="/category" className={activeCategory ? "active-nav" : ""}>
          <img src={category} alt="icon" />
        </Link>
        <img src={help} alt="icon" />
        <img src={settings} alt="icon" />
      </div>
    </div>
  );
};
