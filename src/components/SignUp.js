import React from "react";
import { Link } from "react-router-dom";

function SignUp({onSignUpClicked}) {

  function handleSignUp(){
    try {
      onSignUpClicked(false);
    } catch (error) {
      console.log(error);
    }finally{

    }
  }


  return (
    <div className=" card  relative">
      <h1 className=" header">SignUp</h1>
      {/* form area */}
      <div className="mt-20">
        {/* email */}
        <div className="mb-5">
          <p className="formLabel mb-2 font-normal">email address</p>
          <input
            type="email"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* password */}
        <div className="mb-5">
          <p className="formLabel mb-2 font-normal">Your password</p>
          <input
            type="password"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* SignUp button */}
        <div className="mt-10">
          <button className="buttonPrimary" onClick={handleSignUp}>Sign Up</button>
        </div>
        {/* Login option */}
        <div className="justify-center text-center px-8 py-5">
          <div className=" text-base font-normal">
            <span className="text-black opacity-70">
              Already have a account ?{" "}
            </span>
            <div className="inline-block">
              <Link to={"/login"}>
                <p className="font-semibold text-secondary">Log In</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Powered by APP360*/}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2  w-full px-5">
          <div className="text-base font-normal text-center">
            <span className="text-poweredBy">Powered by </span>
            <span className="font-bold text-primary">APP</span>
            <span className="font-bold text-secondary">360</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
