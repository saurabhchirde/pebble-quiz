import "./NavBarTop.css";
import { logo_light } from "Data/Logo/logo";
import { Button } from "Components";

export const NavBarTop = () => {
  return (
    <div className="nav-bar-top">
      <img src={logo_light} alt="logo" />
      <div className="flex-row-center">
        <div className="flex-row login-btn-mobile">
          <Button label="Login" btnClassName="btn primary-outline-btn-md" />
          <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
        </div>
        {/* commented for development purpose */}
        {/* <div className="user-image-name">
          <div className="avatar avatar-sm-round">
            <img
              loading="lazy"
              src="https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/151580883_4025926607469148_268572636116125368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=xI-ONWnsyqEAX9xfx9S&_nc_ht=scontent.fnag5-1.fna&oh=00_AT8DVdijFl1vPSvSR8ukmbUnV0KQ_NbkX8AepcpAzPB2DQ&oe=628C4E8B"
              alt="avatar"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
