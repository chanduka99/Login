import React, { useState } from "react";
import SignUp from '../components/SignUp';
import VerifyAccount from '../components/VerifyAccount';
import Register from '../components/Register';

function SignUpPage() {
    const [isSignUp,setIsSignUp] = useState(true);
    const [isVerifyAccount,setIsVerfiyAccount]= useState(false);
    const [isRegister,setIsRegister]= useState(false);
    const email = "hello@gmail.com"

    const setSignUpVisible = (value)=>{
      setIsSignUp(value);
      setIsVerfiyAccount(!value);
    };
    const setVerfiyAccountVisible = (value)=>{
      setIsVerfiyAccount(value);
      setIsRegister(!value);
    };

  return (
    <div className='h-[100vh] bg-slate-500'>
      <div className='h-[8vh] bg-black'></div>
      {isSignUp && (<SignUp onSignUpClicked={setSignUpVisible}/>)}
      {isVerifyAccount && (<VerifyAccount userEmail ={email} onConfirmOTPClicked={setVerfiyAccountVisible}/>) }
      {(isRegister && <Register/>)}        
    </div>
  )
}

export default SignUpPage;