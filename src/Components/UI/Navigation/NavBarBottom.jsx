import "./NavBarBottom.css";
import {
  leaderboard,
  help,
  settings,
  category,
  notifications,
} from "Data/Icons/icons";

export const NavBarBottom = () => {
  return (
    <div className="nav-bar-bottom">
      <div>
        <img src={leaderboard} alt="icon" />
        <img src={notifications} alt="icon" />
        <img src={category} alt="icon" />
        <img src={help} alt="icon" />
        <img src={settings} alt="icon" />
      </div>
    </div>
  );
};
