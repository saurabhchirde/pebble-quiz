import "./NavBarTop.css";
import { logo_light } from "Data/Logo/logo";
import { Button } from "Components";
import { Link } from "react-router-dom";
import { useModal } from "Context";

export const NavBarTop = () => {
  const { profileMenu, setProfileMenu } = useModal();
  return (
    <div className="nav-bar-top">
      <Link to="/">
        <img src={logo_light} alt="logo" />
      </Link>
      <div className="flex-row-center">
        <div className="flex-row-center login-btn-mobile">
          <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
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
              <Button label="Logout" btnClassName="btn primary-text-btn-md" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
