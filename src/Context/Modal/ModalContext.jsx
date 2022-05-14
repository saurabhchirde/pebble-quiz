import { AlertToast } from "Components";
import { useAuth } from "Context";
import { firestore } from "firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useReducer } from "react";
import { cleanErrorMessage } from "Utils/cleanErrorMessage";
import { modalReducer } from "./modalReducer";

const ModalContext = createContext(null);

const modalInitialState = {
  showLogin: false,
  showSignup: false,
  showSignupAlert: false,
  alertText: "",
  showAlert: false,
  showNavMenu: false,
  profileMenu: false,
  showResetPassword: false,
  showBadgeModal: false,
};

const ModalProvider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    modalInitialState
  );

  const {
    authState: { token, email },
    authDispatch,
  } = useAuth();

  // after log out, update winning streak to 0
  const updateUserWinningStreak = async () => {
    const selectUser = doc(firestore, `users/${email}`);
    try {
      await updateDoc(selectUser, { winningStreak: 0 });
    } catch (error) {
      AlertToast("error", cleanErrorMessage(error.message));
    }
  };

  const authClickHandler = () => {
    if (token) {
      updateUserWinningStreak();
      authDispatch({ type: "LOGOUT" });
      AlertToast("info", "You have been logged out");
    } else {
      modalDispatch({ type: "SHOW_LOGIN", payload: true });
    }
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        modalDispatch,
        authClickHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
