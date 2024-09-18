import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Browse from "./components/Browse";
import "./index.css";
import ProtectedRoutes from "./components/ProtecteRoutes";

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
