import "./NavBarTop.css";
import { logo_light } from "Data/Logo/logo";
import { Button } from "Components";
import { Link, useLocation } from "react-router-dom";
import { useModal } from "Context";

export const NavBarTop = ({
  startQuiz,
  startQuizClickHandler,
  startNewQuizHandler,
}) => {
  const { profileMenu, setProfileMenu } = useModal();
  const { pathname } = useLocation();

  const hideStartBtn =
    pathname === "/category" || pathname === "/" ? false : true;
  const onLanding = pathname === "/" ? true : false;
  const startBtnLabel = onLanding ? "Start Quiz" : "Start New";

  const startButtonClickHandler = () => {
    if (!startQuiz) {
      startNewQuizHandler();
    } else {
      startQuizClickHandler();
    }
  };

  return (
    <div className="nav-bar-top">
      <Link to="/">
        <img src={logo_light} alt="logo" />
      </Link>
      <div className="flex-row-center">
        <div className="flex-row-center login-btn-mobile">
          {hideStartBtn && (
            <Button
              onClick={startButtonClickHandler}
              label={!startQuiz ? startBtnLabel : "Stop Quiz"}
              btnClassName="btn primary-btn-md"
            />
          )}
        </div>
        <div className="user-avatar">
          <div
            className="avatar avatar-sm-round"
            onClick={() => {
              setProfileMenu((show) => !show);
            }}
          >
            <img
              loading="lazy"
              src="https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/151580883_4025926607469148_268572636116125368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=xI-ONWnsyqEAX9xfx9S&_nc_ht=scontent.fnag5-1.fna&oh=00_AT8DVdijFl1vPSvSR8ukmbUnV0KQ_NbkX8AepcpAzPB2DQ&oe=628C4E8B"
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
              <Button label="Logout" btnClassName="btn primary-text-btn-md" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
