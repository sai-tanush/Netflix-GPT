import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import Browse from "./components/Browse";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const { uid, email, displayName } = user;
        console.log(`user signed in : uid = ${uid}, email= ${email}, displayName= ${displayName}`);
        dispatch(addUser({uid, email, displayName}));
        navigate("/browse");
      }else{
        //User signed out
        console.log("user signed out ");
        dispatch(removeUser());
        navigate("/login");
      }
    })
  }, [])
  return (   
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="*" element={<Body />} />
      </Routes>
  );
}

export default App;


//-build login page/ signup page and resume from 01:27:16
