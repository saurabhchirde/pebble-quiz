import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  QuizEndModal,
  RulesModal,
} from "Components";
import { QuestionCard } from "Components/Cards";
import { useAuth, useModal, useQuiz } from "Context";
import { quizQuestions } from "Data/tempData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const {
    authState: { token },
    authDispatch,
  } = useAuth();

  const { setProfileMenu, authClickHandler } = useModal();
  const { categoryId } = useParams();
  const [nextQuestion, setNextQuestion] = useState(0);
  const [timer, setTimer] = useState(20);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(true);

  const {
    showResult,
    startQuiz,
    setShowResult,
    setStartQuiz,
    finalScore,
    setFinalScore,
    startQuizHandler,
    startNewQuizHandler,
  } = useQuiz();

  const category = quizQuestions.find((cat) => cat._id === categoryId);

  const startQuizClickHandler = () => {
    startQuizHandler();
    setShowRules(false);
  };

  const timerInterval = () => {
    setTimeout(() => {
      if (startQuiz) {
        setFinalScore(0);
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
      <NavBarTop />
      {showResult && <QuizEndModal finalScore={finalScore} />}
      {currentQuestion && showRules && (
        <RulesModal
          startQuizClickHandler={startQuizClickHandler}
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
                onClick={authClickHandler}
                label={token ? "Logout" : "Login"}
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
                />
              </div>
            ) : (
              <p className="error-loading-message">
                failed to load Question 🙁, try again
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
