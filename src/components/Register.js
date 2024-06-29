import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextInput } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";
import RegisterFormOne from "./RegisterFormOne";
import RegisterFormTwo from "./RegisterFormTwo";
import RegisterFormThree from "./RegisterFormThree";
import RegisterFormFour from "./RegisterFormFour";


function Register() {
  const [isBackButton, setIsBackButton] = useState(false);
  const [isFormOne, setIsFormOne] = useState(true);
  const [isFormTwo, setIsFormTwo] = useState(false);
  const [isFromThree, setIsFromThree] = useState(false);
  const [isFormFour, setIsFormFour] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const setFormOneVisible = (value)=>{
    setIsVerfiyAccount(value);
    setIsRegister(!value);
  };
  const setFormTwoVisible = (value)=>{
    setIsVerfiyAccount(value);
    setIsRegister(!value);
  };
  const setFormThreeVisible = (value)=>{
    setIsVerfiyAccount(value);
    setIsRegister(!value);
  };

  const getActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className=" card  relative">
        {isBackButton && (
          <button className="absolute left-9 top-16">
            <IoIosArrowBack className="text-4xl" />
          </button>
        )}
        <h1 className=" header">Register</h1>
        {/* form area */}
        <div className="mt-20">
          <RegisterFormOne onNextClicked={getActiveTab} />
          {/* <RegisterFormTwo onNextClicked={getActiveTab} /> */}
          {/* <RegisterFormThree onNextClicked={getActiveTab}/> */}
          {/* <div className="max-h-[60vh] overflow-auto p-2">
            <RegisterFormFour onNextClicked={getActiveTab}/>
          </div> */}
          {/* Login Option*/}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2  w-full px-5">
            <div className="text-base font-normal text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
