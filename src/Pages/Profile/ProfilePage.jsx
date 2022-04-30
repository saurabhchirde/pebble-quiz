import { NavBar, NavBarTop, NavBarBottom, Button, Footer } from "Components";
import { Link } from "react-router-dom";
import { check_bg, highest, flag } from "Data/Icons/icons";
import {
  badge_1,
  badge_2,
  badge_3,
  badge_4,
  badge_5,
  badge_6,
  badge_7,
  badge_8,
  badge_9,
  badge_10,
  badge_11,
  badge_12,
  badge_13,
  badge_14,
  placeholder,
} from "Data/Badges/badges";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const badges = [
    badge_1,
    badge_2,
    badge_4,
    badge_5,
    badge_6,
    badge_7,
    badge_8,
    badge_9,
    badge_10,
    badge_11,
    badge_12,
    badge_13,
    badge_14,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
  ];

  return (
    <div className="profile-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div className="profile-page-content">
        <div>
          <div className="profile-page-header">
            <h1>Welcome, Saurabh</h1>
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
            <img
              src="https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/151580883_4025926607469148_268572636116125368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=xI-ONWnsyqEAX9xfx9S&_nc_ht=scontent.fnag5-1.fna&oh=00_AT8DVdijFl1vPSvSR8ukmbUnV0KQ_NbkX8AepcpAzPB2DQ&oe=628C4E8B"
              alt="user-profile"
            />
            <div className="profile-detail-section-right">
              <div className="user-detail-overview">
                <h2>Saurabh Chirde</h2>
                <p>Level 7</p>
              </div>
              <div className="profile-overview-section">
                <div className="profile-overview">
                  <img src={flag} alt="icon" />
                  <div>
                    <h3>35</h3>
                    <p>Game Wins</p>
                  </div>
                </div>
                <div className="profile-overview">
                  <img src={highest} alt="icon" />
                  <div>
                    <h3>50</h3>
                    <p>Highest Score</p>
                  </div>
                </div>
                <div className="profile-overview">
                  <img src={check_bg} alt="icon" />
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
              <p>Achievement</p>
              <p>7/20 </p>
            </div>
            <div className="profile-achievement-badges">
              {badges.map((badge) => (
                <img key={badge} src={badge} alt="badge" />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
