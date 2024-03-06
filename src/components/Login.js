import React, { useState, useRef } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate';

const Login = () => { //state for toggle in forms
  const [isSignInForm, SetIsSignInForm] = useState(true);

 //state for error message displaying on page
  const [errorMessage, setErrorMessage] = useState(null);

  const Name = useRef(null);
  const email = useRef(null); //These will create a reference to earlier input mail and pass
  const password = useRef(null);

  const handleButtonClick =()=>{
    //validate the form data
    console.log(Name.current.value);
   const message = checkValidData(email.current.value,password.current.value, Name.current.value);
   setErrorMessage(message); //here we set the error message whatever will return from this checkVAlidData -ki pswrd shi h ya glt
  };
  //If the email and password are vaild 
  //then procced to Sign In/Sign Up

  
  //function for some one click on this will become Sign Up Form
  const toggleSignInForm = ()=> {
    SetIsSignInForm(!isSignInForm);      
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>

       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg'
       alt='Background'></img>
      </div>
      <form 
        onSubmit={(e) =>e.preventDefault()}//this is used to prevent from reloading page when user press submit button onClick={handleButtonClick} 

        className='w-3/12 absolute  bg-opacity-80 p-12 bg-black my-36 mx-auto right-0 left-0'>

        <h1 className='font-bold text-3xl py-4 text-white'>
        {isSignInForm? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && ( //agr Sign In form nai h or Sign Up form hh tb input name show kro
          <input type='text'
          ref={Name} 
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
