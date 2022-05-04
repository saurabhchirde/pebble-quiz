import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

const AuthContext = createContext(null);

const initialAuthState = {
  token: "",
  email: "",
  name: "",
  profileImg: "",
  id: "",
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem("pebble-quiz-auth")) ?? initialAuthState
  );

  useEffect(() => {
    localStorage.setItem("pebble-quiz-auth", JSON.stringify(authState));
  }, [authState.token]);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
