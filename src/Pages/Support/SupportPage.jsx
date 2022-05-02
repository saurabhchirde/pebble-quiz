import { NavBar, NavBarBottom, NavBarTop, Button } from "Components";
import { useModal } from "Context";
import "../CommonStyling.css";
import "./SupportPage.css";

export const SupportPage = () => {
  const { setProfileMenu } = useModal();
  return (
    <div className="support-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="support-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div className="support-page-header">
          <h1>Support</h1>
          <div className="flex-row login-btn-desktop">
            <Button label="Logout" btnClassName="btn primary-outline-btn-md" />
          </div>
        </div>
        <h2 className="support-page-title">Under Construction...</h2>
      </div>
    </div>
  );
};
