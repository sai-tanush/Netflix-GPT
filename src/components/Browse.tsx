import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { RootState } from "../utils/appStore";

const Browse: React.FC = () => {
  const cartUser = useSelector((state: RootState) => state.user);

  console.log("Browse Page Rendering ....");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignOut() {
    dispatch(removeUser());
    navigate("/login");
    console.log("Usercart inside Browse page = ", cartUser);
  }

  return (
    <>
      <div className="relative w-screen h-screen flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">Browse</p>
        <button
          className="w-auto p-2 my-4 bg-red-700 rounded-lg text-white"
          onClick={handleSignOut}
        >
          SignOut
        </button>
      </div>
      <div className="absolute top-2 right-2">
        <p>User-{cartUser.email}</p>
      </div>
    </>
  );
};

export default Browse;
