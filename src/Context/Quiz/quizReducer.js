export const quizReducer = (quizState, action) => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...quizState,
        startQuiz: action.payload ?? !quizState.startQuiz,
      };

    case "SHOW_RESULT":
      return { ...quizState, showResult: action.payload };

    case "FINAL_SCORE":
      return { ...quizState, finalScore: action.payload };

    case "USER_QUIZ_DATA":
      return { ...quizState, userQuizData: action.payload };

    case "ALL_QUIZ_QUESTIONS":
      return { ...quizState, allQuizQuestions: action.payload };

    case "EARNED_BADGE":
      return { ...quizState, earnedBadge: action.payload };

    case "RECENT_QUIZ_GIVEN":
      return { ...quizState, recentGivenQuiz: action.payload };

    case "CLEAR_RECENT_QUIZ_GIVEN":
      return {
        ...quizState,
        recentGivenQuiz: {
          category: "",
          finalScore: 0,
          questions: [],
        },
      };

    default:
      return quizState;
  }
};
