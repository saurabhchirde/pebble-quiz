import { useAlert, useAuth } from "Context";
import { createContext, useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "firebase.config";

const NetworkContext = createContext({});

const NetworkProvider = ({ children }) => {
  const { authDispatch } = useAuth();
  const { alertDispatch } = useAlert();

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const googleLoginHandler = async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, provider);
      console.log(response.user);
      authDispatch({ type: "LOGIN", payload: response.user });
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

  return (
    <NetworkContext.Provider value={{ googleLoginHandler }}>
      {children}
    </NetworkContext.Provider>
  );
};

const useNetwork = () => useContext(NetworkContext);

export { NetworkProvider, useNetwork };
