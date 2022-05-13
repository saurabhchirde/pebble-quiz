import { useAuth } from "Context";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  return <>{token ? children : <Navigate to="/" replace />}</>;
};
