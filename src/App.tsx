import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { addUser, removeUser } from "./utils/userSlice";
import Browse from "./components/Browse";
import "./index.css";
import ProtectedRoutes from "./components/ProtecteRoutes";
import { auth } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const { uid, email, displayName } = user;
        console.log(`user signed in : uid = ${uid}, email= ${email}, displayName= ${displayName}`);
        dispatch(addUser({uid, email, displayName}));
        console.log("user signed in");
        
      }else{
        //User signed out
        console.log("user signed out ");
        dispatch(removeUser());
        navigate("/login")
      }
    })
    return () => unsubscribe();
  }, [])
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

