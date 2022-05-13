import {
  NavBar,
  NavBarTop,
  NavBarBottom,
  Button,
  Footer,
  IconButton,
} from "Components";
import { Link } from "react-router-dom";
import { check_bg, highest, flag } from "Data/Icons/icons";
import avatar from "Data/Img/avatar.png";
import "../CommonStyling.css";
import "./ProfilePage.css";
import { useAuth, useModal, useQuiz } from "Context";

export const ProfilePage = () => {
  const {
    authState: { token, profileImg, name },
  } = useAuth();
  const { userQuizData } = useQuiz();

  const { setProfileMenu, authClickHandler } = useModal();
  const progressBarFill = (userQuizData?.level / 20) * 100;

  const achievedBadges = userQuizData?.badges?.map((badge, index) => (
    <img key={index} src={badge.badge} alt="badge" />
  ));

  const fullUserName = userQuizData?.name ? userQuizData?.name : name;

  return (
    <div className="profile-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="profile-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div className="profile-page-header">
          <h1>Hi, {fullUserName ? fullUserName.split(" ")[0] : "Guest"}</h1>
          <div className="flex-row login-btn-desktop">
            <Button
              onClick={authClickHandler}
              label={token ? "Logout" : "Login"}
              btnClassName="btn primary-outline-btn-md"
            />
            <Link to="/category">
              <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
            </Link>
          </div>
        </div>
        {token ? (
          <div className="profile-details">
            <div className="profile-detail-section">
              <div className="profile-detail-img">
                <img
                  src={profileImg ? profileImg : avatar}
                  alt="user-profile"
                />
                {/* <IconButton
                  onClick={changeImageHandler}
                  icon="fas fa-camera "
                  btnClassName="btn icon-btn-sm edit-photo"
                /> */}
              </div>
              <div className="profile-detail-section-right">
                <div className="user-detail-overview">
                  <h2>{fullUserName ? fullUserName : "Guest User"}</h2>
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
                      style={{ width: `${progressBarFill}%` }}
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
