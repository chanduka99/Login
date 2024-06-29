import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextInput,Datepicker } from "flowbite-react";
import Dropdown from "./DropDown";
import { FaCalendarAlt } from 'react-icons/fa';
import { HiCalendar } from "react-icons/hi2";

function RegisterFormTwo({onNextClicked}) {
    const [title, setTitle] = useState('');
    const [gender,setGender] = useState('');
    const [birthday,setBirthDay] = useState('');
    const [relationshipStatus,setRelationshipStatus]= useState('');
    function handleNext(){
        onNextClicked(2);
    }


    const handleSelectTitle = (value) => {
        setTitle(value);
    };
    const handleSelectGender = (value)=>{
        setGender(value);
    };
    const handleBirthday = (value)=>{
        setBirthDay(value);
    };
    const handleRelationshipStatus = (value) =>{
        setRelationshipStatus(value);
    };
    
  return (
    <div>
        <div>
            {/* Title */}
            <div className=" mt-4">
                    <Dropdown
                    options={['Mr', 'Mrs', 'Ms']}
                    onSelect={handleSelectTitle}
                    placeholder="Select Title"
                    label ="Title *"
                />
            </div>
            {/* Gender */}
            <div className=" mt-4">
                    <Dropdown
                    options={['Male', 'Female',]}
                    onSelect={handleSelectGender}
                    placeholder="Select Gender"
                    label = "Gender *"
                />
            </div>
            {/* Birthday */}
            <span className="mt-4 formLabel2">Birthday *</span>
            <div className="relative flex items-center mt-2">
                <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                
                <HiCalendar className="absolute right-3 text-3xl opacity-60" />
            </div>
            {/* Relationship Status */}
            <div className=" mt-4">
                    <Dropdown
                    options={['Married', 'Unmarried']}
                    onSelect={handleRelationshipStatus}
                    placeholder="Select Relationship Status"
                    label = "Relationship Status *"
                />
            </div>

      
       
        {/* SignUp button */}
        <div className="flex justify-center mt-[8vh]">
          <button className="buttonPrimary w-1/2">Next</button>
        </div>
        {/* Login option */}
        <div className="justify-center text-center px-8 py-5">
          
        </div>
        </div>
    </div>
  )
}

export default RegisterFormTwo;