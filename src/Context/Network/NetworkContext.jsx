import { useAlert, useAuth, useModal, useQuiz } from "Context";
import { createContext, useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  firebaseAuth,
  firestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase.config";
import { alertDispatchHandler } from "Utils/alertDispatchHandler";

const NetworkContext = createContext({});

const NetworkProvider = ({ children }) => {
  const {
    // authState: { email },
    authDispatch,
  } = useAuth();
  const { alertDispatch } = useAlert();
  const { setShowLogin, setShowSignup } = useModal();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // add user to database after log in or signup
  const addUserToFirestore = async (userData) => {
    const addUser = doc(firestore, `users/${userData.email}`);

    // const userData = {
    //   // user info
    //   name: response.user.providerData[0].displayName ?? "",
    //   email: response.user.providerData[0].email,
    //   id: response.user.providerData[0].uid ?? "",
    //   profileImg: response.user.providerData[0].photoURL ?? "",
    //   //  quiz info
    //   quizGiven: 0,
    //   winningStreak: 0,
    //   level: 0,
    //   gameWin: 0,
    //   highestScore: 0,
    //   correctAnswers: 0,
    //   badges: [{ name: "", badge: "" }],
    // };

    try {
      await setDoc(addUser, userData, { merge: true });
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
    }
  };

  // update userdata after playing quiz
  const updateFirestoreUserData = async (email, playedQuizData) => {
    const selectUser = doc(firestore, `users/${email}`);
    // console.log(playedQuizData);
    try {
      await updateDoc(selectUser, playedQuizData);
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
    }
  };

  // get userdata
  const getUserData = async (userData, email, setPlayedQuizData) => {
    const selectUser = doc(firestore, `users/${email}`);
    // console.log(playedQuizData);
    try {
      const userResponse = await getDoc(selectUser);
      if (userResponse.exists()) {
        console.log("skipped already exist", userResponse.data());
        setPlayedQuizData(userResponse.data());
      } else {
        console.log("adding new", userResponse.data());
        addUserToFirestore(userData);
        setPlayedQuizData(userResponse.data());
      }
    } catch (error) {
      alertDispatchHandler(alertDispatch, "ALERT", "INFO", error.message);
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
      // check if user is exist in database
      // getUserData(response.user.providerData[0].email);
      // add user to database
      // addUserToFirestore(response);

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

      // add user to database
      // addUserToFirestore(response);

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

      // add user to database
      // addUserToFirestore(response);

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

      // add user to database
      // addUserToFirestore(response);

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
        addUserToFirestore,
        updateFirestoreUserData,
        getUserData,
        passwordResetEmailHandler,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

const useNetworkCalls = () => useContext(NetworkContext);

export { NetworkProvider, useNetworkCalls };
