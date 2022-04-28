import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("userToken");
  const location = useLocation();
  if (!token) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }
  return children;
};
export default PrivateRoute;
