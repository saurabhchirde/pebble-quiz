import { NavBar, NavBarBottom, NavBarTop, Button } from "Components";
import { useModal } from "Context";
import "../CommonStyling.css";
import "./SettingPage.css";

export const SettingPage = () => {
  const { setProfileMenu } = useModal();
  return (
    <div className="setting-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="setting-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div className="setting-page-header">
          <h1>Settings</h1>
          <div className="flex-row login-btn-desktop">
            <Button label="Logout" btnClassName="btn primary-outline-btn-md" />
          </div>
        </div>
        <h2 className="setting-page-title">Under Construction...</h2>
      </div>
    </div>
  );
};
