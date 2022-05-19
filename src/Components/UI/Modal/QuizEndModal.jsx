import { useAuth, useNetworkCalls, useQuiz } from "Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../Button";
import "./QuizEndModal.css";

export const QuizEndModal = ({ finalScore }) => {
  const navigate = useNavigate();
  const {
    quizState: { showResult, userQuizData, recentGivenQuiz },
    quizDispatch,
  } = useQuiz();
  const {
    authState: { token, email },
  } = useAuth();
  const { updateFirestoreUserData } = useNetworkCalls();

  const closeModalHandler = () => {
    quizDispatch({ type: "SHOW_RESULT", payload: false });
    quizDispatch({ type: "CLEAR_RECENT_QUIZ_GIVEN" });
    navigate("/");
  };

  const checkLeaderboardHandler = () => {
    quizDispatch({ type: "SHOW_RESULT", payload: false });
    quizDispatch({ type: "CLEAR_RECENT_QUIZ_GIVEN" });
    navigate("/leaderboard");
  };

  const takeNewQuizHandler = () => {
    quizDispatch({ type: "SHOW_RESULT", payload: false });
    quizDispatch({ type: "CLEAR_RECENT_QUIZ_GIVEN" });
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
          <div className="flex-row-center flex-justify-space-between">
            <h1>Quiz Summary</h1>
            <h1>
              Score <span>{finalScore}</span> points
            </h1>
          </div>
          <h2 className="title-lg-wt-5 text-center">
            Category : {recentGivenQuiz.category}
          </h2>
          {recentGivenQuiz?.questions.map((question, index) => (
            <div key={index} className="all-given-questions">
              <p className="mg-point6-bot">Question : {question.question}</p>
              <div className="end-modal-options">
                {question.options.map((option, index) => (
                  <li
                    className={`option-btn  ${
                      option === question.selectedChoice &&
                      question.selectedChoice === question.answer
                        ? "right-ans"
                        : option === question.selectedChoice
                        ? "wrong-ans"
                        : question.selectedChoice && option === question.answer
                        ? "right-ans"
                        : ""
                    }`}
                    key={index}
                  >
                    {option}
                  </li>
                ))}
              </div>
            </div>
          ))}

          <div className="quiz-end-modal-cta flex-row-center">
            <Button
              onClick={takeNewQuizHandler}
              label="Take New Quiz"
              btnClassName="btn primary-btn-md"
            />
            <Button
              onClick={checkLeaderboardHandler}
              label="Check Leaderboard"
              btnClassName="btn secondary-outline-btn-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
