import { IconButton } from "Components/UI/Button";
import { useTheme } from "Context";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? "fas fa-sun" : "fas fa-moon";

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <IconButton icon={themeIcon} btnClassName="btn icon-btn-md" />
    </div>
  );
};
