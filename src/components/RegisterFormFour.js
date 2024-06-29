import React, { useState } from "react";
import Dropdown from "./DropDown";
import { toast } from 'sonner';
import { BsStars } from "react-icons/bs";

function RegisterFormFour() {
  const [country, setCountry] = useState("");

  const handleSelectCountry = (value) => {
    setCountry(value);
  };
  function handleConfirm(){
    try {
      //success toast
        toast(
        <div>
            <div className="flex place-items-center">
                <h1 className="text-primary text-2xl font-normal">Successful</h1>
                <span className="mx-1"></span>
                <BsStars className="text-primary" />
            </div>
            <div>
                <h1>Your Account has been Created succesfully</h1>
            </div>
        </div>, { duration: 5000 });

// toast for error
// toast(
//   <div>
//       <div className="flex place-items-center">
//           <h1 className="text-secondary text-2xl font-normal">Error !</h1>
//           <span className="mx-1"></span>
//       </div>
//       <div>
//           <h1>Your Account has been Created Unsuccesfully</h1>
//       </div>
//   </div>, { duration: 5000 });

        

    } catch (error) {
      //success toast
        toast(
            <div>
                <div className="flex place-items-center">
                    <h1 className="text-secondary text-2xl font-normal">Error !</h1>
                    <span className="mx-1"></span>
                </div>
                <div>
                    <h1>Your Account has been Created Unsuccesfully</h1>
                </div>
            </div>, { duration: 5000 });
        console.log(error)
    }finally{

    }
  }
  return (
    <div>
      <div>
        {/* Address Line One */}
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">Address Line One *</p>
          <input
            type="text"
            placeholder="Enter Adress Line One"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Adress Line Two */}
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">Adress Line Two </p>
          <input
            type="text"
            placeholder="Enter Address Line Two"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* City */}
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">City *</p>
          <input
            type="text"
            placeholder="Enter City"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* State */}
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">State *</p>
          <input
            type="text"
            placeholder="Enter State"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Country */}
        <div className=" mb-5">
          <Dropdown
            options={[
              "Sri Lanka",
              "United States",
              "Canada",
              "United Kingdom",
              "Australia",
              "Germany",
              "France",
              "India",
              "China",
              "Japan",
              "Brazil",
            ]}
            onSelect={handleSelectCountry}
            placeholder="Select Country"
            label="Country *"
          />
        </div>
        {/* Postal Code */}
        <div className="mb-5">
          <p className="formLabel2 mb-2 font-normal">Postal Code *</p>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="w-full h-[6vh] px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Confirm button */}
        <div className="flex justify-center mt-[18vh]">
          <button className="buttonPrimary w-1/2" onClick={handleConfirm}>Confirm</button>
        </div>
        {/* Login option */}
        <div className="justify-center text-center px-8 py-5"></div>
      </div>
    </div>
  );
}

export default RegisterFormFour;
