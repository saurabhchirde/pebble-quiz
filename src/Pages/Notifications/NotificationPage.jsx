import { NavBar, NavBarBottom, NavBarTop, Button } from "Components";
import { useAuth, useModal, useQuiz } from "Context";
import "../CommonStyling.css";
import "./NotificationPage.css";

export const NotificationPage = () => {
  const { setProfileMenu, authClickHandler } = useModal();
  const {
    authState: { token },
  } = useAuth();
  const { userQuizData } = useQuiz();

  const allNotifications =
    userQuizData?.notifications?.length > 0 ? (
      userQuizData?.notifications?.map((notification) => (
        <li
          key={notification.id}
          className={`list-stacked list-close-btn ${
            notification.unRead ? "un-read" : ""
          }`}
        >
          <div className="list-body">
            <div className="avatar avatar-sm-round">
              <img loading="lazy" src={notification.icon} alt="avatar-image" />
            </div>
            <div>
              <h1>You earned a new badge</h1>
              <p>{notification.date}</p>
            </div>
          </div>
        </li>
      ))
    ) : (
      <h2 className="title-lg-wt-5">No Notifications</h2>
    );

  return (
    <div className="help-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="help-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div className="help-page-header">
          <h1>All Notifications</h1>
          <div className="flex-row login-btn-desktop">
            <Button
              onClick={authClickHandler}
              label={token ? "Logout" : "Login"}
              btnClassName="btn primary-outline-btn-md"
            />
          </div>
        </div>
        <ul className="all-notifications">{allNotifications}</ul>
      </div>
    </div>
  );
};
