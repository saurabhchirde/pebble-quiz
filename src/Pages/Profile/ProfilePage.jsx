import { NavBar, NavBarTop, NavBarBottom, Button, Footer } from "Components";
import { Link } from "react-router-dom";
import { check_bg, highest, flag } from "Data/Icons/icons";
import { allBadges, achievements } from "Data/tempAchievements";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const totalAchivement = achievements.length;
  const progressBarFill = (totalAchivement / 20) * 100;

  const achievedBadges = allBadges?.map((badge, index) => (
    <img key={index} src={badge.badge} alt="badge" />
  ));

  const profileImageSrc =
    "https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/151580883_4025926607469148_268572636116125368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=xI-ONWnsyqEAX9xfx9S&_nc_ht=scontent.fnag5-1.fna&oh=00_AT8DVdijFl1vPSvSR8ukmbUnV0KQ_NbkX8AepcpAzPB2DQ&oe=628C4E8B";

  return (
    <div className="profile-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div className="profile-page-content">
        <div>
          <div className="profile-page-header">
            <h1>Hi, Saurabh</h1>
            <div className="flex-row login-btn-desktop">
              <Button
                label="Logout"
                btnClassName="btn primary-outline-btn-md"
              />
              <Link to="/category">
                <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
              </Link>
            </div>
          </div>
          <div className="profile-detail-section">
            <img src={profileImageSrc} alt="user-profile" />
            <div className="profile-detail-section-right">
              <div className="user-detail-overview">
                <h2>Saurabh Chirde</h2>
                <p>Level {totalAchivement}</p>
              </div>
              <div className="profile-overview-section">
                <div className="profile-overview">
                  <img src={flag} alt="icon" className="overview-icon" />
                  <div>
                    <h3>35</h3>
                    <p>Game Wins</p>
                  </div>
                </div>
                <div className="profile-overview">
                  <img src={highest} alt="icon" className="overview-icon" />
                  <div>
                    <h3>50</h3>
                    <p>Highest Score</p>
                  </div>
                </div>
                <div className="profile-overview">
                  <img src={check_bg} alt="icon" className="overview-icon" />
                  <div>
                    <h3>101</h3>
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
                <p>{totalAchivement}/20 </p>
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
        <Footer />
      </div>
    </div>
  );
};