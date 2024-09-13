import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import "./index.css";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    < div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;


//-build login page/ signup page and resume from 01:27:16
