import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};
