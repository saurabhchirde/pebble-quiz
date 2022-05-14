import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  Footer,
  NotificationCard,
} from "Components";
import { useAuth, useModal, useQuiz } from "Context";
import "../CommonStyling.css";
import "./NotificationPage.css";

export const NotificationPage = () => {
  const { modalDispatch, authClickHandler } = useModal();
  const {
    authState: { token },
  } = useAuth();
  const {
    quizState: { userQuizData },
  } = useQuiz();

  const allNotifications =
    userQuizData?.notifications?.length > 0 ? (
      userQuizData?.notifications?.map((notification) => (
        <NotificationCard notification={notification} key={notification.id} />
      ))
    ) : (
      <h2 className="title-lg-wt-5">No Notifications</h2>
    );

  return (
    <div className="notification-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="notification-page-content"
        onClick={() => {
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
        }}
      >
        <div>
          <div className="notification-page-header">
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
        <Footer />
      </div>
    </div>
  );
};
