import { AlertToast } from "Components";
import { useAuth } from "Context";
import { createContext, useContext, useReducer } from "react";
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
    authState: { token },
    authDispatch,
  } = useAuth();

  const authClickHandler = () => {
    if (token) {
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
