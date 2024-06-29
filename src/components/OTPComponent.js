import React, { useState, useRef, useEffect } from "react";


let currentOTPIndex = 0;
const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = useRef(null);

  const handleOnChange = (event) => {
    const { value } = event.target;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (event, index) => {
    currentOTPIndex = index;
    if (event.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className={"flex justify-center items-center space-x-1"}>
      {otp.map((_, index) => (
        <React.Fragment key={index}>
          <input
            ref={activeOTPIndex === index ? inputRef : null}
            type="number"
            className={
              "w-16 h-16 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#002945] focus:border-blue-500 focus:text-[#002945] text-[#002945] transition spin-button-none"
            }
            onChange={handleOnChange}
            onKeyDown={(event) => handleOnKeyDown(event, index)}
            value={otp[index]}
          />
          {index === otp.length - 1 ? null : <span className={"w-2 py-0.5 "} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OTPInput;
