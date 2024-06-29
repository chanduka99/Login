import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextInput } from "flowbite-react";

function RegisterFormThree({onNextClicked}) {
    function handleNext(){
        onNextClicked(false);
    }
  return (
    <div>
        <div>
            {/* First Contact Number */}
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">First Contact Number *</p>
            <input
                    type="text"
                    placeholder="Enter First Contact Number"
                    className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
        </div>
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">Second Contact Number </p>
          <input
                    type="text"
                    placeholder="Enter Second Contact Number"
                    className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
        </div>
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">Emergency Contact Number *</p>
          <input
                    type="text"
                    placeholder="Enter Emergency Contact Number"
                    className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
        </div>
        {/* Next button */}
        <div className="flex justify-center mt-[8vh]">
          <button className="buttonPrimary w-1/2" onClick={handleNext}>Next</button>
        </div>
        {/* Login option */}
        <div className="justify-center text-center px-8 py-5">         
        </div>
        </div>
    </div>
  )
}

export default RegisterFormThree;