import { useAlert, useAuth, useModal } from "Context";
import { createContext, useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { firebaseAuth } from "firebase.config";

const NetworkContext = createContext({});

const NetworkProvider = ({ children }) => {
  const { authDispatch } = useAuth();
  const { alertDispatch } = useAlert();
  const { setShowLogin, setShowSignup } = useModal();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const googleLoginHandler = async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, googleProvider);
      authDispatch({
        type: "LOGIN_SIGNUP",
        payload: {
          token: response.user.accessToken,
          user: response.user.providerData[0],
        },
      });
      setShowLogin(false);
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: "Login Successfully",
          alertType: "alert-success",
          alertIcon: "fas fa-check-circle alert-icon",
        },
      });
    } catch (error) {
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: error.message,
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    }
  };

  const facebookLoginHandler = async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, facebookProvider);
      authDispatch({
        type: "LOGIN_SIGNUP",
        payload: {
          token: response.user.accessToken,
          user: response.user.providerData[0],
        },
      });
      setShowLogin(false);
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: "Login Successfully",
          alertType: "alert-success",
          alertIcon: "fas fa-check-circle alert-icon",
        },
      });
    } catch (error) {
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: error.message,
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    }
  };

  const emailPasswordLoginHandler = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      authDispatch({
        type: "LOGIN_SIGNUP",
        payload: {
          token: response.user.accessToken,
          user: response.user.providerData[0],
        },
      });
      setShowLogin(false);
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: "Login Successfully",
          alertType: "alert-success",
          alertIcon: "fas fa-check-circle alert-icon",
        },
      });
    } catch (error) {
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: error.message,
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    }
  };

  const userSignupHandler = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      authDispatch({
        type: "LOGIN_SIGNUP",
        payload: {
          token: response.user.accessToken,
          user: response.user.providerData[0],
        },
      });
      setShowSignup(false);
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: "Account Created Successfully",
          alertType: "alert-success",
          alertIcon: "fas fa-check-circle alert-icon",
        },
      });
    } catch (error) {
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: error.message,
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    }
  };

  const passwordResetEmailHandler = (email) => {
    try {
      sendPasswordResetEmail(firebaseAuth, email);
      setShowSignup(false);
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: "Check your mailbox, to reset password",
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    } catch (error) {
      alertDispatch({
        type: "ALERT",
        payload: {
          alertText: error.message,
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
    }
  };

  return (
    <NetworkContext.Provider
      value={{
        googleLoginHandler,
        facebookLoginHandler,
        emailPasswordLoginHandler,
        userSignupHandler,
        passwordResetEmailHandler,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

const useNetworkCalls = () => useContext(NetworkContext);

export { NetworkProvider, useNetworkCalls };
