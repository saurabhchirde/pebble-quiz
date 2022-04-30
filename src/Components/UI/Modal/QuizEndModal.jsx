import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./QuizEndModal.css";

export const QuizEndModal = ({ finalScore, setShowResult }) => {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    setShowResult(false);
    navigate("/");
  };

  const checkLeaderboardHandler = () => {
    setShowResult(false);
  };

  const takeNewQuizHandler = () => {
    setShowResult(false);
    navigate("/category");
  };

  return (
    <>
      <div className="modal-backdrop backdrop"></div>
      <div className="quiz-end-modal">
        <div className={finalScore > 0 ? "positive-score" : "zero-score"}>
          <i onClick={closeModalHandler} className="fa fa-times close-btn"></i>
          <h1>
            Your final score is <span> {finalScore}</span>
          </h1>
          <div className="quiz-end-modal-cta flex-row-center">
            <Button
              onClick={takeNewQuizHandler}
              label="Take New Quiz"
              btnClassName="btn primary-btn-lg"
            />
            <Button
              onClick={checkLeaderboardHandler}
              label="Check LeaderBoard"
              btnClassName="btn primary-outline-btn-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
