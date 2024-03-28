import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LANGUAGES, LOGO } from '../utils/constants';
import {toggleGptSearchView} from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  //SIGN OUT
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

//this is like event listener so whe have to call ir for once--added from body to header for bug fix of redirect
  useEffect(() =>{ //here we will call on state change
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid, email, displayName, photoURL} = user;
      dispatch(
        addUser({
        uid:uid, 
        email:email,
        displayName: displayName, 
        photoURL:photoURL,
      })
      ); //will add put in store
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser());//will remove from the store
      navigate("/")
    }
  });
   return () =>  unsubscribe(); //clean up function when component unmounts
  }, []);
  
  const handleGPTSearchClick = () => {
  // Toggle GPT Search
  dispatch(toggleGptSearchView());
  }

  //For lang change 
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src = {LOGO}
       alt='logo'></img>

      {user && ( //if my user is null then dont load this
        <div className='flex p-2 '>
          {showGptSearch && ( //when showGptsearch is true then only select will show
            <select 
              className='p-2 m-2 bg-stone-500 text-white'
              onChange={handleLanguageChange}
              > 
              {LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
                </option> 
                ))}
            </select>
          )}

          <button 
            onClick={handleGPTSearchClick}
            className='py-2 px-4 mx-4 my-2 bg-purple-500 text-white rounded-lg'>
            {showGptSearch? "Home" : "GPT Search"}
          </button>
          <img className='w-12 h-12 px-2 '
          alt='usericon' 
          src={user?.photoURL}>
          </img>
          <button 
          onClick={handleSignOut}
          className='font-bold text-white'
          >(Sign Out)</button>
        </div>
       )}
    </div>
  )
}

export default Header
