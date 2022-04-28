import { watch, check, paper } from "Data/Icons/icons";
import { useState } from "react";
import "./QuestionCard.css";

export const QuestionCard = ({
  img,
  time,
  question,
  answer,
  options,
  questionNum,
  totalQuestions,
}) => {
  const [choice, setChoice] = useState(false);
  const optionClickHandler = (option) => {
    if (answer === option) {
      setChoice(true);
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
              <img src={watch} />
              <div>
                <h3>{time}</h3>
                <p>Time Left</p>
              </div>
            </div>
            <div className="quiz-high-score">
              <img src={check} />
              <div>
                <h3>58</h3>
                <p>Highest Score</p>
              </div>
            </div>
            <div className="quiz-progress">
              <img src={paper} />
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
            className="option-btn"
            onClick={() => optionClickHandler(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
