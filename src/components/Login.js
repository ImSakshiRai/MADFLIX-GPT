import React, { useState, useRef} from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase' //from here functions auth wil get
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {BG_URL, USER_AVATAR} from "../utils/constants"
const Login = () => { //state for toggle in forms
  const [isSignInForm, SetIsSignInForm] = useState(true);

 //state for error message displaying on page
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null); //These will create a reference to earlier input mail and pass
  const password = useRef(null);

  const handleButtonClick =()=>{
    //validate the form data
    //console.log(Name.current.value);
   const message = checkValidData(email.current.value, password.current.value);
   setErrorMessage(message); //here we set the error message whatever will return from this checkVAlidData -ki pswrd shi h ya glt
    if (message) return ; //if  there is an error it returns without doing anything else

    //If the email and password are vaild 
   //then procced to Sign In/Sign Up Logic
   
  if(!isSignInForm){ //that means it sign up form
        //Sign Up Logic 
        createUserWithEmailAndPassword(
          auth,
          email.current.value, 
          password.current.value
          )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser; //this user  will get the updated value from user
            dispatch(addUser({uid:uid, 
            email:email,
            displayName: displayName, 
            photoURL:photoURL,
          })
          );
          })
          .catch((error) => {
            // An error occurred
           setErrorMessage(error.message);//displays the error message
          });
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });  

  }else{
        //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
      });   
  }
  };
  
   
  
  //function for some one click on this will become Sign Up Form
  const toggleSignInForm = ()=> {
    SetIsSignInForm(!isSignInForm);      
  }
  return (
    <div >
      <Header/>
      <div className='absolute '>

       <img className='h-screen w-screen object-cover'
       src={BG_URL}
       alt='Background'></img>
      </div>
      <form 
        onSubmit={(e) =>e.preventDefault()}//this is used to prevent from reloading page when user press submit button onClick={handleButtonClick} 

        className='md:w-3/12 w-full absolute  bg-opacity-80 p-12 bg-black my-36 mx-auto right-0 left-0'>

        <h1 className='font-bold md:text-3xl text-2xl py-4 text-white'>
        {isSignInForm? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && ( //agr Sign In form nai h or Sign Up form hh tb input name show kro
          <input type='text'
           ref={name} 
          placeholder='Full Name' className='p-2 my-4 w-full border rounded-sm text-center bg-neutral-700 text-white'>
          </input>
        )}

        <input type='text' 
        ref={email} //here we adding refernce of this inout box email to that one
        placeholder='Email Address' 
        className='p-2 my-4 w-full border rounded-sm text-center bg-neutral-700 text-white '>
        </input>

        <input type='password' 
        ref={password} //same as above but here we are storing it in password variable
        placeholder='Password' 
        className='p-2 my-4 w-full rounded-sm text-center bg-neutral-700 text-white'>
        </input>
        
        {/* ERROR MESSAGE WILL APPEAR ON PAGE */}
        <p className='text-red-600  text-lg py-2'>{errorMessage}</p>
        <button 
        className='p-2 my-6 text-white bg-red-600 w-full rounded-sm' onClick={handleButtonClick} >
        {isSignInForm? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 text-white cursor-pointer' 
        onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>

      </form>


    </div>
  )
}

export default Login
