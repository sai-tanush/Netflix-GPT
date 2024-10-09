import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import ForgotPassword from "./components/auth/ForgotPassword";
import Login from "./components/auth/Login";
import ProtectedRoutes from "./components/protectedroutes/ProtecteRoutes";
import Browse from "./components/homepage/Browse";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Body />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/browse" element={<Browse />} />
      </Route>
    </Routes>
  );
}

export default App;
