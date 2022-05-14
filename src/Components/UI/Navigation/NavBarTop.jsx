import "./NavBarTop.css";
import { logo_light } from "Data/Logo/logo";
import { Button } from "Components";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useModal, useQuiz } from "Context";
import avatar from "Data/Img/avatar.png";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const NavBarTop = () => {
  const {
    quizState: { startQuiz },
    startQuizHandler,
    startNewQuizHandler,
  } = useQuiz();
  const {
    modalState: { profileMenu },
    modalDispatch,
    authClickHandler,
  } = useModal();
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

  const activeProfile = pathname.includes("account");

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

        <div className="user-avatar">
          <div
            className="avatar avatar-sm-round"
            onClick={() => {
              modalDispatch({ type: "SHOW_PROFILE_MENU" });
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
              {token && (
                <Link
                  to="/account"
                  className={activeProfile ? "active-button" : ""}
                >
                  <Button
                    label="Profile"
                    btnClassName={`btn primary-text-btn-md ${
                      activeProfile ? "active-button" : ""
                    }`}
                  />
                </Link>
              )}
              <Button
                onClick={authClickHandler}
                label={token ? "Logout" : "Login"}
                btnClassName="btn primary-text-btn-md"
              />
              <ThemeToggle />
            </div>
          )}
        </div>
        {/*
         */}
      </div>
    </div>
  );
};
