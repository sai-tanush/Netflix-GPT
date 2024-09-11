import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import "./index.css";
import Login from "./components/Login";

function App() {
  return (
    < div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
