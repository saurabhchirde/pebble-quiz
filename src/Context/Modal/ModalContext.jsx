import { useAlert, useAuth } from "Context";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSignupAlert, setShowSignupAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const {
    authState: { token },
    authDispatch,
  } = useAuth();
  const { alertDispatch } = useAlert();

  const authClickHandler = () => {
    if (token) {
      authDispatch({ type: "LOGOUT" });
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: "You have been logged out",
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    } else {
      setShowLogin(true);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        showLogin,
        setShowLogin,
        showSignup,
        setShowSignup,
        showSignupAlert,
        setShowSignupAlert,
        alertText,
        setAlertText,
        showAlert,
        setShowAlert,
        showNavMenu,
        setShowNavMenu,
        profileMenu,
        setProfileMenu,
        authClickHandler,
        showResetPassword,
        setShowResetPassword,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
