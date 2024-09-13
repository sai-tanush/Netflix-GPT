import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import "./index.css";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    < div>
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Body />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;


//-build login page/ signup page and resume from 01:27:16
