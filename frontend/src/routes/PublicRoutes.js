import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import Loading from "../components/Loading";

const PublicRoutes = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   if (loading) {
      return <Loading/>;
   }

   if (user) {
      return <Navigate to="/home" replace />;
   }

   return children;
};

export default PublicRoutes;