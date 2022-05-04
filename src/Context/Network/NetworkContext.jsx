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
import { alertDispatchHandler } from "Utils/alertDispatchHandler";

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
      alertDispatchHandler(
        alertDispatch,
        "ALERT",
        "SUCCESS",
        "Login Successfully"
      );
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
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
      alertDispatchHandler(
        alertDispatch,
        "ALERT",
        "SUCCESS",
        "Login Successfully"
      );
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
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
      alertDispatchHandler(
        alertDispatch,
        "ALERT",
        "SUCCESS",
        "Login Successfully"
      );
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
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
      alertDispatchHandler(
        alertDispatch,
        "ALERT",
        "SUCCESS",
        "Account Created Successfully"
      );
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
    }
  };

  const passwordResetEmailHandler = (email) => {
    try {
      sendPasswordResetEmail(firebaseAuth, email);
      setShowSignup(false);
      alertDispatchHandler(
        alertDispatch,
        "ALERT",
        "SUCCESS",
        "Check your mailbox, to reset password"
      );
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
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
