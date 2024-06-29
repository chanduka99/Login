import React, { useEffect, useRef, useState } from "react";
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
  const tab= useRef(1);

  const setFormOneVisible = (value)=>{
    setIsFormOne(value);
    setIsFormTwo(!value);
    setActiveTab(2);
    tab.current = 2;
  };
  const setFormTwoVisible = (value)=>{
    setIsFormTwo(value);
    setIsFromThree(!value);
    setActiveTab(3);
    tab.current = 3;
  };
  const setFormThreeVisible = (value)=>{
    setIsFromThree(value);
    setIsFormFour(!value);
    setActiveTab(4);
    tab.current = 4;
  };

  function handleBackButton(){
console.log("active tab num :",activeTab);
    if (tab.current > 0) {
      tab.current--;
      setActiveTab(prevActiveTab => prevActiveTab - 1);
      console.log(tab.current);
    }
    if(tab.current === 1 ){
      setIsFormTwo(false);
      setIsFromThree(false);
      setIsFormFour(false);
      setIsFormOne(true);
      
    }
    if(tab.current === 2){
      setIsFromThree(false);
      setIsFormOne(false);
      setIsFormFour(false);
      setIsFormTwo(true);
    }
    if(tab.current === 3){
      setIsFormFour(false);
      setIsFormTwo(false);
      setIsFormOne(false);
      setIsFromThree(true);
    }
  }
  useEffect(()=>{
    if(activeTab>1){
      setIsBackButton(true);
    }else{
      setIsBackButton(false);
    }
    console.log("render");
  },[activeTab])

  return (
    <div>
      <div className=" card  relative">
        {isBackButton && (
          <button className="absolute left-9 top-16" onClick={handleBackButton}>
            <IoIosArrowBack className="text-4xl" />
          </button>
        )}
        <h1 className=" header">Register</h1>
        {/* form area */}
        <div className="mt-20">
          {isFormOne && (<RegisterFormOne onNextClicked={setFormOneVisible} />)}
          {isFormTwo && (<div className="max-h-[57vh] overflow-auto p-2">
            <RegisterFormTwo onNextClicked={setFormTwoVisible} />
          </div>)}
          {isFromThree && (
            <RegisterFormThree onNextClicked={setFormThreeVisible}/>)}
          {isFormFour && (<div className="max-h-[57vh] overflow-auto p-2">
            <RegisterFormFour />
          </div>)}
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
