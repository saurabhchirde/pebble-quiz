import { NavBar, NavBarBottom, NavBarTop, Button, Footer } from "Components";
import { QuestionCard } from "Components/Cards";
import { useModal } from "Context";
import { quizQuestions } from "Data/tempData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const { setProfileMenu } = useModal();
  const { categoryId } = useParams();
  const [startQuiz, setStartQuiz] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [timer, setTimer] = useState(30);

  const category = quizQuestions.find((cat) => cat._id === categoryId);

  const startQuizToggler = () => {
    setStartQuiz((pre) => !pre);
  };

  const timerInterval = () => {
    setTimeout(() => {
      if (startQuiz) {
        if (timer < 1) {
          if (nextQuestion < category.questions.length - 1) {
            setNextQuestion((preQuestion) => preQuestion + 1);
          } else {
            setStartQuiz(false);
          }
          setTimer(30);
        } else {
          setTimer((preTime) => preTime - 1);
        }
      }
    }, 1000);
  };

  const currentQuestion = category.questions[nextQuestion].question;
  const answer = category.questions[nextQuestion].answer;
  const currentQuestionImg = category.questions[nextQuestion].img;
  const options = category.questions[nextQuestion].options;
  const currentQuestionNumber =
    category.questions.indexOf(category.questions[nextQuestion]) + 1;
  const totalQuestions = category.questions.length;

  useEffect(() => {
    timerInterval();
  }, [startQuiz, nextQuestion, timer]);

  return (
    <div className="question-page-body">
      <NavBar />
      <NavBarBottom />
      <NavBarTop />
      <div
        className="question-page-content"
        onClick={() => {
          setProfileMenu(false);
        }}
      >
        <div>
          <div className="question-page-header">
            <h1>Quiz - {category.name}</h1>
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
                onClick={startQuizToggler}
                label={startQuiz ? "Stop Quiz" : "Start Quiz"}
                btnClassName="btn primary-btn-md"
              />
            </div>
          </div>
          <div className="question-section">
            <div>
              <QuestionCard
                question={currentQuestion}
                answer={answer}
                options={options}
                questionNum={currentQuestionNumber}
                totalQuestions={totalQuestions}
                img={currentQuestionImg}
                time={timer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
