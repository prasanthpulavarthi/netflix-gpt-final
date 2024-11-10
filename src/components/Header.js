import React,{ useEffect }  from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate=useNavigate()
const dispatch =useDispatch()

  const user=useSelector((store=>store.User))

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {Uid,email,displayName} = user;
        dispatch(addUser({Uid:Uid,email:email,displayName:displayName}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    return ()=>unsubscribe()
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
    <img className='w-44' src={LOGO}/>
   {user && <div>
      <button onClick={handleSignOut} className='font-bold text-white'>(signout)</button>
    </div>}
  </div>

  )
}

export default Header   