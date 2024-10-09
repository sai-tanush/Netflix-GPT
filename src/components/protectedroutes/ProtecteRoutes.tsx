import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../utils/appStore";

const ProtectedRoutes: React.FC = () => {
  const cartUser = useSelector((state: RootState) => state.user);
  return cartUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
