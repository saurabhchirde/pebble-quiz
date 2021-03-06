import {
  NavBar,
  NavBarTop,
  NavBarBottom,
  Footer,
  PageHeader,
} from "Components";
import { check_bg, highest, flag } from "Data/Icons/icons";
import avatar from "Data/Img/avatar.png";
import "../CommonStyling.css";
import "./ProfilePage.css";
import { useAuth, useModal, useQuiz } from "Context";

export const ProfilePage = () => {
  const {
    authState: { token, profileImg, name },
  } = useAuth();
  const {
    quizState: { userQuizData },
  } = useQuiz();

  const { modalDispatch } = useModal();
  const progressBarFill = (userQuizData?.level / 20) * 100;
  const progressBarShow = progressBarFill > 100 ? 100 : progressBarFill;

  const achievedBadges = userQuizData?.badges?.map((badge, index) => (
    <img key={index} src={badge.badge} alt="badge" />
  ));

  const userName = userQuizData?.name ? userQuizData?.name : name;

  return (
    <div className="profile-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="profile-page-content"
        onClick={() => {
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
        }}
      >
        <PageHeader title="Your account" />
        {token ? (
          <div className="profile-details">
            <div className="profile-detail-section">
              <div className="profile-detail-img">
                <img
                  src={profileImg ? profileImg : avatar}
                  alt="user-profile"
                />
              </div>
              <div className="profile-detail-section-right">
                <div className="user-detail-overview">
                  <h2>{userName ? userName : "Guest User"}</h2>
                  <p>Level {userQuizData?.level}</p>
                </div>
                <div className="profile-overview-section">
                  <div className="profile-overview">
                    <img src={flag} alt="icon" className="overview-icon" />
                    <div>
                      <h3>{userQuizData?.gameWin}</h3>
                      <p>Game Wins</p>
                    </div>
                  </div>
                  <div className="profile-overview">
                    <img src={highest} alt="icon" className="overview-icon" />
                    <div>
                      <h3>{userQuizData?.totalScore}</h3>
                      <p>Total Score</p>
                    </div>
                  </div>
                  <div className="profile-overview">
                    <img src={check_bg} alt="icon" className="overview-icon" />
                    <div>
                      <h3>{userQuizData?.correctAnswers}</h3>
                      <p>Correct Answers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-achievement-section">
              <div className="profile-achievement-title">
                <p>Achievements</p>
                <div className="total-achievements">
                  <p>{userQuizData?.level}/20 </p>
                  <div className="achievements-progress-bar">
                    <div
                      style={{
                        width: `${progressBarShow}%`,
                      }}
                      className="achievements-progress-bar-fill"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="profile-achievement-badges">{achievedBadges}</div>
            </div>
          </div>
        ) : (
          <p className="not-logged-message">Login to view your Profile</p>
        )}
        <Footer />
      </div>
    </div>
  );
};
