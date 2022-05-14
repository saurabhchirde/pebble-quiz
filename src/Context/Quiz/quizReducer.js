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
      console.log(action.payload);
      return { ...quizState, userQuizData: action.payload };

    case "ALL_QUIZ_QUESTIONS":
      return { ...quizState, allQuizQuestions: action.payload };

    case "EARNED_BADGE":
      return { ...quizState, earnedBadge: action.payload };

    default:
      return quizState;
  }
};
