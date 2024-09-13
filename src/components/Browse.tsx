import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Browse:React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignOut(){
    dispatch(removeUser());
    navigate("/login");
  }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
    <p className='text-3xl font-bold'>Browse</p>
    <button className='w-auto p-2 my-4 bg-red-700 rounded-lg text-white' onClick={handleSignOut}>SignOut</button>
    </div>
  )
}

export default Browse