import { AlertToast } from "Components";
import { useAuth } from "Context";
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
  const [showBadgeModal, setShowBadgeModal] = useState(false);

  const {
    authState: { token },
    authDispatch,
  } = useAuth();

  const authClickHandler = () => {
    if (token) {
      authDispatch({ type: "LOGOUT" });
      AlertToast("info", "You have been logged out");
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
        showBadgeModal,
        setShowBadgeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
