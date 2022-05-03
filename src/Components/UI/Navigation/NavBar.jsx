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

export const NavBar = () => {
  const { pathname } = useLocation();

  const activeLeaderboard = pathname.includes("leaderboard");
  const activeCategory = pathname.includes("category");
  const activeNotifications = pathname.includes("notifications");
  const activeSupport = pathname.includes("support");
  const activeSettings = pathname.includes("settings");

  return (
    <div className="nav-bar-body">
      <div>
        <Link to="/account">
          <div className="user-image-name">
            <div className="avatar avatar-sm-round">
              <img
                loading="lazy"
                src="https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/151580883_4025926607469148_268572636116125368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=xI-ONWnsyqEAX9xfx9S&_nc_ht=scontent.fnag5-1.fna&oh=00_AT8DVdijFl1vPSvSR8ukmbUnV0KQ_NbkX8AepcpAzPB2DQ&oe=628C4E8B"
                alt="avatar"
              />
            </div>
            <h2>Saurabh Chirde</h2>
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
          <div>
            <img src={notifications} alt="icon" />
            <h2>Notifications</h2>
          </div>
          <Link to="/support">
            <div className={activeSupport ? "active-nav" : ""}>
              <img src={help} alt="icon" />
              <h2>Support</h2>
            </div>
          </Link>
          <Link to="/settings">
            <div className={activeSettings ? "active-nav" : ""}>
              <img src={settings} alt="icon" />
              <h2>Settings</h2>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/">
        <img src={logo_light} alt="logo" />
      </Link>
    </div>
  );
};
