import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import Loading from "../components/Loading";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

   if (loading) {
      return <Loading/>;
   }

   if (!user) {
      return <Navigate to="/login" replace />;
   }

   return children;
};

export default ProtectedRoutes;