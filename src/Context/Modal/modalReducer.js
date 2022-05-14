export const modalReducer = (modalState, action) => {
  switch (action.type) {
    case "SHOW_LOGIN":
      return { ...modalState, showLogin: action.payload };

    case "SHOW_SIGNUP":
      return { ...modalState, showSignup: action.payload };

    case "SHOW_SIGNUP_ALERT":
      return { ...modalState, showSignupAlert: action.payload };

    case "ALERT_TEXT":
      return { ...modalState, alertText: action.payload };

    case "SHOW_ALERT":
      return { ...modalState, showAlert: action.payload };

    case "SHOW_PROFILE_MENU":
      return {
        ...modalState,
        profileMenu: action.payload ?? !modalState.profileMenu,
      };

    case "SHOW_RESET_PASSWORD":
      return { ...modalState, showResetPassword: action.payload };

    case "SHOW_BADGE_MODAL":
      return { ...modalState, showBadgeModal: action.payload };

    default:
      return modalState;
  }
};
