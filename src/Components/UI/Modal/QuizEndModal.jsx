import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./QuizEndModal.css";

export const QuizEndModal = ({ finalScore, setShowResult }) => {
  const navigate = useNavigate();
  const checkLeaderboardHandler = () => {
    setShowResult(false);
    navigate("/");
  };
  const takeNewQuizHandler = () => {
    setShowResult(false);
    navigate("/category");
  };
  return (
    <div className="quiz-end-modal">
      <div>
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
  );
};
