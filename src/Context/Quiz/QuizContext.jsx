import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext(null);

const QuizProvider = ({ children }) => {
  const navigate = useNavigate();
  const [startQuiz, setStartQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const startQuizHandler = () => {
    setStartQuiz((pre) => !pre);
  };

  const startNewQuizHandler = () => {
    navigate("/category");
  };

  return (
    <QuizContext.Provider
      value={{
        startQuiz,
        setStartQuiz,
        showResult,
        setShowResult,
        finalScore,
        setFinalScore,
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
