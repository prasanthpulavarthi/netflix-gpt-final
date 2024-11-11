import React,{ useEffect }  from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate=useNavigate()
const dispatch =useDispatch()

  const user=useSelector((store=>store.User))
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())

  }

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

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
    <img className='w-44' src={LOGO}/>
   {user && <div>
    

   {showGptSearch && <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
     {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}> {lang.name}</option>)}
    </select>}
    <button className='py-2 px-4 m-2 mx-4 my-4 bg-purple-800 text-white rounded' onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"Gpt Search"}</button>
      <button onClick={handleSignOut} className='font-bold text-white'>(signout)</button>
    </div>}
  </div>

  )
}

export default Header   