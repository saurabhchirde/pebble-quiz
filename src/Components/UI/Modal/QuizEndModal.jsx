import { useAuth, useNetworkCalls, useQuiz } from "Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../Button";
import "./QuizEndModal.css";

export const QuizEndModal = ({ finalScore }) => {
  const navigate = useNavigate();
  const {
    quizState: { showResult, userQuizData },
    quizDispatch,
  } = useQuiz();
  const {
    authState: { token, email },
  } = useAuth();
  const { updateFirestoreUserData } = useNetworkCalls();

  const closeModalHandler = () => {
    quizDispatch({ type: "SHOW_RESULT", payload: false });
    navigate("/");
  };

  const checkLeaderboardHandler = () => {
    quizDispatch({ type: "SHOW_RESULT", payload: false });
    navigate("/leaderboard");
  };

  const takeNewQuizHandler = () => {
    quizDispatch({ type: "SHOW_RESULT", payload: false });
    navigate("/category");
  };

  useEffect(() => {
    // if logged in update data on server
    if (token) {
      if (userQuizData.totalScore < 0) {
        userQuizData.totalScore = 0;
      }
      updateFirestoreUserData(email, userQuizData);
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
              btnClassName="btn primary-btn-md"
            />
            <Button
              onClick={checkLeaderboardHandler}
              label="Check Leaderboard"
              btnClassName="btn primary-text-btn-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
