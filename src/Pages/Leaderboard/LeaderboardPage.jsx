import {
  NavBar,
  NavBarTop,
  NavBarBottom,
  AlertToast,
  PageHeader,
} from "Components";
import "./LeaderboardPage.css";
import { useAnimation, useAuth, useModal, useQuiz } from "Context";
import { useState, useEffect } from "react";
import { getDocs, collection, firestore } from "firebase.config";
import { sortByPoints } from "Utils/sortByPoints";
import avatar from "Data/Img/avatar.png";
import { cleanErrorMessage } from "Utils/cleanErrorMessage";

export const LeaderboardPage = () => {
  const {
    authState: { name },
  } = useAuth();
  const {
    quizState: { userQuizData },
  } = useQuiz();

  const { setLoader } = useAnimation();

  const { modalDispatch } = useModal();
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
    } catch (error) {
      AlertToast("error", cleanErrorMessage(error.message));
    }
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
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
        }}
      >
        <PageHeader
          title={`Hi, ${userName ? userName.split(" ")[0] : "Guest"}`}
        />
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
