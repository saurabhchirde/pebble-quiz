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
    authState: { token },
  } = useAuth();

  const { showCelebration } = useAnimation();

  const { setProfileMenu, authClickHandler, setShowBadgeModal } = useModal();
  const { categoryId } = useParams();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [timer, setTimer] = useState(20);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const {
    showResult,
    startQuiz,
    setShowResult,
    setStartQuiz,
    finalScore,
    setFinalScore,
    startQuizHandler,
    startNewQuizHandler,
    userQuizData,
    setEarnedBadge,
    setUserQuizData,
    allQuizQuestions,
  } = useQuiz();

  const category = allQuizQuestions.find((cat) => cat._id === categoryId);

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

            // after finishing one quiz
            if (wrongAnswers > 0) {
              setUserQuizData((preData) => {
                return {
                  ...preData,
                  winningStreak: 0,
                };
              });
            } else {
              setUserQuizData((preData) => {
                return {
                  ...preData,
                  winningStreak: userQuizData.winningStreak + 1,
                  gameWin: userQuizData.gameWin + 1,
                };
              });
            }
            setUserQuizData((preData) => {
              return {
                ...preData,
                quizGiven: userQuizData.quizGiven + 1,
                totalScore: userQuizData.totalScore + finalScore,
                correctAnswers: userQuizData.correctAnswers + correctAnswer,
              };
            });
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
        setFinalScore(0);
      } else {
        setFinalScore(score);
      }
    }
  }, [score, startQuiz]);

  useEffect(() => {
    if (userQuizData?.winningStreak === 1 && token) {
      let updatedLevel = userQuizData.level > 0 ? userQuizData.level + 1 : 1;

      // fetch badge url
      (async () => {
        const imgReference = ref(storage, `/badges/badge_${updatedLevel}.svg`);
        try {
          const badgeUrl = await getDownloadURL(imgReference);
          // for badge earned modal
          setEarnedBadge(badgeUrl);
          // add badge in users account
          setUserQuizData((preData) => {
            return {
              ...preData,
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
            };
          });

          // showing celebration
          showCelebration();

          // showing badge earned modal
          setShowBadgeModal(true);
        } catch (error) {
          AlertToast("info", error.message);
        }
      })();

      setTimeout(() => {
        showCelebration();
      }, 5500);

      setTimeout(() => {
        setShowBadgeModal(false);
        setEarnedBadge("");
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
