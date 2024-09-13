import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Provider, useDispatch } from "react-redux";
import Body from "./components/Body";
import { useEffect } from "react";
import "./index.css";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import appStore from "./utils/appStore";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const { uid, email, displayName } = user;
        console.log(`user signed in : uid = ${uid}, email= ${email}, displayName= ${displayName}`);
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      }else{
        //User signed out
        console.log("user signed out ");
        dispatch(removeUser());
      }
    })
  }, [])
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
