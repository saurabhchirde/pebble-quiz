import { useAuth, useNetworkCalls, useQuiz } from "Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../Button";
import "./QuizEndModal.css";

export const QuizEndModal = ({ finalScore }) => {
  const navigate = useNavigate();
  const { startQuiz, showResult, setShowResult, playedQuizData } = useQuiz();
  const {
    authState: { token, email },
  } = useAuth();
  const { updateFirestoreUserData } = useNetworkCalls();

  const closeModalHandler = () => {
    setShowResult(false);
    navigate("/");
  };

  const checkLeaderboardHandler = () => {
    setShowResult(false);
    navigate("/leaderboard");
  };

  const takeNewQuizHandler = () => {
    setShowResult(false);
    navigate("/category");
  };

  useEffect(() => {
    // if logged in update data on server
    if (token) {
      updateFirestoreUserData(email, playedQuizData);
    }
  }, [showResult, token]);

  return (
    <>
      <div className="modal-backdrop backdrop"></div>
      <div className="quiz-end-modal">
        <div className={finalScore > 0 ? "positive-score" : "zero-score"}>
          <i onClick={closeModalHandler} className="fa fa-times close-btn"></i>
          <h1>
            You scored <span>{finalScore}</span> points
          </h1>
          <div className="quiz-end-modal-cta flex-row-center">
            <Button
              onClick={takeNewQuizHandler}
              label="Take New Quiz"
              btnClassName="btn primary-btn-lg"
            />
            <Button
              onClick={checkLeaderboardHandler}
              label="LeaderBoard"
              btnClassName="btn primary-text-btn-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
