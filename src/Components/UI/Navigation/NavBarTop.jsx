import "./NavBarTop.css";
import { logo_light } from "Data/Logo/logo";
import { Button } from "Components";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useModal, useQuiz } from "Context";
import avatar from "Data/Img/avatar.png";

export const NavBarTop = () => {
  const { startQuiz, startQuizHandler, startNewQuizHandler } = useQuiz();
  const { profileMenu, setProfileMenu, authClickHandler } = useModal();
  const { pathname } = useLocation();
  const {
    authState: { token, profileImg },
  } = useAuth();

  const hideStartBtn = pathname === "/category" ? false : true;
  const startQuizButton = pathname !== "/category" ? true : false;
  const startBtnLabel = startQuizButton ? "Start Quiz" : "Start New";

  const startButtonClickHandler = () => {
    if (!startQuiz) {
      startNewQuizHandler();
    } else {
      startQuizHandler();
    }
  };

  return (
    <div className="nav-bar-top">
      <Link to="/">
        <img src={logo_light} alt="logo" />
      </Link>
      <div className="flex-row-center">
        {hideStartBtn && (
          <div className="flex-row-center login-btn-mobile">
            <Button
              onClick={startButtonClickHandler}
              label={!startQuiz ? startBtnLabel : "Stop Quiz"}
              btnClassName="btn primary-btn-md"
            />
          </div>
        )}
        {token ? (
          <div className="user-avatar">
            <div
              className="avatar avatar-sm-round"
              onClick={() => {
                setProfileMenu((show) => !show);
              }}
            >
              <img
                loading="lazy"
                src={profileImg ? profileImg : avatar}
                alt="avatar"
              />
            </div>
            {profileMenu && (
              <div className="user-menu">
                <Link to="/account">
                  <Button
                    label="Profile"
                    btnClassName="btn primary-text-btn-md"
                  />
                </Link>
                <Button
                  onClick={authClickHandler}
                  label="Logout"
                  btnClassName="btn primary-text-btn-md"
                />
              </div>
            )}
          </div>
        ) : (
          <Button
            onClick={authClickHandler}
            label={token ? "Logout" : "Login"}
            btnClassName="btn primary-outline-btn-md"
          />
        )}
      </div>
    </div>
  );
};
