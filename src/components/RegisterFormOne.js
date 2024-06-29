import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextInput } from "flowbite-react";

function RegisterFormOne({onNextClicked}) {
    function handleNext(){
        onNextClicked(2);
    }
  return (
    <div>
        {/* First Name */}
        <div className="mb-2">
          <p className="formLabel2 mb-1 font-normal">First Name *</p>
          <input
            type="text"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Middle Name*/}
        <div className="mb-2">
          <p className="formLabel2 mb-1 font-normal">Middle Name *</p>
          <input
            type="text"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Last Name */}
        <div className="mb-2">
          <p className="formLabel2 mb-1 font-normal">Last Name *</p>
          <input
            type="text"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* NIC Number */}
        <div className="mb-5">
          <p className="formLabel2 mb-1 font-normal">NIC Number *</p>
          <input
            type="text"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
         
        {/* Next button */}
        <div className="flex justify-center ">
          <button className="buttonPrimary w-1/2">Next</button>
        </div>
        {/* Login option */}
        <div className="justify-center text-center px-8 py-5">
          
        </div>
        </div>
    </div>
  )
}

export default RegisterFormOne;