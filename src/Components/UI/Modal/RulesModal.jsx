import { useQuiz } from "Context";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./RulesModal.css";

export const RulesModal = ({ setShowRules, startQuizClickHandler }) => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const closeModalHandler = () => {
    navigate("/category");
    setShowRules(false);
  };

  return (
    <>
      <div className="modal-backdrop backdrop"></div>

      <div className="rules-container">
        <div>
          <i onClick={closeModalHandler} className="fa fa-times close-btn"></i>
          <h1>Quiz Rules</h1>
          <div className="rules-text">
            <ol className="list-basic list-style-number">
              <li>
                Each question has the timer of 20 sec, which will be visible on
                the page.
              </li>
              <li>You can choose only 1 answer amongs the given choices.</li>
              <li>
                For each correct answer you will be awarded with 5 points.
              </li>
              <li>
                There is a negative marking of 3 points for each wrong answer.
              </li>
              <li>You cannot skip the question.</li>
              <li>After finishing the quiz total score will be shown.</li>
            </ol>
          </div>
          <Button
            onClick={startQuizClickHandler}
            label={startQuiz ? "Stop Quiz" : "Start Quiz"}
            btnClassName="btn primary-btn-lg"
          />
        </div>
      </div>
    </>
  );
};
