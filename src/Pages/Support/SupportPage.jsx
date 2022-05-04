import { NavBar, NavBarBottom, NavBarTop, Button } from "Components";
import { useAuth, useModal } from "Context";
import "../CommonStyling.css";
import "./SupportPage.css";

export const SupportPage = () => {
  const { setProfileMenu, authClickHandler } = useModal();
  const {
    authState: { token },
  } = useAuth();

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
            <Button
              onClick={authClickHandler}
              label={token ? "Logout" : "Login"}
              btnClassName="btn primary-outline-btn-md"
            />
          </div>
        </div>
        <h2 className="support-page-title">Under Construction...</h2>
      </div>
    </div>
  );
};
