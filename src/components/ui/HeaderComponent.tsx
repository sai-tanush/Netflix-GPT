import { useDispatch } from "react-redux";
import HeaderLogo from "./HeaderLogo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/userSlice";
import NETFLIX_BG from "../../utils/constants";

const HeaderComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        //User signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img
        src={NETFLIX_BG}
        alt="background_img"
        height="100vh"
        className="relative bg-gradient-to-b from-black 
        h-screen object-cover md:h-auto"
      />
      <div className="absolute top-0 left-0 w-screen h-[100%] bg-black bg-opacity-70"></div>
      <HeaderLogo />
    </div>
  );
};

export default HeaderComponent;
