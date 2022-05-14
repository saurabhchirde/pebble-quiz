import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Footer,
  NotificationCard,
  PageHeader,
} from "Components";
import { useModal, useQuiz } from "Context";
import "../CommonStyling.css";
import "./NotificationPage.css";

export const NotificationPage = () => {
  const { modalDispatch } = useModal();
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
          <PageHeader title="All Notifications" />
          <ul className="all-notifications">{allNotifications}</ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};
