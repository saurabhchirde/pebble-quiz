import {
  NavBar,
  NavBarTop,
  NavBarBottom,
  Button,
  AlertToast,
  ThemeToggle,
} from "Components";
import { Link } from "react-router-dom";
import "./LeaderboardPage.css";
import { useAnimation, useAuth, useModal, useQuiz } from "Context";
import { useState, useEffect } from "react";
import { getDocs, collection, firestore } from "firebase.config";
import { sortByPoints } from "Utils/sortByPoints";
import avatar from "Data/Img/avatar.png";

export const LeaderboardPage = () => {
  const {
    authState: { token, name },
  } = useAuth();
  const { userQuizData } = useQuiz();
  const { setLoader } = useAnimation();

  const { setProfileMenu, authClickHandler } = useModal();
  const [allUsers, setAllUsers] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);

  // get all users data to show on leaderboard
  const getAllUsersFromFirestore = async () => {
    try {
      setLoader(true);
      const usersList = await getDocs(collection(firestore, "users"));

      usersList.forEach((doc) =>
        setAllUsers((preData) => [...preData, doc.data()])
      );
      setLoader(false);
    } catch (error) {}
  };

  useEffect(() => {
    // removing repeated entries if any
    const uniqueUsersJSON = new Set(allUsers.map(JSON.stringify));
    setUniqueUsers(Array.from(uniqueUsersJSON).map(JSON.parse));
  }, [allUsers]);

  const showAllUsers = sortByPoints(uniqueUsers)?.map((user) => (
    <div key={user.email} className="leaderboard-user-details">
      <div>
        <img src={user?.profileImg ?? avatar} alt="user" />
        <li>
          <h2 className="leaderboard-user-name">{user.name}</h2>
        </li>
      </div>
      <h2>
        {user.totalScore}
        <span>Points</span>
      </h2>
    </div>
  ));

  const userName = userQuizData?.name ? userQuizData?.name : name;

  // show loader until fetching the data
  if (allUsers.length < 1) {
  } else {
  }

  useEffect(() => {
    getAllUsersFromFirestore();
  }, []);

  return (
    <div className="leaderboard-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="leaderboard-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div className="leaderboard-page-header">
          <h1>Hi, {userName ? userName.split(" ")[0] : "Guest"}</h1>
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
          <ThemeToggle />
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
