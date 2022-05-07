import { useAlert, useAuth } from "Context";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertDispatchHandler } from "Utils/alertDispatchHandler";
import {
  firestore,
  doc,
  getDoc,
  setDoc,
  get,
  realTimeDBRef,
  firebaseRealtimeDB,
} from "firebase.config";
import { child } from "firebase/database";
import {} from "firebase/firestore";

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

const initialQuizData = [];

const QuizContext = createContext(null);

const QuizProvider = ({ children }) => {
  const navigate = useNavigate();
  const {
    authState: { token, name, email, profileImg, id },
  } = useAuth();

  const { alertDispatch } = useAlert();

  const [startQuiz, setStartQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [playedQuizData, setPlayedQuizData] = useState(initialplayedQuizData);
  const [allQuizQuestions, setAllQuizQuestions] = useState(
    JSON.parse(localStorage.getItem("pebble-quiz-quiestions")) ??
      initialQuizData
  );
  const [earnedBadge, setEarnedBadge] = useState("");
  const [flag, setFlag] = useState(false);

  const startQuizHandler = () => {
    setStartQuiz((pre) => !pre);
  };

  const startNewQuizHandler = () => {
    navigate("/category");
  };

  // get all question data
  const getAllQuizQuestions = async () => {
    const dbRef = realTimeDBRef(firebaseRealtimeDB);
    try {
      const allQuestions = await get(child(dbRef, "quizDB"));
      setAllQuizQuestions(allQuestions.val());
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
    }
  };

  useEffect(() => {
    if (allQuizQuestions.length < 1) {
      getAllQuizQuestions();

      localStorage.setItem(
        "pebble-quiz-quiestions",
        JSON.stringify(allQuizQuestions)
      );
    }
  }, [allQuizQuestions]);

  // all data - quiz and user
  const userData = { ...playedQuizData, name, email, id, profileImg };

  const addUserToFirestore = async () => {
    const addUser = doc(firestore, `users/${email}`);
    try {
      await setDoc(addUser, userData, { merge: true });
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
    }
  };

  // get users previous data for updating after quiz
  const getUserData = async () => {
    const selectUser = doc(firestore, `users/${email}`);
    try {
      const userResponse = await getDoc(selectUser);
      // check if user in database
      if (userResponse.exists()) {
        setPlayedQuizData(userResponse.data());
      } else {
        // add if user is not in database
        addUserToFirestore();
        setPlayedQuizData(userResponse.data());
        setFlag(true);
      }
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
    }
  };

  useEffect(() => {
    // reset data after logout
    setPlayedQuizData(initialplayedQuizData);
    if (token) {
      getUserData();
    }
    // to refresh after adding new account
    const flagTimer = setTimeout(() => {
      setFlag(false);
    }, 100);
    return () => {
      clearTimeout(flagTimer);
    };
  }, [email, token, flag]);

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
        earnedBadge,
        setEarnedBadge,
        setPlayedQuizData,
        startQuizHandler,
        startNewQuizHandler,
        allQuizQuestions,
        setAllQuizQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
