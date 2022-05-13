import { useQuiz } from "Context";
import { watch, check, paper } from "Data/Icons/icons";
import "./QuestionCard.css";

export const QuestionCard = ({
  img,
  timer,
  question,
  answer,
  options,
  questionNum,
  totalQuestions,
  selectedChoice,
  setSelectedChoice,
  score,
  setScore,
  setWrongAnswers,
  setCorrectAnswer,
}) => {
  const { startQuiz } = useQuiz();

  const optionSelectHandler = (option) => {
    setSelectedChoice(option);
    if (answer === option) {
      setCorrectAnswer((preData) => preData + 1);
      setScore((preScore) => preScore + 5);
    } else {
      setWrongAnswers((preData) => preData + 1);
      setScore((preScore) => preScore - 3);
    }
  };

  const selectedOptionStyle = (option) => {
    if (selectedChoice === option && selectedChoice === answer) {
      return "right-ans";
    } else if (selectedChoice === option) {
      return "wrong-ans";
    } else if (selectedChoice && option === answer) {
      return "right-ans";
    }
  };

  return (
    <div className="question-card">
      <div className="question-details">
        <img src={img} alt="question-img" className="question-img" />
        <div className="question">
          <div className="question-text">
            <h2>Question -</h2>
            <h1>{question}</h1>
          </div>
          <div className="quiz-detail">
            <div className="quiz-total-time">
              <img src={watch} alt="timer-icon" />
              <div>
                <h3>{timer} sec</h3>
                <p>Time Left</p>
              </div>
            </div>
            <div className="quiz-high-score">
              <img src={check} alt="check-icon" />
              <div>
                <h3>{score}</h3>
                <p>Score</p>
              </div>
            </div>
            <div className="quiz-progress">
              <img src={paper} alt="note-icon" />
              <div>
                <h3>
                  {questionNum}/{totalQuestions}
                </h3>
                <p>Question</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="answer-options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedOptionStyle(option)}`}
            disabled={!startQuiz || selectedChoice}
            onClick={() => optionSelectHandler(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
