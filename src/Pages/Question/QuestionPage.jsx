import {
  NavBar,
  NavBarBottom,
  NavBarTop,
  Button,
  QuizEndModal,
  RulesModal,
  AlertToast,
} from "Components";
import { QuestionCard } from "Components/Cards";
import { useAnimation, useAuth, useModal, useQuiz } from "Context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storage, ref, getDownloadURL } from "firebase.config";
import { v4 as uuid } from "uuid";
import "../CommonStyling.css";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const {
    authState: { token, email },
  } = useAuth();

  const { showCelebration } = useAnimation();

  const { modalDispatch, authClickHandler } = useModal();
  const { categoryId } = useParams();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [timer, setTimer] = useState(20);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const {
    quizState: {
      startQuiz,
      showResult,
      finalScore,
      userQuizData,
      allQuizQuestions,
    },
    startQuizHandler,
    startNewQuizHandler,
    quizDispatch,
  } = useQuiz();

  const category = allQuizQuestions.find((cat) => cat._id === categoryId);

  const startQuizClickHandler = () => {
    startQuizHandler();
    setShowRules(false);
  };

  const timerInterval = () => {
    setTimeout(() => {
      if (startQuiz) {
        if (timer < 1 || selectedChoice) {
          if (nextQuestion < category?.questions.length - 1) {
            setNextQuestion((preQuestion) => preQuestion + 1);
            setSelectedChoice("");
          } else {
            // after finishing one quiz
            quizDispatch({ type: "SHOW_RESULT", payload: true });
            quizDispatch({ type: "START_QUIZ", payload: false });
            quizDispatch({
              type: "USER_QUIZ_DATA",
              payload: {
                ...userQuizData,
                quizGiven: userQuizData.quizGiven + 1,
                correctAnswers: userQuizData.correctAnswers + correctAnswer,
              },
            });

            if (wrongAnswers > 0) {
              quizDispatch({
                type: "USER_QUIZ_DATA",
                payload: { ...userQuizData, winningStreak: 0 },
              });
            } else {
              quizDispatch({
                type: "USER_QUIZ_DATA",
                payload: {
                  ...userQuizData,
                  winningStreak: userQuizData.winningStreak + 1,
                  gameWin: userQuizData.gameWin + 1,
                  totalScore: userQuizData.totalScore + score,
                },
              });
            }
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
      if (score < 0) {
        quizDispatch({ type: "FINAL_SCORE", payload: 0 });
      } else {
        quizDispatch({ type: "FINAL_SCORE", payload: score });
      }
    }
  }, [score, startQuiz]);

  useEffect(() => {
    if (userQuizData?.winningStreak === 7 && token) {
      let updatedLevel = userQuizData.level > 0 ? userQuizData.level + 1 : 1;

      // fetch badge url
      (async () => {
        const imgReference = ref(storage, `/badges/badge_${updatedLevel}.svg`);
        try {
          const badgeUrl = await getDownloadURL(imgReference);
          // for badge earned modal
          quizDispatch({ type: "EARNED_BADGE", payload: badgeUrl });
          // add badge in users account
          quizDispatch({
            type: "USER_QUIZ_DATA",
            payload: {
              ...userQuizData,
              level: updatedLevel,
              badges: [
                ...userQuizData.badges,
                {
                  name: `Badge_${updatedLevel}`,
                  badge: `${badgeUrl}`,
                },
              ],
              notifications: [
                {
                  id: uuid(),
                  icon: `${badgeUrl}`,
                  date: new Date().toLocaleDateString(),
                  unRead: true,
                },
                ...userQuizData.notifications,
              ],
              winningStreak: 0,
            },
          });

          // showing celebration
          showCelebration();

          // showing badge earned modal
          modalDispatch({ type: "SHOW_BADGE_MODAL", payload: true });
        } catch (error) {
          AlertToast("info", error.message);
        }
      })();

      setTimeout(() => {
        showCelebration();
      }, 5500);

      setTimeout(() => {
        modalDispatch({ type: "SHOW_BADGE_MODAL", payload: false });
        quizDispatch({ type: "EARNED_BADGE", payload: "" });
      }, 5500);
    }
  }, [userQuizData?.winningStreak]);

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
          modalDispatch({ type: "SHOW_PROFILE_MENU", payload: false });
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
                  setWrongAnswers={setWrongAnswers}
                  setCorrectAnswer={setCorrectAnswer}
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
