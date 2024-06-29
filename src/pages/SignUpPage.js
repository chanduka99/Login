import React, { useState } from "react";
import SignUp from "../components/SignUp";
import VerifyAccount from "../components/VerifyAccount";
import Register from "../components/Register";
import circle from "../assets/Circles.svg";
import work from "../assets/WORK360.svg";

function SignUpPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isVerifyAccount, setIsVerfiyAccount] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const email = "hello@gmail.com";

  const setSignUpVisible = (value) => {
    setIsSignUp(value);
    setIsVerfiyAccount(!value);
  };
  const setVerfiyAccountVisible = (value) => {
    setIsVerfiyAccount(value);
    setIsRegister(!value);
  };

  return (

    <div className="bg-[rgba(0,41,69,0.1)] h-[100vh] w-full relative overflow-clip">
      <div className="absolute right-1">
        <img src={circle} alt="circle" className="" />
      </div>
      <div className="flex h-[100vh] place-items-center">
        {/* App360 logo and quote */}
        <div className="ml-[15vh]  w-full">
          <img src={work} alt="work360" className="w-[50vh] " />
          <p className="mt-10 text-xl font-normal">
            Now your companies & employees are in one <br /> place and always
            under the control
          </p>
        </div>
        {/* signUP form */}
        <div className=" flex justify-end   w-full">
          <div className="mt-[1vh] mr-[25vh]">
            {isSignUp && <SignUp onSignUpClicked={setSignUpVisible} />}
            {isVerifyAccount && (
              <VerifyAccount
                userEmail={email}
                onConfirmOTPClicked={setVerfiyAccountVisible}
              />
            )}
            {isRegister && <Register />}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
