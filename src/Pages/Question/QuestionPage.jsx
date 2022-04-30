import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  QuizEndModal,
  RulesModal,
} from "Components";
import { QuestionCard } from "Components/Cards";
import { useModal } from "Context";
import { quizQuestions } from "Data/tempData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const { setProfileMenu } = useModal();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [startQuiz, setStartQuiz] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [timer, setTimer] = useState(20);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showRules, setShowRules] = useState(true);

  const category = quizQuestions.find((cat) => cat._id === categoryId);

  const startQuizClickHandler = () => {
    setStartQuiz((pre) => !pre);
    setShowRules(false);
  };

  const startNewQuizHandler = () => {
    navigate("/category");
  };

  const timerInterval = () => {
    setTimeout(() => {
      if (startQuiz) {
        if (timer < 1 || selectedChoice) {
          if (nextQuestion < category?.questions.length - 1) {
            setNextQuestion((preQuestion) => preQuestion + 1);
            setSelectedChoice("");
          } else {
            setShowResult(true);
            setStartQuiz(false);
          }
          setTimer(20);
        } else {
          setTimer((preTime) => preTime - 1);
        }
      }
    }, 1000);
  };

  const currentQuestion = category?.questions[nextQuestion].question;
  const answer = category?.questions[nextQuestion].answer;
  const currentQuestionImg = category?.questions[nextQuestion].img;
  const options = category?.questions[nextQuestion].options;
  const currentQuestionNumber =
    category?.questions.indexOf(category?.questions[nextQuestion]) + 1;
  const totalQuestions = category?.questions.length;

  useEffect(() => {
    timerInterval();
  }, [startQuiz, nextQuestion, timer]);

  useEffect(() => {
    if (!startQuiz) {
      if (score < 1) {
        setFinalScore(0);
      } else {
        setFinalScore(score);
      }
    }
  }, [score, startQuiz]);

  return (
    <div className="question-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop
        startQuiz={startQuiz}
        startQuizClickHandler={startQuizClickHandler}
        startNewQuizHandler={startNewQuizHandler}
      />
      {showResult && (
        <QuizEndModal setShowResult={setShowResult} finalScore={finalScore} />
      )}
      {currentQuestion && showRules && (
        <RulesModal
          onStartQuizClickHandler={startQuizClickHandler}
          startQuiz={startQuiz}
          setShowRules={setShowRules}
        />
      )}
      <div
        className="question-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div>
          <div className="question-page-header">
            <h1>Quiz - {category?.name ? category.name : ""}</h1>
            <div className="flex-row login-btn-desktop">
              <Button
                label="Logout"
                btnClassName={
                  startQuiz
                    ? "btn disabled-btn-md"
                    : "btn primary-outline-btn-md"
                }
              />
              <Button
                onClick={
                  !startQuiz ? startNewQuizHandler : startQuizClickHandler
                }
                label={!startQuiz ? "Start New" : "Stop Quiz"}
                btnClassName="btn primary-btn-md"
              />
            </div>
          </div>

          <div className="question-section">
            {currentQuestion ? (
              <div>
                <QuestionCard
                  question={currentQuestion}
                  answer={answer}
                  options={options}
                  questionNum={currentQuestionNumber}
                  totalQuestions={totalQuestions}
                  img={currentQuestionImg}
                  timer={timer}
                  selectedChoice={selectedChoice}
                  setSelectedChoice={setSelectedChoice}
                  score={score}
                  setScore={setScore}
                  startQuiz={startQuiz}
                />
              </div>
            ) : (
              <p className="error-loading-message">
                Error to load Question, try again
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
