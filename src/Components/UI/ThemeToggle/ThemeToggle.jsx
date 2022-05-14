import { useTheme } from "Context";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? "fas fa-sun" : "fas fa-moon";

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <i className={themeIcon}></i>
      <h2 className="theme-title-desktop">
        {theme === "dark" ? "Light Theme" : "Dark Theme"}
      </h2>
      <h2 className="theme-title-mobile ">
        {theme === "dark" ? "Light" : "Dark"}
      </h2>
    </div>
  );
};
