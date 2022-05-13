import { useAuth, useModal } from "Context";
import { createContext, useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";
import {
  firebaseAuth,
  firestore,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase.config";
import { AlertToast } from "Components";

const NetworkContext = createContext({});

const NetworkProvider = ({ children }) => {
  const { authDispatch } = useAuth();
  const { setShowLogin, setShowSignup } = useModal();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // update userdata after playing quiz
  const updateFirestoreUserData = async (email, userQuizData) => {
    const selectUser = doc(firestore, `users/${email}`);
    try {
      await updateDoc(selectUser, userQuizData);
    } catch (error) {
      AlertToast("error", error.message);
    }
  };

  // update user name in firestore
  const updateUserNameDBHandler = async (email, newName) => {
    const selectUser = doc(firestore, `users/${email}`);
    try {
      await updateDoc(selectUser, { name: newName });
      AlertToast("success", "Name Changed Successfully");
    } catch (error) {
      AlertToast("error", error.message);
    }
  };

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
      setShowSignup(false);
      AlertToast("success", "Login Successfully");
    } catch (error) {
      AlertToast("error", error.message);
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
      setShowSignup(false);
      AlertToast("success", "Login Successfully");
    } catch (error) {
      AlertToast("error", error.message);
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
      setShowSignup(false);
      AlertToast("success", "Login Successfully");
    } catch (error) {
      AlertToast("error", error.message);
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
      AlertToast("success", "Account Created Successfully");
    } catch (error) {
      AlertToast("error", error.message);
    }
  };

  const passwordResetEmailHandler = (email) => {
    try {
      sendPasswordResetEmail(firebaseAuth, email);
      AlertToast("success", "Check your mailbox, to reset password");
    } catch (error) {
      AlertToast("error", error.message);
    }
  };

  // change account password
  const passwordChangeHandler = (newPassword) => {
    const selectUser = firebaseAuth.currentUser;

    try {
      updatePassword(selectUser, newPassword);
      AlertToast("success", "Password Updated, Login with new Password");
    } catch (error) {
      AlertToast("error", error.message);
    }
  };

  const accountDeleteHandler = async (email) => {
    try {
      await deleteDoc(doc(firestore, `users/${email}`));
      AlertToast("info", "Account Deleted Successfully");
    } catch (error) {
      AlertToast("error", error.message);
    }
  };

  return (
    <NetworkContext.Provider
      value={{
        googleLoginHandler,
        facebookLoginHandler,
        emailPasswordLoginHandler,
        userSignupHandler,
        updateFirestoreUserData,
        passwordResetEmailHandler,
        accountDeleteHandler,
        passwordChangeHandler,
        updateUserNameDBHandler,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

const useNetworkCalls = () => useContext(NetworkContext);

export { NetworkProvider, useNetworkCalls };
