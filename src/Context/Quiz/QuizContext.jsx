import { useAuth, useNetworkCalls } from "Context";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialplayedQuizData = {
  quizGiven: 0,
  winningStreak: 0,
  level: 0,
  gameWin: 0,
  totalScore: 0,
  highestScore: 0,
  correctAnswers: 0,
  badges: [],
};

const QuizContext = createContext(null);

const QuizProvider = ({ children }) => {
  const navigate = useNavigate();
  const {
    authState: { token, name, email, profileImg, id },
  } = useAuth();
  const { getUserData } = useNetworkCalls();

  const [startQuiz, setStartQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [playedQuizData, setPlayedQuizData] = useState(initialplayedQuizData);

  const startQuizHandler = () => {
    setStartQuiz((pre) => !pre);
  };

  const startNewQuizHandler = () => {
    navigate("/category");
  };

  useEffect(() => {
    setPlayedQuizData(initialplayedQuizData);
  }, [token]);

  const userData = { ...playedQuizData, name, email, id, profileImg };

  useEffect(() => {
    if (token) {
      getUserData(userData, email, setPlayedQuizData);
    }
  }, [email]);

  return (
    <QuizContext.Provider
      value={{
        startQuiz,
        setStartQuiz,
        showResult,
        setShowResult,
        finalScore,
        setFinalScore,
        playedQuizData,
        setPlayedQuizData,
        startQuizHandler,
        startNewQuizHandler,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
