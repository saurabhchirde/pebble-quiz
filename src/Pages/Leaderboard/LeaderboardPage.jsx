import { NavBar, NavBarTop, NavBarBottom, Button, Footer } from "Components";
import { Link } from "react-router-dom";
import { allUsers } from "Data/tempUsers";
import "./LeaderboardPage.css";

export const LeaderboardPage = () => {
  const showAllUsers = allUsers?.map((user) => (
    <div key={user.name} className="leaderboard-user-details">
      <div>
        <img src={user.img} alt="user" />
        <li>
          <h2>{user.name}</h2>
        </li>
      </div>
      <h2>
        {user.score} <span>Points</span>
      </h2>
    </div>
  ));

  return (
    <div className="leaderboard-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div className="leaderboard-page-content">
        <div className="leaderboard-page-header">
          <h1>Hi, Saurabh</h1>
          <div className="flex-row login-btn-desktop">
            <Button label="Logout" btnClassName="btn primary-outline-btn-md" />
            <Link to="/category">
              <Button label="Start Quiz" btnClassName="btn primary-btn-md" />
            </Link>
          </div>
        </div>
        <div className="leaderboard-table-section">
          <h2>Leaderboard</h2>
          <div className="leaderboard-table">
            <ol className="list-basic list-style-number">{showAllUsers}</ol>
          </div>
        </div>
      </div>
    </div>
  );
};
