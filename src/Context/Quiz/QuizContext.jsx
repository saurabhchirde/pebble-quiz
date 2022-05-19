import { useAuth } from "Context";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
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
import { AlertToast } from "Components";
import { quizReducer } from "./quizReducer";
import { cleanErrorMessage } from "Utils/cleanErrorMessage";

const initialUserQuizData = {
  quizGiven: 0,
  winningStreak: 0,
  level: 0,
  gameWin: 0,
  totalScore: 0,
  highestScore: 0,
  correctAnswers: 0,
  badges: [],
  notifications: [],
};

const initialQuizState = {
  startQuiz: false,
  showResult: false,
  finalScore: 0,
  userQuizData: initialUserQuizData,
  allQuizQuestions:
    JSON.parse(sessionStorage.getItem("pebble-quiz-quiestions")) ?? [],
  earnedBadge: "",
  recentGivenQuiz: {
    category: "",
    finalScore: 0,
    questions: [],
  },
};

const QuizContext = createContext(null);

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);

  const navigate = useNavigate();
  const {
    authState: { token, name, email, profileImg, id },
  } = useAuth();

  const [flag, setFlag] = useState(false);

  const startQuizHandler = () => {
    quizDispatch({ type: "START_QUIZ" });
  };

  const startNewQuizHandler = () => {
    navigate("/category");
  };

  // get all question data
  const getAllQuizQuestions = async () => {
    const dbRef = realTimeDBRef(firebaseRealtimeDB);
    try {
      const allQuestions = await get(child(dbRef, "quizDB"));
      quizDispatch({ type: "ALL_QUIZ_QUESTIONS", payload: allQuestions.val() });
    } catch (error) {
      AlertToast("error", cleanErrorMessage(error.message));
    }
  };

  useEffect(() => {
    if (quizState.allQuizQuestions.length < 1) {
      getAllQuizQuestions();

      sessionStorage.setItem(
        "pebble-quiz-quiestions",
        JSON.stringify(quizState.allQuizQuestions)
      );
    }
  }, [quizState.allQuizQuestions]);

  // ad all data - quiz and user
  const userData = { ...quizState.userQuizData, name, email, id, profileImg };

  const addUserToFirestore = async () => {
    const addUser = doc(firestore, `users/${email}`);
    try {
      await setDoc(addUser, userData, { merge: true });
    } catch (error) {
      AlertToast("error", cleanErrorMessage(error.message));
    }
  };

  // get users previous data for updating after quiz
  const getUserData = async () => {
    const selectUser = doc(firestore, `users/${email}`);
    try {
      const userResponse = await getDoc(selectUser);
      // check if user in database
      if (userResponse.exists()) {
        quizDispatch({
          type: "USER_QUIZ_DATA",
          payload: userResponse.data(),
        });
      } else {
        // add if user is not in database
        addUserToFirestore();
        quizDispatch({
          type: "USER_QUIZ_DATA",
          payload: userResponse.data(),
        });
        setFlag(true);
      }
    } catch (error) {
      AlertToast("error", cleanErrorMessage(error.message));
    }
  };

  useEffect(() => {
    // reset data after logout
    quizDispatch({
      type: "USER_QUIZ_DATA",
      payload: initialUserQuizData,
    });
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
        quizState,
        quizDispatch,
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
