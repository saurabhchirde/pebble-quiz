import { createContext, useContext, useReducer } from "react";
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
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  console.log(authState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
